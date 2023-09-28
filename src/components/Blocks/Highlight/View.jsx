import React from 'react';
import cx from 'classnames';
import { TextBlockView } from '@plone/volto-slate/blocks/Text';
import { DetachedTextBlockEditor } from '@plone/volto-slate/blocks/Text/DetachedTextBlockEditor';
import TextLineEdit from '@plone/volto/components/manage/TextLineEdit/TextLineEdit';
import ImageWidget from '../../ImageWidget/ImageWidget';
import { flattenToAppURL, isInternalURL } from '@plone/volto/helpers';
import { Container as SemanticContainer, Button } from 'semantic-ui-react';
import config from '@plone/volto/registry';

const HighlightView = (props) => {
  const { block, className, data, isEditMode, onChangeBlock } = props;

  const buttonLink = data?.buttonLink?.[0] ? data?.buttonLink[0]['@id'] : '';

  let renderedImage = null;
  if (data.image) {
    let Image = config.getComponent('Image').component;
    if (Image) {
      // custom image component expects item summary as src
      renderedImage = (
        <Image
          item={data.image.image_scales ? data.image : null}
          src={!data.image.image_scales ? data.image['@id'] : null}
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
            isInternalURL(data.image['@id'])
              ? // Backwards compat in the case that the block is storing the full server URL
                `${flattenToAppURL(data.image['@id'])}/@@images/image`
              : data.image['@id']
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
      {data.image ? (
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
            <ImageWidget
              {...props}
              inline
              // Since we are using a component that has a widget interface
              // we need to adapt its props to it
              id="image"
              // This is called in case of the inline widget (eg. NOT the sidebar form)
              onChange={(id, value) => {
                onChangeBlock(block, {
                  ...data,
                  [id]: value,
                });
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default HighlightView;
