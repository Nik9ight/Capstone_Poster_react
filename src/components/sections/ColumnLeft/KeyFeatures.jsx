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
            Multi-class medical image segmentation
            <small>Chest X-ray · Brain MRI · Lung CT — single unified model</small>
          </span>
        </li>
        <li>
          <span className="idx">F2</span>
          <span className="txt">
            Automated radiology report generation via MedGemma
            <small>Structured Findings · Impressions · Recommendations returned as JSON</small>
          </span>
        </li>
        <li>
          <span className="idx">F3</span>
          <span className="txt">
            Interactive term simplification on hover / click
            <small>Every sentence re-explained in plain language patients can actually read</small>
          </span>
        </li>
        <li>
          <span className="idx">F4</span>
          <span className="txt">
            LLM-generated text annotation
            <small>Captions drive cross-attention — segmentation is language-guided, not just visual</small>
          </span>
        </li>
      </ul>
    </Panel>
  );
};

export default KeyFeatures;
