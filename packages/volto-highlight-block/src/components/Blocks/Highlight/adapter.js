import { flattenToAppURL } from '@plone/volto/helpers';

export const HighlightBlockDataAdapter = ({
  block,
  data,
  id,
  onChangeBlock,
  value,
  content,
}) => {
  let dataSaved = {
    ...data,
    [id]: value,
  };
  if (id === 'url' && typeof value === 'object') {
    dataSaved = {
      ...dataSaved,
      [id]: flattenToAppURL(value['@id']),
      image_field: 'image',
      image_scales: value.image_scales,
    };
  }
  // I uploaded the image right now, no image info
  if (id === 'url' && typeof value === 'string') {
    dataSaved = {
      ...dataSaved,
      image_field: 'image',
      image_scales: { image: [content?.image] },
    };
  }
  onChangeBlock(block, dataSaved);
};
