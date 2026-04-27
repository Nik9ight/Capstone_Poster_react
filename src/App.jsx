import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header/Header';
import AuthorsStrip from './components/layout/Authors/AuthorsStrip';
import Footer from './components/layout/Footer/Footer';

import Abstract from './components/sections/ColumnLeft/Abstract';
import KeyFeatures from './components/sections/ColumnLeft/KeyFeatures';
import SamplesGallery from './components/sections/ColumnLeft/SamplesGallery';
import Conclusion from './components/sections/ColumnLeft/Conclusion';

import Architecture from './components/sections/ColumnRightTop/Architecture';
import Qualitative from './components/sections/ColumnRightSide/Qualitative';
import Interface from './components/sections/ColumnRightSide/Interface';
import AblationStudy from './components/sections/ColumnRightSide/AblationStudy';
import Evaluation from './components/sections/ColumnRightBottom/Evaluation';

function App() {
  const [scale, setScale] = useState(1);

  // Optional: Auto-scale to fit the viewport vertically or horizontally so it previews nicely on laptops
  useEffect(() => {
    function handleResize() {
      const POSTER_WIDTH = 1686 + 80; // 1686 + some 40px padding on each side
      const windowWidth = window.innerWidth;
      if (windowWidth < POSTER_WIDTH) {
        setScale(windowWidth / POSTER_WIDTH);
      } else {
        setScale(1);
      }
    }
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="print-wrapper" style={{ transform: `scale(${scale})`, transformOrigin: 'top center', transition: 'transform 0.2s ease-out' }}>
      <div className="poster">
        <div className="shell">
          <Header />
          <AuthorsStrip />

          {/* ============ 3 COLUMNS ============ */}
          <div className="cols">
          
          {/* ========== COLUMN 1 ========== */}
          <div className="col">
            <Abstract />
            <KeyFeatures />
            <SamplesGallery />
            <Conclusion />
          </div>

          {/* ========== RIGHT AREA (cols 2+3 fused) ========== */}
          <div className="right-area">
            
            <Architecture />

            {/* The right column for Sections 7, 8, 9 */}
            <div className="col" style={{ gridColumn: 2, gridRow: '1 / span 4' }}>
              <Qualitative />
              <Interface />
              <AblationStudy />
            </div>

            <Evaluation />

          </div>
        </div>

        <Footer />

      </div>
      </div>
    </div>
  );
}

export default App;
