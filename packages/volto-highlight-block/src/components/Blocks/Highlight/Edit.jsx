import React, { useState } from 'react';
import { SidebarPortal } from '@plone/volto/components';
import HighlightData from './Data';
import HighlightView from './View';

const HighlightEdit = (props) => {
  const { selected } = props;

  const [url, setUrl] = useState('');
  const resetSubmitUrl = () => {
    setUrl('');
  };

  /**
   * Change url handler
   * @method onChangeUrl
   * @param {Object} target Target object
   * @returns {undefined}
   */
  const onChangeUrl = ({ target }) => {
    setUrl(target.value);
  };

  return (
    <>
      <HighlightView
        {...props}
        url={url}
        onChangeUrl={onChangeUrl}
        resetSubmitUrl={resetSubmitUrl}
        isEditMode
      />
      <SidebarPortal selected={selected}>
        <HighlightData {...props} />
      </SidebarPortal>
    </>
  );
};

export default HighlightEdit;
