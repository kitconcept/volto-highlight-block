import React from 'react';
import { useIntl } from 'react-intl';
import BlockDataForm from '@plone/volto/components/manage/Form/BlockDataForm';

import { useSelector } from 'react-redux';
import type { BlockEditProps } from '@plone/types';

const HighlightData = (props: BlockEditProps) => {
  const {
    block,
    blocksConfig,
    blocksErrors,
    data,
    onChangeBlock,
    navRoot,
    contentType,
  } = props;
  const intl = useIntl();
  const schema = blocksConfig[data['@type']].blockSchema({ data, intl });
  const dataAdapter = blocksConfig[data['@type']].dataAdapter;
  const request = useSelector((state: any) => state.content.subrequests[block]);
  const content = request?.data;

  return (
    <BlockDataForm
      schema={schema}
      title={schema.title}
      onChangeField={(id: string, value: any, item: any) => {
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
      onChangeBlock={onChangeBlock}
      formData={data}
      block={block}
      blocksConfig={blocksConfig}
      navRoot={navRoot}
      contentType={contentType}
      errors={blocksErrors}
    />
  );
};

export default HighlightData;
