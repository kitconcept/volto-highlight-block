import React from 'react';
import { useIntl } from 'react-intl';
import { BlockDataForm } from '@plone/volto/components';

import { HighlightSchema } from './schema';

const HighlightData = (props) => {
  const { block, data, onChangeBlock } = props;
  const intl = useIntl();
  const schema = HighlightSchema({ ...props, intl });

  return (
    <BlockDataForm
      schema={schema}
      title={schema.title}
      onChangeField={(id, value) => {
        onChangeBlock(block, {
          ...data,
          [id]: value,
        });
      }}
      formData={data}
      block={block}
    />
  );
};

export default HighlightData;
