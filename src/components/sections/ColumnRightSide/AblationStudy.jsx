import React from 'react';
import Panel from '../../shared/Panel';

const AblationStudy = () => {
  return (
    <>
      <Panel style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="section-title">
          <span className="num">09 /</span>
          <h2>Ablation Study</h2>
          <span className="hint">Dice (%)</span>
        </div>
        <div className="ablation">
          <div className="abl-row best">
            <span className="abl-label">4 ViT + GCA <em>(Ours)</em></span>
            <div className="abl-track"><div className="abl-bar" style={{ width: '83.5%' }}></div></div>
            <span className="abl-val">85.85</span>
          </div>
          <div className="abl-row">
            <span className="abl-label">w/o Textual desc.</span>
            <div className="abl-track"><div className="abl-bar" style={{ width: '78.5%' }}></div></div>
            <span className="abl-val">85.21</span>
          </div>
          <div className="abl-row">
            <span className="abl-label">w/o Deep Supervision</span>
            <div className="abl-track"><div className="abl-bar" style={{ width: '78.0%' }}></div></div>
            <span className="abl-val">85.14</span>
          </div>
          <div className="abl-row">
            <span className="abl-label">1 ViT + CBAM</span>
            <div className="abl-track"><div className="abl-bar" style={{ width: '70.5%' }}></div></div>
            <span className="abl-val">84.17</span>
          </div>
          <div className="abl-row">
            <span className="abl-label">1 ViT + GCA</span>
            <div className="abl-track"><div className="abl-bar" style={{ width: '65.5%' }}></div></div>
            <span className="abl-val">83.52</span>
          </div>
          <div className="abl-row">
            <span className="abl-label">4 ViT + CBAM</span>
            <div className="abl-track"><div className="abl-bar" style={{ width: '23.8%' }}></div></div>
            <span className="abl-val">78.09</span>
          </div>
        </div>
        <div className="abl-axis"><span>75</span><span>88</span></div>
      </Panel>

      <Panel style={{ padding: 0, marginTop: '-10px' }}>
        <p style={{ margin: 0, padding: '8px 12px', fontSize: '13px' }}>
          This study analyzes component contributions to final performance. Extending the framework with <b>Guided Cross-Attention (GCA)</b> and <b>4 ViT blocks</b> establishes our peak score (<b>85.85%</b>). Removing textual descriptions or reverting to older channel attention mechanisms (CBAM) markedly deteriorates feature synthesis and spatial awareness.
        </p>
      </Panel>
    </>
  );
};

export default AblationStudy;
