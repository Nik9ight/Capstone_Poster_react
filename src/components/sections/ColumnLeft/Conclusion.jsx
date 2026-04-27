import React from 'react';
import Panel from '../../shared/Panel';

const Conclusion = () => {
  return (
    <Panel dark>
      <div className="section-title" style={{ paddingBottom: '5px' }}>
        <span className="num">04 /</span>
        <h2>Conclusion</h2>
        <span className="hint">Impact</span>
      </div>
      <p style={{ fontSize: '13px' }}>
        This project bridges the gap between radiology imaging and everyday understanding. For regions with limited access to specialist doctors, an AI-assisted tool like this enables <b>faster, more informed diagnoses</b> and empowers patients to better understand their own health outcomes. We deliver a custom-trained model across <b>three imaging modalities</b>, a deployable web app, complete ablation studies, and SOTA-matching benchmarks.
      </p>
    </Panel>
  );
};

export default Conclusion;
