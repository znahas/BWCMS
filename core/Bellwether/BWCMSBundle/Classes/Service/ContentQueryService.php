<?php

namespace Bellwether\BWCMSBundle\Classes\Service;

use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Bellwether\BWCMSBundle\Classes\Base\BaseService;

use Bellwether\BWCMSBundle\Classes\Base\ContentTypeInterface;
use Bellwether\BWCMSBundle\Classes\Content\ContentType;
use Bellwether\BWCMSBundle\Entity\ContentEntity;
use Bellwether\BWCMSBundle\Entity\ContentMetaEntity;
use Bellwether\BWCMSBundle\Entity\ContentRelationEntity;

use Bellwether\BWCMSBundle\Classes\Constants\ContentFieldType;
use Bellwether\BWCMSBundle\Classes\Constants\ContentPublishType;
use Bellwether\BWCMSBundle\Classes\Constants\ContentSortByType;
use Bellwether\BWCMSBundle\Classes\Constants\ContentSortOrderType;

use Bellwether\Common\StringUtility;
use Bellwether\Common\Pagination;

use Symfony\Component\Form\Form;
use Symfony\Component\Form\FormBuilder;
use Doctrine\ORM\NoResultException;


class ContentQueryService extends BaseService
{

    function __construct(ContainerInterface $container = null, RequestStack $request_stack = null)
    {
        $this->setContainer($container);
        $this->setRequestStack($request_stack);
    }

    /**
     * @return ContentQueryService
     */
    public function getManager()
    {
        return $this;
    }

    /**
     * Service Init.
     */
    public function init()
    {
    }


    /**
     * @param ContentEntity $contentEntity
     * @param Pagination $pager
     * @param string $type
     * @return Pagination
     */
    public function getFolderItems($contentEntity = null, Pagination $pager, $type = 'Content', $schema = null, $onlyImage = false)
    {
        $start = $pager->getStart();
        $limit = $pager->getLimit();

        $contentRepository = $this->getContentRepository();
        $qb = $contentRepository->getChildrenQueryBuilder($contentEntity, !is_null($contentEntity));

        if (!is_null($contentEntity)) {
            $sortOrder = ' DESC';
            if ($contentEntity->getSortOrder() == ContentSortOrderType::ASC) {
                $sortOrder = ' ASC';
            }
            if ($contentEntity->getSortBy() == ContentSortByType::SortIndex) {
                $qb->add('orderBy', 'node.treeLeft' . $sortOrder);
            } elseif ($contentEntity->getSortBy() == ContentSortByType::Created) {
                $qb->add('orderBy', 'node.createdDate' . $sortOrder);
            } elseif ($contentEntity->getSortBy() == ContentSortByType::Published) {
                $qb->add('orderBy', 'node.publishDate' . $sortOrder);
            } elseif ($contentEntity->getSortBy() == ContentSortByType::Title) {
                $qb->add('orderBy', 'node.title' . $sortOrder);
            } elseif ($contentEntity->getSortBy() == ContentSortByType::Size) {
                $qb->add('orderBy', 'node.size' . $sortOrder);
            }
        } else {
            $qb->add('orderBy', 'node.publishDate DESC');
        }

        $registeredContents = $this->cm()->getRegisteredContentTypes($type, $schema);
        $condition = array();
        foreach ($registeredContents as $cInfo) {
            $condition[] = " (node.type = '" . $cInfo['type'] . "' AND node.schema = '" . $cInfo['schema'] . "' )";
        }
        if (!empty($condition)) {
            $qb->andWhere(' ( ' . implode(' OR ', $condition) . ' ) ');
        }
        $qb->andWhere(" node.site ='" . $this->sm()->getCurrentSite()->getId() . "' ");

        if (!$this->isGranted('ROLE_AUTHOR')) {
            $qb->andWhere(" node.status ='" . ContentPublishType::Published . "' ");
        }

        if ($onlyImage == 'yes') {
            $qb->leftJoin('Bellwether\BWCMSBundle\Entity\ContentMediaEntity', 'media', \Doctrine\ORM\Query\Expr\Join::WITH, ' node.id = media.content ');
            $qb->andWhere(" ( media.height > 0 AND media.width > 0 ) ");
        }

        $qb->setFirstResult($start);
        $qb->setMaxResults($limit);

        $pager->callPreQueryCallback($qb, $contentEntity, $type, $schema);

        $result = $qb->getQuery()->getResult();
        $pager->setItems($result);

        $qb2 = clone $qb; // don't modify existing query
        $qb2->resetDQLPart('orderBy');
        $qb2->resetDQLPart('having');
        $qb2->select('COUNT(node) AS cnt');
        $countResult = $qb2->getQuery()->setFirstResult(0)->getScalarResult();
        $totalCount = $countResult[0]['cnt'];
        $pager->setTotalItems($totalCount);
        return $pager;
    }


    /**
     * @param ContentEntity $contentEntity
     * @param string $taxonomySchema
     * @return array
     */
    public function getContentTaxonomy($contentEntity, $taxonomySchema = null)
    {
        if (!($contentEntity instanceof ContentEntity)) {
            return array();
        }
        $contentClass = $this->cm()->getContentClass($contentEntity->getType(), $contentEntity->getSchema());
        $relations = $contentClass->getTaxonomyRelations($taxonomySchema);
        if (empty($relations)) {
            return array();
        }
        $returnArray = array();
        foreach ($relations as $relation) {
            $returnArray[$relation['name']] = $this->getContentTaxonomyForRelation($contentEntity, $relation);
        }
        return $returnArray;
    }

    /**
     * @param ContentEntity $contentEntity
     * @param string $taxonomySchema
     * @return array
     */
    private function getContentTaxonomyForRelation($contentEntity, $relation)
    {
        $qb = $this->cm()->getContentRepository()->createQueryBuilder('node');
        $qb->leftJoin('Bellwether\BWCMSBundle\Entity\ContentRelationEntity', 'relation', \Doctrine\ORM\Query\Expr\Join::WITH, ' node.id = relation.relatedContent ');
        $qb->andWhere(" ( node.type = '" . $relation['type'] . "' AND node.schema = '" . $relation['schema'] . "' ) ");
        $qb->andWhere(" relation.content = '" . $contentEntity->getId() . "' ");
        if (!$this->isGranted('ROLE_AUTHOR')) {
            $qb->andWhere(" node.status ='" . ContentPublishType::Published . "' ");
        }
        $qb->andWhere(" node.site ='" . $this->sm()->getCurrentSite()->getId() . "' ");
        $qb->add('orderBy', 'node.title ASC');
        return $qb->getQuery()->getResult();
    }

    /**
     * @param ContentEntity $contentEntity
     * @return array
     */
    public function getContentMenuItems($contentEntity, $onlyPublished = true)
    {
        $contentRepository = $this->cm()->getContentRepository();
        $qb = $contentRepository->getChildrenQueryBuilder($contentEntity, false);
        if ($onlyPublished) {
            $qb->andWhere(" node.status ='" . ContentPublishType::Published . "' ");
        }
        $result = $qb->getQuery()->getResult();
        return $result;
    }


    /**
     * @param ContentEntity $contentEntity
     * @return array
     */
    public function getContentWidgetItems($contentEntity)
    {
        $contentRepository = $this->cm()->getContentRepository();
        $qb = $contentRepository->getChildrenQueryBuilder($contentEntity, false);
        $qb->andWhere(" node.status ='" . ContentPublishType::Published . "' ");
        $result = $qb->getQuery()->getResult();
        return $result;
    }


    /**
     * @param ContentEntity $contentEntity
     * @return string
     */
    final public function getContentTemplate($contentEntity)
    {
        $templatePath = str_replace('.', DIRECTORY_SEPARATOR, $contentEntity->getType() . '.' . $contentEntity->getSchema());
        return $templatePath . DIRECTORY_SEPARATOR . $contentEntity->getTemplate();
    }

    /**
     * @param ContentEntity $contentEntity
     * @return string|null
     */
    public function getPublicURL($contentEntity, $full = false)
    {
        $contentClass = $this->cm()->getContentClass($contentEntity->getType(), $contentEntity->getSchema());
        return $contentClass->getPublicURL($contentEntity, $full);
    }


    public function getContentBySlugPath($pathSlug = null, $contentTypes = array())
    {
        if ($pathSlug == null) {
            return null;
        }

        $pathList = $this->getCleanedPathArray($pathSlug);
        if (empty($pathList)) {
            return null;
        }

        $content = null;
        foreach ($pathList as $path) {
            $content = $this->getContentBySlug($path, $content, $contentTypes);
            if ($content == null) {
                return null;
            }
        }
        return $content;
    }

    /**
     * @param string $slug
     * @param ContentEntity $parent
     * @return null|ContentEntity
     */
    public function getContentByGUID($guid, $contentTypes = array())
    {
        $qb = $this->cm()->getContentRepository()->createQueryBuilder('node');
        if (!empty($contentTypes)) {
            $condition = array();
            foreach ($contentTypes as $cInfo) {
                $condition[] = " (node.type = '" . $cInfo['type'] . "' AND node.schema = '" . $cInfo['schema'] . "' )";
            }
            if (!empty($condition)) {
                $qb->andWhere(' ( ' . implode(' OR ', $condition) . ' ) ');
            }
        }
        $qb->andWhere(" node.id = '{$guid}' ");

        if (!$this->isGranted('ROLE_AUTHOR')) {
            $qb->andWhere(" node.status ='" . ContentPublishType::Published . "' ");
        }

        $qb->andWhere(" node.site ='" . $this->sm()->getCurrentSite()->getId() . "' ");
        $qb->setMaxResults(1);

        try {
            return $qb->getQuery()->getSingleResult();
        } catch (NoResultException $e) {
            return null;
        }
    }

    /**
     * @param string $slug
     * @param ContentEntity $parent
     * @return null|ContentEntity
     */
    public function getContentBySlug($slug, $parent = null, $contentTypes = array())
    {
        $qb = $this->cm()->getContentRepository()->createQueryBuilder('node');
        if (!empty($contentTypes)) {
            $condition = array();
            foreach ($contentTypes as $cInfo) {
                $condition[] = " (node.type = '" . $cInfo['type'] . "' AND node.schema = '" . $cInfo['schema'] . "' )";
            }
            if (!empty($condition)) {
                $qb->andWhere(' ( ' . implode(' OR ', $condition) . ' ) ');
            }
        }
        $qb->andWhere(" node.slug = '{$slug}' ");
        if (!empty($parent)) {
            $qb->andWhere(" node.treeParent = '" . $parent->getId() . "' ");
        }

        if (!$this->isGranted('ROLE_AUTHOR')) {
            $qb->andWhere(" node.status ='" . ContentPublishType::Published . "' ");
        }

        $qb->andWhere(" node.site ='" . $this->sm()->getCurrentSite()->getId() . "' ");
        $qb->setMaxResults(1);

        try {
            return $qb->getQuery()->getSingleResult();
        } catch (NoResultException $e) {
            return null;
        }
    }

    private function getCleanedPathArray($pathSlug)
    {
        $returnArray = array();
        $pathList = explode('/', $pathSlug);
        if (!empty($pathList)) {
            foreach ($pathList as $path) {
                if (!empty($path)) {
                    $returnArray[] = strtolower($path);
                }
            }
        }
        return $returnArray;
    }


    /**
     * @return \Bellwether\BWCMSBundle\Entity\ContentRepository
     */
    public function getContentRepository()
    {
        return $this->em()->getRepository('BWCMSBundle:ContentEntity');
    }

}
