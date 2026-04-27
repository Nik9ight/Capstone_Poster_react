import React from 'react';
import Panel from '../../shared/Panel';
import qualitativeImage from '../../../assets/images/output comparison against other models.png';

const Qualitative = () => {
  return (
    <Panel style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
      <div className="section-title">
        <span className="num">07 /</span>
        <h2>Qualitative Comparison</h2>
        <span className="hint">Baselines</span>
      </div>
      <div className="fig" style={{ flex: 1, minHeight: '170px', maxHeight: 'none', overflow: 'hidden' }}>
        <img src={qualitativeImage} alt="Visual segmentation comparison vs baselines" style={{ maxWidth: '100%', maxHeight: '100%', width: '5000px', objectFit: 'contain', display: 'block' }} />
      </div>
      <div className="fig-caption">
        <span className="tag">Fig. 03</span>
        Red boxes = errors by baselines · LViT-N matches GT cleanly
      </div>
    </Panel>
  );
};

export default Qualitative;
