import React from 'react';
import { useIntl } from 'react-intl';
import BlockDataForm from '@plone/volto/components/manage/Form/BlockDataForm';

import { HighlightSchema } from './schema';
import { useSelector } from 'react-redux';

const HighlightData = (props) => {
  const { block, blocksConfig, data, onChangeBlock } = props;
  const intl = useIntl();
  const schema = HighlightSchema({ ...props, intl });
  const dataAdapter = blocksConfig.highlight.dataAdapter;
  const request = useSelector((state) => state.content.subrequests[block]);
  const content = request?.data;

  return (
    <BlockDataForm
      schema={schema}
      title={schema.title}
      onChangeField={(id, value, item) => {
        dataAdapter({
          block,
          data,
          id,
          onChangeBlock,
          value,
          content,
          item,
        });
      }}
      formData={data}
      block={block}
      onChangeBlock={onChangeBlock}
      blocksConfig={blocksConfig}
    />
  );
};

export default HighlightData;
