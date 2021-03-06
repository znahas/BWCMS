<?php

namespace Bellwether\BWCMSBundle\Controller;

use Bellwether\BWCMSBundle\Classes\Base\FrontEndControllerInterface;
use Bellwether\BWCMSBundle\Classes\Base\BaseController;
use Bellwether\Common\Pagination;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Bellwether\BWCMSBundle\Entity\ContentEntity;
use Bellwether\BWCMSBundle\Entity\ContentMediaEntity;
use Symfony\Component\HttpFoundation\Request;
use Bellwether\BWCMSBundle\Classes\Constants\ContentPublishType;

use Bellwether\BWCMSBundle\Classes\Service\ContentService;
use Bellwether\BWCMSBundle\Classes\Service\ContentQueryService;

class FrontEndController extends BaseController implements FrontEndControllerInterface
{
    /**
     * @Template()
     */
    public function homeAction($siteSlug)
    {
        $templateVariables = array();
        $template = $this->tp()->getCurrentSkin()->getHomePageTemplate();
        return $this->render($template, $templateVariables);
    }

    /**
     * @Template()
     */
    public function contentFolderAction($siteSlug, $folderSlug)
    {
        $folderTypes = $this->cm()->getRegisteredContentTypes('Content', 'Folder');
        $contentEntity = $this->cm()->getContentBySlugPath($folderSlug, $folderTypes);
        if (empty($contentEntity)) {
            throw new NotFoundHttpException('Folder does not exist');
        }

        $contentItems = $this->cm()->getFolderItems($contentEntity);
        $templateVariables = array(
            'content' => $contentEntity,
            'items' => $contentItems['items']
        );
        $template = $this->getContentTemplate($contentEntity);
        return $this->render($template, $templateVariables);
    }

    /**
     * @Template()
     */
    public function contentPageAction($siteSlug, $folderSlug, $pageSlug)
    {

        $folderTypes = $this->cm()->getRegisteredContentTypes('Content', 'Folder');
        $folderEntity = $this->cm()->getContentBySlugPath($folderSlug, $folderTypes);
        if (empty($folderEntity)) {
            throw new NotFoundHttpException('Page does not exist');
        }

        $pageTypes = $this->cm()->getRegisteredContentTypes('Content', 'Page');
        $pageEntity = $this->cm()->getContentBySlug($pageSlug, $folderEntity, $pageTypes);
        if (empty($pageEntity)) {
            throw new NotFoundHttpException('Page does not exist');
        }
        $templateVariables = array(
            'content' => $pageEntity
        );
        $template = $this->getContentTemplate($pageEntity);
        return $this->render($template, $templateVariables);
    }

    public function searchAction(Request $request, $siteSlug)
    {
        $searchString = $request->query->get('query');
        if (!empty($searchString)) {
            $searchString = filter_var($searchString, FILTER_SANITIZE_STRING);
        }

        $pager = new Pagination($request, 5);
        $pager = $this->search()->searchIndex($searchString, $pager);
        $returnVar['pager'] = $pager;
        $returnVar['searchString'] = $searchString;
        $returnVar['pageTitle'] = 'Search Results';

        $template = $this->tp()->getCurrentSkin()->getSearchTemplate();
        return $this->render($template, $returnVar);
    }

}
