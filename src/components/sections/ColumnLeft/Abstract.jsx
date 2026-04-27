import React from 'react';
import Panel from '../../shared/Panel';

const Abstract = () => {
  return (
    <Panel abstract>
      <div className="label">
        Abstract <span className="num">// 01</span>
      </div>
      <p>
        <b>LViT-N</b> is a complete AI-powered radiology pipeline — from a custom-built hybrid segmentation model to a clinical explainability application. It renders predicted anatomical regions as masks, generates structured radiology reports with <b>findings</b> and <b>impressions</b>, and re-explains each sentence in plain non-technical language so patients — not just radiologists — can understand their own imaging.
      </p>
    </Panel>
  );
};

export default Abstract;
