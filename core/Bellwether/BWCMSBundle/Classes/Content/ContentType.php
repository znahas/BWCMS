<?php

namespace Bellwether\BWCMSBundle\Classes\Content;

use Bellwether\BWCMSBundle\Classes\Base\ContentTypeInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Bellwether\BWCMSBundle\Classes\Constants\ContentSortByType;
use Bellwether\BWCMSBundle\Classes\Constants\ContentSortOrderType;
use Bellwether\BWCMSBundle\Classes\Constants\ContentPublishType;
use Symfony\Component\Form\Form;
use Symfony\Component\Form\FormError;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\FormBuilder;

use Bellwether\BWCMSBundle\Classes\Service\SiteService;
use Bellwether\BWCMSBundle\Classes\Service\ContentService;
use Bellwether\BWCMSBundle\Classes\Service\MediaService;
use Bellwether\BWCMSBundle\Classes\Service\MailService;
use Bellwether\BWCMSBundle\Classes\Service\PreferenceService;
use Bellwether\BWCMSBundle\Classes\Service\TemplateService;

use Bellwether\BWCMSBundle\Classes\Content\Form\ContentEmptyForm;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Bellwether\BWCMSBundle\Classes\Constants\ContentFieldType;
use Bellwether\BWCMSBundle\Entity\ContentEntity;
use Symfony\Component\Routing\RouteCollection;

abstract class ContentType implements ContentTypeInterface
{


    /**
     * @var FormBuilder
     */
    private $formBuilder = null;

    /**
     * @var Form
     */
    private $form = null;

    /**
     * @var ContainerInterface
     *
     * @api
     */
    protected $container;

    /**
     * @var RequestStack
     *
     * @api
     */
    protected $requestStack;

    private $parentId = '';

    private $fields = null;

    private $templates = null;

    private $path = null;

    /**
     * @var bool
     */
    private $isHierarchy = false;

    /**
     * @var bool
     */
    private $isRootItem = false;

    /**
     * @var bool
     */
    private $isSummaryEnabled = true;

    /**
     * @var bool
     */
    private $isContentEnabled = true;

    /**
     * @var bool
     */
    private $isSlugEnabled = false;

    /**
     * @var bool
     */
    private $isSortEnabled = false;

    /**
     * @var bool
     */
    private $isUploadEnabled = false;

    public function getType()
    {
        return "Content";
    }

    public function getSchema()
    {
        return "Page";
    }

    public function getName()
    {
        return "Page";
    }

    public function setParent($contentId = null)
    {
        $this->parentId = $contentId;
    }

    final public function addField($fieldName, $type)
    {
        $this->fields[$fieldName] = array(
            'name' => $fieldName,
            'type' => $type
        );
    }

    abstract protected function buildFields();

    abstract protected function buildForm();

    /**
     * @return string
     */
    abstract public function getImage();

    public function addTemplate($templateName, $templateFile, $templateImage)
    {
        $templateImagePath = str_replace('.', DIRECTORY_SEPARATOR, $this->getType() . '.' . $this->getSchema());
        $templateImagePath = $this->tp()->getCurrentSkin()->getPath() . DIRECTORY_SEPARATOR . $templateImagePath . DIRECTORY_SEPARATOR . $templateImage;
        $templateImagePath = $this->getThumbService()->open($templateImagePath)->resize(240, 200)->cacheFile('guess');
        $this->templates[] = array(
            'title' => $templateName,
            'template' => $templateFile,
            'image' => $templateImagePath
        );
    }

    public function getPath()
    {
        if (null === $this->path) {
            $reflected = new \ReflectionObject($this);
            $this->path = dirname($reflected->getFileName());
        }
        return $this->path;
    }

    abstract public function addTemplates();

    /**
     * @return array
     */
    public function getTemplates()
    {
        if (is_null($this->templates)) {
            $this->templates = array();
            $this->addTemplates();
        }
        return $this->templates;
    }

    /**
     * @return null|RouteCollection
     */
    abstract public function getRouteCollection();

    /**
     * @param ContentEntity $contentEntity
     * @return string|null
     */
    abstract public function getPublicURL($contentEntity, $full = false);

    /**
     * @return Form
     */
    final public function getForm()
    {
        if ($this->form == null) {
            $this->setDefaultFormFields();
            $this->buildForm();
            $this->setDefaultHiddenFormFields();
            $this->fb()->setAction($this->generateUrl('content_save'));
            $this->fb()->setMethod('POST');
            $this->form = $this->fb()->getForm();
        }
        return $this->form;
    }

    final public function getFields()
    {
        if ($this->fields == null) {
            $this->fields = array();

            $this->addField('id', ContentFieldType::Internal);
            $this->addField('type', ContentFieldType::Internal);
            $this->addField('schema', ContentFieldType::Internal);
            $this->addField('template', ContentFieldType::Internal);
            $this->addField('parent', ContentFieldType::Internal);

            $this->addField('title', ContentFieldType::Internal);
            if ($this->isSummaryEnabled) {
                $this->addField('summary', ContentFieldType::Internal);
            }
            if ($this->isContentEnabled) {
                $this->addField('content', ContentFieldType::Internal);
            }
            if ($this->isSlugEnabled) {
                $this->addField('slug', ContentFieldType::Internal);
            }
            if ($this->isUploadEnabled) {
                $this->addField('attachment', ContentFieldType::Internal);
            }
            if ($this->isSortEnabled) {
                $this->addField('sortBy', ContentFieldType::Internal);
                $this->addField('sortOrder', ContentFieldType::Internal);
            }

            $this->addField('status', ContentFieldType::Internal);
            $this->buildFields();
        }
        return $this->fields;
    }

    /**
     * @return FormBuilder
     */
    final public function fb()
    {
        if ($this->formBuilder == null) {
            $contentEmptyForm = new ContentEmptyForm();
            $this->formBuilder = $this->container->get('form.factory')->createBuilder($contentEmptyForm);
            $this->formBuilder->addEventListener(FormEvents::POST_SUBMIT, array(&$this, 'formEventPostSubmit'));
        }
        return $this->formBuilder;
    }

    final public function formEventPostSubmit(FormEvent $event)
    {
        $form = $event->getForm();
        $data = $event->getData();

        if (empty($data['title'])) {
            $form->get('title')->addError(new FormError('Title cannot be empty!'));
        }

        if ($this->isUploadEnabled) {
            if (!($data['attachment'] instanceof UploadedFile) && empty($data['id'])) {
                $form->get('attachment')->addError(new FormError('Attachment cannot be empty'));
            }
            if ($data['attachment'] instanceof UploadedFile) {
                if (!($data['attachment']->isValid())) {
                    $form->get('attachment')->addError(new FormError($data['attachment']->getErrorMessage()));
                }
            }
        }
        if ($this->isSlugEnabled) {
            if (empty($data['slug'])) {
                $form->get('slug')->addError(new FormError('Slug cannot be empty!'));
            } else {
                if ($this->cm()->checkSlugExists($data['slug'], $this->getType(), $data['parent'], $data['id'])) {
                    $form->get('slug')->addError(new FormError('Slug already exists!'));
                }
            }
        }
        $this->validateForm($event);
    }

    abstract function validateForm(FormEvent $event);

    abstract public function loadFormData(ContentEntity $content = null, Form $form = null);

    abstract public function prepareEntity(ContentEntity $content = null, Form $form = null);

    public function loadCustomField($fieldName, $fieldValue)
    {
        return $fieldValue;
    }


    private function setDefaultFormFields()
    {
        $this->fb()->add('title', 'text',
            array(
                'required' => true,
                'label' => 'Title'
            )
        );

        if ($this->isSummaryEnabled) {
            $this->fb()->add('summary', 'textarea',
                array(
                    'required' => false,
                    'label' => 'Summary'
                )
            );
        }

        if ($this->isContentEnabled) {
            $this->fb()->add('content', 'textarea',
                array(
                    'required' => false,
                    'label' => 'Content',
                    'attr' => array(
                        'class' => 'editor'
                    )
                )
            );
        }

        if ($this->isSlugEnabled) {
            $this->fb()->add('slug', 'text',
                array(
                    'required' => true,
                    'label' => 'Page Slug'
                )
            );
        }

        if ($this->isUploadEnabled) {
            $this->fb()->add('attachment', 'file',
                array(
                    'label' => 'Attachment'
                )
            );
        }

        if ($this->isSortEnabled) {
            $this->fb()->add('sortBy', 'choice', array(
                'choices' => array(
                    ContentSortByType::SortIndex => 'Sort',
                    ContentSortByType::Created => 'Created',
                    ContentSortByType::Published => 'Published',
                    ContentSortByType::Title => 'Title',
                    ContentSortByType::Size => 'Size',
                ),
                'label' => 'Sort By'
            ));
            $this->fb()->add('sortOrder', 'choice', array(
                'choices' => array(
                    ContentSortOrderType::DESC => 'DESC [Z-A]',
                    ContentSortOrderType::ASC => 'ASC [A-Z]',
                ),
                'label' => 'Sort Order'
            ));
        }
    }

    private function setDefaultHiddenFormFields()
    {

        $templates = $this->getTemplates();
        if (count($templates) == 1) {
            $this->fb()->add('template', 'hidden', array(
                'data' => $templates[0]['template'],
            ));
        }else{
            $this->fb()->add('template', 'bwcms_content_template',
                array(
                    'label' => 'Template',
                    'choices' => $templates
                )
            );
        }

        $this->fb()->add('status', 'choice',
            array(
                'label' => 'Status',
                'choices' => array(
                    ContentPublishType::Draft => 'Draft',
                    ContentPublishType::Published => 'Published',
                    ContentPublishType::Expired => 'Expired'
                )
            )
        );

        $this->fb()->add('id', 'hidden');

        $this->fb()->add('parent', 'hidden', array(
            'data' => $this->parentId,
        ));

        $this->fb()->add('type', 'hidden', array(
            'data' => $this->getType(),
        ));

        $this->fb()->add('schema', 'hidden', array(
            'data' => $this->getSchema(),
        ));
        $this->fb()->add('save', 'submit', array(
            'attr' => array('class' => 'save'),
        ));
    }

    /**
     * Generates a URL from the given parameters.
     *
     * @param string $route The name of the route
     * @param mixed $parameters An array of parameters
     * @param bool|string $referenceType The type of reference (one of the constants in UrlGeneratorInterface)
     *
     * @return string The generated URL
     *
     * @see UrlGeneratorInterface
     */
    public function generateUrl($route, $parameters = array(), $referenceType = UrlGeneratorInterface::ABSOLUTE_PATH)
    {
        return $this->container->get('router')->generate($route, $parameters, $referenceType);
    }

    /**
     * @return SiteService
     */
    public function sm()
    {
        return $this->container->get('BWCMS.Site')->getManager();
    }

    /**
     * @return ContentService
     */
    public function cm()
    {
        return $this->container->get('BWCMS.Content')->getManager();
    }

    /**
     * @return MediaService
     */
    public function mm()
    {
        return $this->container->get('BWCMS.Media')->getManager();
    }

    /**
     * @return PreferenceService
     */
    public function pref()
    {
        return $this->container->get('BWCMS.Preference')->getManager();
    }

    /**
     * @return TemplateService
     */
    public function tp()
    {
        return $this->container->get('BWCMS.Template')->getManager();
    }

    /**
     * @return MailService
     */
    public function mailer()
    {
        return $this->container->get('BWCMS.Mailer');
    }

    /**
     * @return ContainerInterface
     */
    public function getContainer()
    {
        return $this->container;
    }

    /**
     * @return Image
     */
    public function getThumbService()
    {
        return $this->container->get('image.handling');
    }

    /**
     * @param ContainerInterface $container
     */
    public function setContainer($container)
    {
        $this->container = $container;
    }

    /**
     * @return RequestStack
     */
    public function getRequestStack()
    {
        return $this->requestStack;
    }

    /**
     * @param RequestStack $requestStack
     */
    public function setRequestStack($requestStack)
    {
        $this->requestStack = $requestStack;
    }

    /**
     * @return boolean
     */
    public function isHierarchy()
    {
        return $this->isHierarchy;
    }

    /**
     * @param boolean $isHierarchy
     */
    public function setIsHierarchy($isHierarchy)
    {
        $this->isHierarchy = $isHierarchy;
    }

    /**
     * @return boolean
     */
    public function isRootItem()
    {
        return $this->isRootItem;
    }

    /**
     * @param boolean $isRootItem
     */
    public function setIsRootItem($isRootItem)
    {
        $this->isRootItem = $isRootItem;
    }

    public function isType($type = 'Content')
    {
        $contentType = strtoupper($this->getType());
        if (strpos($contentType, strtoupper($type) . '.') !== false) {
            return true;
        }
        return false;
    }

    /**
     * @return boolean
     */
    public function isSummaryEnabled()
    {
        return $this->isSummaryEnabled;
    }

    /**
     * @param boolean $isSummaryEnabled
     */
    public function setIsSummaryEnabled($isSummaryEnabled)
    {
        $this->isSummaryEnabled = $isSummaryEnabled;
    }

    /**
     * @return boolean
     */
    public function isContentEnabled()
    {
        return $this->isContentEnabled;
    }

    /**
     * @param boolean $isContentEnabled
     */
    public function setIsContentEnabled($isContentEnabled)
    {
        $this->isContentEnabled = $isContentEnabled;
    }

    /**
     * @return boolean
     */
    public function isUploadEnabled()
    {
        return $this->isUploadEnabled;
    }

    /**
     * @param boolean $isUploadEnabled
     */
    public function setIsUploadEnabled($isUploadEnabled)
    {
        $this->isUploadEnabled = $isUploadEnabled;
    }

    /**
     * @return boolean
     */
    public function isSlugEnabled()
    {
        return $this->isSlugEnabled;
    }

    /**
     * @param boolean $isSlugEnabled
     */
    public function setIsSlugEnabled($isSlugEnabled)
    {
        $this->isSlugEnabled = $isSlugEnabled;
    }

    /**
     * @return boolean
     */
    public function isSortEnabled()
    {
        return $this->isSortEnabled;
    }

    /**
     * @param boolean $isSortEnabled
     */
    public function setIsSortEnabled($isSortEnabled)
    {
        $this->isSortEnabled = $isSortEnabled;
    }

    public function dump($var, $maxDepth = 2, $stripTags = true)
    {
        print '<pre>';
        \Doctrine\Common\Util\Debug::dump($var, $maxDepth, $stripTags);
        print '</pre>';
    }

}
