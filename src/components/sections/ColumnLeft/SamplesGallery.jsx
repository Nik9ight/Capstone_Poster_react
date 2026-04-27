import React from 'react';
import Panel from '../../shared/Panel';
import mosmedImage from '../../../assets/images/mosmed 2.png';
import xrayImage from '../../../assets/images/chest x-ray.jpg';
import mriImage from '../../../assets/images/brain mri.jpg';

const SamplesGallery = () => {
  return (
    <Panel>
      <div className="section-title">
        <span className="num">03 /</span>
        <h2>Segmentation Samples</h2>
        <span className="hint">3 modalities</span>
      </div>
      <div className="samples">
        <div className="sample-row">
          <div className="row-label" style={{ padding: '1px 4px 2px' }}><b>CT</b>MosMed</div>
          <div className="sample-cell"><img src={mosmedImage} alt="Lung CT segmentation" /></div>
          <div className="sample-cell"><img src={mosmedImage} alt="" /></div>
          <div className="sample-cell"><img src={mosmedImage} alt="" /></div>
          <div className="sample-cell"><img src={mosmedImage} alt="" /></div>
          <div className="sample-cell"><img src={mosmedImage} alt="" /></div>
          <div className="sample-cell"><img src={mosmedImage} alt="" /></div>
        </div>
        <div className="sample-row">
          <div className="row-label" style={{ padding: '1px 4px 2px' }}><b>X-Ray</b>CXR</div>
          <div className="sample-cell"><img src={xrayImage} alt="Chest X-ray segmentation" /></div>
          <div className="sample-cell"><img src={xrayImage} alt="" /></div>
          <div className="sample-cell"><img src={xrayImage} alt="" /></div>
          <div className="sample-cell"><img src={xrayImage} alt="" /></div>
          <div className="sample-cell"><img src={xrayImage} alt="" /></div>
          <div className="sample-cell"><img src={xrayImage} alt="" /></div>
        </div>
        <div className="sample-row">
          <div className="row-label"><b>MRI</b>Brain</div>
          <div className="sample-cell"><img src={mriImage} alt="Brain MRI segmentation" /></div>
          <div className="sample-cell"><img src={mriImage} alt="" /></div>
          <div className="sample-cell"><img src={mriImage} alt="" /></div>
          <div className="sample-cell"><img src={mriImage} alt="" /></div>
          <div className="sample-cell"><img src={mriImage} alt="" /></div>
          <div className="sample-cell"><img src={mriImage} alt="" /></div>
        </div>
      </div>
    </Panel>
  );
};

export default SamplesGallery;
