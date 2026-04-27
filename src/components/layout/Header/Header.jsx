import React from 'react';
import logo from "../../../assets/images/north-south-university-seeklogo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="North South University" />
      </div>

      <div className="title-block">
        <div className="kicker">
          <span className="bar"></span> 
          Capstone Spring 2026 · Department of ECE · North South University
        </div>
        <h1 className="title">
          <span className="model">LViT-N</span> — Language-Guided Hybrid Segmentation with AI-Powered Clinical Report Generation
        </h1>
        <p className="subtitle">
          An end-to-end radiology pipeline: a custom hybrid vision–language segmentation model paired with an interactive clinical report generator that translates findings into plain language for patients.
        </p>
      </div>

      <div className="event-badge">
        <div className="pill">Capstone · Spring 26</div>
        <div><span className="dot">●</span> Project Code</div>
        <div className="mono-lg">LViT-N</div>
        <div>Medical AI · Segmentation</div>
        <div>Vision + Language</div>
      </div>
    </header>
  );
};

export default Header;
