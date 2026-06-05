import React from 'react';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';
import HighlightData from './Data';
import HighlightView from './View';
import type { BlockEditProps } from '@plone/types';

const HighlightEdit = (props: BlockEditProps) => {
  const { selected } = props;

  return (
    <>
      <HighlightView {...props} isEditMode />
      <SidebarPortal selected={selected}>
        <HighlightData {...props} />
      </SidebarPortal>
    </>
  );
};

export default HighlightEdit;
