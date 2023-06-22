import React from 'react';
import cx from 'classnames';
import { TextBlockView } from '@plone/volto-slate/blocks/Text';
import { DetachedTextBlockEditor } from '@plone/volto-slate/blocks/Text/DetachedTextBlockEditor';
import TextLineEdit from '@plone/volto/components/manage/TextLineEdit/TextLineEdit';
import ImageWidget from '@kitconcept/volto-image-block/components/ImageWidget/ImageWidget';

import { Container, Button } from 'semantic-ui-react';
import config from '@plone/volto/registry';

const HighlightView = (props) => {
  const { block, className, data, isEditMode, onChangeBlock } = props;

  const buttonLink = data?.buttonLink?.[0] ? data?.buttonLink[0]['@id'] : '';

  let fullWidth = true;
  let viewPortWidth = false;
  if (data.width === 'default') {
    fullWidth = true;
  }
  if (data.width === 'narrow') {
    fullWidth = false;
  }
  if (data.width === '100%') {
    fullWidth = false;
    viewPortWidth = true;
  }

  // migrate description implicitly to richtext in edit mode
  if (isEditMode && data.description && !data.description.data) {
    props.onChangeBlock(props.block, {
      ...data,
      description: {
        data: `<p>${data.description}</p>`,
        'content-type': 'text/html',
      },
    });
  }
  const Img = config.getComponent('Image').component;

  return (
    <div
      className={cx('block highlight', className, {
        'ui container': viewPortWidth,
      })}
    >
      {data.url ? (
        <div className="teaser-item top">
          <div className="highlight-image-wrapper">
            <Img
              style={{ height: data.height }}
              className={cx({
                'full-viewport-width': viewPortWidth,
              })}
              src={data.url}
              defaultScale={viewPortWidth ? 'huge' : 'great'}
              scales={data.image_scales?.image?.[0]?.scales}
              blurhash={data.image_scales?.image?.[0]?.blurhash}
              blurhashOptions={{ style: { width: '100%', height: 'auto' } }}
              /* Width and height hints MUST match aspect-ratio 1.77777778 defined in CSS */
              width="1440"
              height="810"
              alt=""
            />
          </div>
          <div className={cx('highlight-description')}>
            <Container
              className={cx('teaser-description-title', {
                'default-size': !fullWidth,
              })}
            >
              <div className="title">{isEditMode ? <TextLineEdit {...props} renderTag="h2" renderClassName="" fieldDataName="title" properties={{ title: data.title }} /> : <>{data?.title && <h2>{data?.title}</h2>}</>}</div>
              <div className="description">{isEditMode ? <DetachedTextBlockEditor {...props} /> : <TextBlockView {...props} />}</div>
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
              id="url"
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
