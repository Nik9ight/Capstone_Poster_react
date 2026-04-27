import React from 'react';
import Panel from '../../shared/Panel';
// import mosmedImage from '../../../assets/images/mosmed 2.png';
import ct1 from '../../../assets/images/1.png';
import ct2 from '../../../assets/images/2.png';
import ct3 from '../../../assets/images/7.png';
import ct4 from '../../../assets/images/4.png';
import ct5 from '../../../assets/images/5.png';
import ct6 from '../../../assets/images/6.png';
import xi1 from '../../../assets/images/8.png';
import xi2 from '../../../assets/images/9.png';
import xi3 from '../../../assets/images/10.png';
import xi4 from '../../../assets/images/11.png';
import xi5 from '../../../assets/images/12.png';
import xi6 from '../../../assets/images/13.png';
import bmri1 from '../../../assets/images/14.png';
import bmri2 from '../../../assets/images/15.png';
import bmri3 from '../../../assets/images/16.png';
import bmri4 from '../../../assets/images/17.png';
import bmri5 from '../../../assets/images/18.png';
import bmri6 from '../../../assets/images/19.png';
import bus1 from '../../../assets/images/20.png';
import bus2 from '../../../assets/images/21.png';
import bus3 from '../../../assets/images/22.png';
import bus4 from '../../../assets/images/23.png';
import bus5 from '../../../assets/images/24.png';
import bus6 from '../../../assets/images/25.png';

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
          <div className="row-label"><b>X-Ray</b>QaTa-Cov19</div>
          <div className="sample-cell"><img src={xi1} alt="Chest X-ray segmentation" /></div>
          <div className="sample-cell"><img src={xi2} alt="" /></div>
          <div className="sample-cell"><img src={xi3} alt="" /></div>
          <div className="sample-cell"><img src={xi4} alt="" /></div>
          <div className="sample-cell"><img src={xi5} alt="" /></div>
          <div className="sample-cell"><img src={xi6} alt="" /></div>
        </div>
        <div className="sample-row">
          <div className="row-label"><b>CT Scan</b>MosMed+</div>
          <div className="sample-cell"><img src={ct1} alt="Lung CT segmentation" /></div>
          <div className="sample-cell"><img src={ct2} alt="Lung CT segmentation" /></div>
          <div className="sample-cell"><img src={ct3} alt="Lung CT segmentation" /></div>
          <div className="sample-cell"><img src={ct4} alt="Lung CT segmentation" /></div>
          <div className="sample-cell"><img src={ct5} alt="Lung CT segmentation" /></div>
          <div className="sample-cell"><img src={ct6} alt="Lung CT segmentation" /></div>
        </div>
        <div className="sample-row">
          <div className="row-label"><b>MRI</b>BraTS2020</div>
          <div className="sample-cell"><img src={bmri1} alt="Brain MRI segmentation" /></div>
          <div className="sample-cell"><img src={bmri2} alt="" /></div>
          <div className="sample-cell"><img src={bmri3} alt="" /></div>
          <div className="sample-cell"><img src={bmri4} alt="" /></div>
          <div className="sample-cell"><img src={bmri5} alt="" /></div>
          <div className="sample-cell"><img src={bmri6} alt="" /></div>
        </div>
        <div className="sample-row">
          <div className="row-label"><b>Ultrasound</b>BUSI</div>
          <div className="sample-cell"><img src={bus1} alt="Chest X-ray segmentation" /></div>
          <div className="sample-cell"><img src={bus2} alt="" /></div>
          <div className="sample-cell"><img src={bus3} alt="" /></div>
          <div className="sample-cell"><img src={bus4} alt="" /></div>
          <div className="sample-cell"><img src={bus5} alt="" /></div>
          <div className="sample-cell"><img src={bus6} alt="" /></div>
        </div>
      </div>
    </Panel>
  );
};

export default SamplesGallery;
