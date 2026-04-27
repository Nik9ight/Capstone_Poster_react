import React from 'react';
import Panel from '../../shared/Panel';

const KeyFeatures = () => {
  return (
    <Panel>
      <div className="section-title">
        <span className="num">02 /</span>
        <h2>Key Features</h2>
        <span className="hint">Product</span>
      </div>
      <ul className="features">
        <li>
          <span className="idx">F1</span>
          <span className="txt">
            Annotation Efficiency via LViT-N’s language-conditioned segmentation
            <small>For text annotation no need to depend on human-experts. Our segmentation architecture is annotation efficient.</small>
          </span>
        </li>
        <li>
          <span className="idx">F2</span>
          <span className="txt">
            Multi-modal and Multi-modality medical image segmentation
            <small>Uses text guidance to segment more precisely across multiple modality Chest X-ray · Brain MRI · Breast Ultrasonogram · Lung CT</small>
          </span>
        </li>
        <li>
          <span className="idx">F3</span>
          <span className="txt">
            Automated radiology report generation via MedGemma
            <small>Generated structured medical report containing - Findings · Impressions · Recommendations</small>
          </span>
        </li>
        <li>
          <span className="idx">F4</span>
          <span className="txt">
            Interactive term simplification on hover / click
            <small>Explains every sentence on the report in easy and understandable language that patients can actually read</small>
          </span>
        </li>
      </ul>
    </Panel>
  );
};

export default KeyFeatures;
