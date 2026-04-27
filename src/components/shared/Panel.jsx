import React from 'react';

const Panel = ({ children, className = '', style = {}, dark = false, tint = false, abstract = false, metrics = false }) => {
  let panelClass = 'panel';
  if (dark) panelClass += ' dark';
  if (tint) panelClass += ' tint';
  if (abstract) panelClass = 'abstract-panel';
  if (metrics) panelClass += ' metrics-panel';
  
  if (className) panelClass += ` ${className}`;

  return (
    <div className={panelClass} style={style}>
      {children}
    </div>
  );
};

export default Panel;
