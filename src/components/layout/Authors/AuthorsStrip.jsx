import React from 'react';

const AuthorsStrip = () => {
  return (
    <div className="authors" style={{ marginTop: '-6px' }}>
      <div className="author">
        <div className="name">Md. Mukzanul Alam Nishat</div>
        <div className="id">ID · 2212445042</div>
      </div>
      <div className="author">
        <div className="name">Md. Shihab Tawsif Shown</div>
        <div className="id">ID · 2211939042</div>
      </div>
      <div className="author">
        <div className="name">Md. Nifat Hossain</div>
        <div className="id">ID · 2212923042</div>
      </div>
      <div className="author supervisor">
        <span className="role">Supervisor</span>
        <div className="name">Dr. Shafin Rahman</div>
        <div className="id">Associate Professor · ECE</div>
      </div>
      <div className="affiliation">
        <b>Dept. of Electrical &amp; Computer Engineering</b><br />
        North South University · Dhaka, Bangladesh<br />
        April 2026
      </div>
    </div>
  );
};

export default AuthorsStrip;
