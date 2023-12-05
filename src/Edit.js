import React, { useEffect } from "react";
import Settings from "./Settings";
import "./style.scss";
import Style from "./Style";
import Path from './Path';
// import { Path } from '@wordpress/components';

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;

  useEffect(() => {
    clientId && setAttributes({ cId: clientId });
  }, [clientId, setAttributes]);

  return <>
    <Settings attributes={attributes} setAttributes={setAttributes} />
    <div id={`bBlocksPath-${clientId}`} className="bBlocksPath">
      <div className="b-text-path">
        <Style attributes={attributes} clientId={clientId} />
        <Path id="MyPath" attributes={attributes} />
      </div>
    </div>

  </>;
};

export default Edit;
