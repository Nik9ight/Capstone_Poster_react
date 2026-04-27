import React from 'react';
import Panel from '../../shared/Panel';
import architectureImage from '../../../assets/images/27.svg';

const Architecture = () => {
  return (
    <>
      <Panel style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="section-title">
          <span className="num">05 /</span>
          <h2>Model &amp; System Architecture</h2>
          <span className="hint">LViT-N + SAM · RadVision UI</span>
        </div>
        <div className="fig" style={{ padding: 0, flex: 1, minHeight: 0, maxHeight: 'none', display: 'flex', overflow: 'hidden', alignItems: 'center', justifyContent: 'center', marginLeft: '0px' }}>
          <img src={architectureImage} alt="LViT-N model architecture (left) and RadVision web application flow (right)" style={{ width: '100%', marginLeft: '-3%', height: 'auto', maxHeight: '100%', objectFit: 'contain', display: 'block' }} />
        </div>
        <div className="fig-caption">
          <span className="tag">Fig. 01</span>
          <b>a.</b> ConvNext-small encoder · cross-attention fusion · SAM refinement &nbsp;·&nbsp; <b>b.</b> Browser-side orchestration · segmentation server · RunPod + MedGemma
        </div>
      </Panel>

      <Panel style={{ padding: 0, marginTop: '-10px', alignSelf: 'start' }}>
        <p style={{ margin: 0, padding: '8px 12px', fontSize: '13px' }}>
          A <b>ConvNext-small</b> backbone extracts multi-scale image features; MedGemma generated text annotations are embedded via <b>CXR-BERT</b>. The streams fuse through <b>multi-head cross-attention</b> (Q = image tokens, K/V = text tokens), then decode into an intermediate mask. This mask gets more refined by a foundational model, <b>SAM3.1</b>. The browser-side <b>RadVision UI</b> orchestrates the segmentation API and MedGemma report calls, rendering interactive overlays and structured reports and easier explaination.
        </p>
      </Panel>
    </>
  );
};

export default Architecture;
