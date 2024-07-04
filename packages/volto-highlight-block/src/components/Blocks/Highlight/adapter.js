import { flattenToAppURL } from '@plone/volto/helpers';

export const HighlightBlockDataAdapter = ({
  block,
  data,
  id,
  onChangeBlock,
  value,
  content,
  item,
}) => {
  let dataSaved = {
    ...data,
    [id]: value,
  };
  if (value === null) {
    dataSaved = {
      ...dataSaved,
      image_field: undefined,
      image_scales: undefined,
    };
  } else if (id === 'url' && typeof value === 'object') {
    dataSaved = {
      ...dataSaved,
      [id]: flattenToAppURL(value['@id']),
      image_field: 'image',
      image_scales: value.image_scales,
    };
  }
  // I uploaded the image right now, no image info
  else if (id === 'url' && typeof value === 'string' && content) {
    dataSaved = {
      ...dataSaved,
      image_field: 'image',
      image_scales: { image: [content?.image] },
    };
  } else if (id === 'url' && typeof value === 'string' && item) {
    dataSaved = {
      ...dataSaved,
      image_field: item.image_field,
      image_scales: item.image_scales,
    };
  }
  onChangeBlock(block, dataSaved);
};
