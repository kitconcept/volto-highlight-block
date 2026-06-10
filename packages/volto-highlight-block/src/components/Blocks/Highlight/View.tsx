import React from 'react';
import cx from 'classnames';
import { defineMessages, useIntl } from 'react-intl';
import { TextBlockView } from '@plone/volto-slate/blocks/Text';
import { DetachedTextBlockEditor } from '@plone/volto-slate/blocks/Text/DetachedTextBlockEditor';
import TextLineEdit from '@plone/volto/components/manage/TextLineEdit/TextLineEdit';
import { flattenToAppURL, isInternalURL } from '@plone/volto/helpers/Url/Url';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import { useSelector } from 'react-redux';
import config from '@plone/volto/registry';
import { ImageInput } from '@plone/volto/components/manage/Widgets/ImageWidget';
import type { BlockEditProps } from '@plone/types';
import type { HighlightBlockDataAdapterArgs } from './adapter';

const messages = defineMessages({
  buttonTextPlaceholder: {
    id: 'Button Text',
    defaultMessage: 'Button Text',
  },
});

// Slate toolbar buttons to hide in the Highlight description.
const UNWANTED_SLATE_BUTTONS = [
  'numbered-list',
  'bulleted-list',
  'blockquote',
  'heading-two',
  'heading-three',
  'separator',
  'styleMenu',
];

type HighlightViewProps = BlockEditProps & { isEditMode?: boolean };

const HighlightView = (props: HighlightViewProps) => {
  const {
    block,
    blocksConfig,
    className,
    data,
    isEditMode,
    onChangeBlock,
    style,
  } = props;

  const intl = useIntl();

  const slateSettings = React.useMemo(() => {
    const slate = config.settings.slate as any;
    return {
      ...slate,
      toolbarButtons: slate.toolbarButtons.filter(
        (name: string) => !UNWANTED_SLATE_BUTTONS.includes(name),
      ),
    };
  }, []);

  const dataAdapter = blocksConfig.highlight.dataAdapter as (
    args: HighlightBlockDataAdapterArgs,
  ) => void;

  const request = useSelector((state: any) => state.content.subrequests[block]);
  const content = request?.data;

  let renderedImage = null;
  if (data.url) {
    let Image = config.getComponent('Image').component;
    if (Image) {
      // custom image component expects item summary as src
      renderedImage = (
        <Image
          item={
            data.image_scales
              ? {
                  '@id': data.url,
                  image_field: data.image_field,
                  image_scales: data.image_scales,
                }
              : null
          }
          src={!data.image_scales ? data.url : null}
          alt=""
          loading="lazy"
          responsive={true}
        />
      );
    } else {
      // default img expects string src
      renderedImage = (
        <Image
          src={
            isInternalURL((data.url as any)['@id'])
              ? // Backwards compat in the case that the block is storing the full server URL
                `${flattenToAppURL((data.url as any)['@id'])}/@@images/image`
              : (data.url as any)['@id']
          }
          alt=""
          loading="lazy"
        />
      );
    }
  }

  return (
    <div className={cx('block highlight', className)} style={style}>
      {data.url ? (
        <div className="teaser-item top block-inner-container">
          <div className="highlight-image-wrapper">{renderedImage}</div>
          <div className="highlight-description">
            <div className="teaser-description-title">
              <div className="headtitle">
                {isEditMode ? (
                  <TextLineEdit
                    {...props}
                    renderTag="div"
                    renderClassName=""
                    fieldDataName="headtitle"
                    properties={{ headtitle: data.headtitle }}
                  />
                ) : (
                  <>{data?.headtitle && <div>{data?.headtitle}</div>}</>
                )}
              </div>
              <div className="title">
                {isEditMode ? (
                  <TextLineEdit
                    {...props}
                    renderTag="h2"
                    renderClassName=""
                    fieldDataName="title"
                    properties={{ title: data.title }}
                  />
                ) : (
                  <>{data?.title && <h2>{data?.title}</h2>}</>
                )}
              </div>
              <div className="description">
                {isEditMode ? (
                  <DetachedTextBlockEditor
                    {...props}
                    slateSettings={slateSettings}
                  />
                ) : (
                  <TextBlockView {...props} />
                )}
              </div>
              {data?.button &&
                (isEditMode ? (
                  <div className="button">
                    {data?.buttonText ||
                      intl.formatMessage(messages.buttonTextPlaceholder)}
                  </div>
                ) : (
                  data?.buttonText && (
                    <UniversalLink
                      className="button"
                      item={data?.buttonLink?.[0]}
                    >
                      {data?.buttonText}
                    </UniversalLink>
                  )
                ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          {props.isEditMode && (
            <>
              <ImageInput
                onChange={(id: string, value: any, item: any) => {
                  dataAdapter({
                    block,
                    data,
                    id: 'url',
                    onChangeBlock,
                    value,
                    content,
                    item,
                  });
                }}
                placeholderLinkInput={data.placeholder}
                block={block}
                id={block}
                objectBrowserPickerType={'image'}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default HighlightView;
