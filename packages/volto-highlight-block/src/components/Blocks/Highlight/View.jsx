import React from 'react';
import cx from 'classnames';
import { TextBlockView } from '@plone/volto-slate/blocks/Text';
import { DetachedTextBlockEditor } from '@plone/volto-slate/blocks/Text/DetachedTextBlockEditor';
import TextLineEdit from '@plone/volto/components/manage/TextLineEdit/TextLineEdit';
import { flattenToAppURL, isInternalURL } from '@plone/volto/helpers';
import { Container as SemanticContainer, Button } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import config from '@plone/volto/registry';
import { ImageInput } from '@plone/volto/components/manage/Widgets/ImageWidget';

const HighlightView = (props) => {
  const { block, blocksConfig, className, data, isEditMode, onChangeBlock } =
    props;

  const dataAdapter = blocksConfig.highlight.dataAdapter;

  const request = useSelector((state) => state.content.subrequests[block]);
  const content = request?.data;
  const buttonLink = data?.buttonLink?.[0] ? data?.buttonLink[0]['@id'] : '';

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
        <img
          src={
            isInternalURL(data.url['@id'])
              ? // Backwards compat in the case that the block is storing the full server URL
                `${flattenToAppURL(data.url['@id'])}/@@images/image`
              : data.url['@id']
          }
          alt=""
          loading="lazy"
        />
      );
    }
  }

  const customContainer = config.getComponent({ name: 'Container' }).component;

  const Container = customContainer || SemanticContainer;

  return (
    <div className={cx('block highlight', className)}>
      {data.url ? (
        <div className="teaser-item top">
          <div className="highlight-image-wrapper">{renderedImage}</div>
          <div className={cx('highlight-description')}>
            <Container
              className={cx('teaser-description-title', {
                padded: !customContainer,
              })}
            >
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
                  <DetachedTextBlockEditor {...props} />
                ) : (
                  <TextBlockView {...props} />
                )}
              </div>
              <div className="button">
                {data?.button && (
                  <Button inverted basic as="a" href={buttonLink}>
                    {data?.buttonText}
                  </Button>
                )}
              </div>
            </Container>
          </div>
        </div>
      ) : (
        <div>
          {props.isEditMode && (
            <>
              <ImageInput
                onChange={(id, value, item) => {
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
                block={props.block}
                id={props.block}
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
