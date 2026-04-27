import React from 'react';
import Panel from '../../shared/Panel';
import interfaceImage from '../../../assets/images/webapp user interfance.jpg';

const Interface = () => {
  return (
    <Panel style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
      <div className="section-title">
        <span className="num">08 /</span>
        <h2>RadVision Interface</h2>
        <span className="hint">Clinician UI</span>
      </div>
      <div className="fig" style={{ padding: '4px', flex: 1, minHeight: '170px', maxHeight: 'none', overflow: 'hidden' }}>
        <img src={interfaceImage} alt="RadVision user interface with segmentation overlay and report panel" style={{ maxWidth: '100%', maxHeight: '100%', width: '100%', objectFit: 'contain', display: 'block' }} />
      </div>
      <div className="fig-caption">
        <span className="tag">Fig. 04</span>
        Overlay · MedGemma report · sentence-level "What this means" pane
      </div>
    </Panel>
  );
};

export default Interface;
