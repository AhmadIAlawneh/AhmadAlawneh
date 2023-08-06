import React, { Component } from 'react';
import './LastSection.css'
import s16 from '../../assets/S16.jpg'
class LastSection extends React.Component {
  render() {
    return (
      <div className="last-section">
        <div className="last-section-content">
          <img src={s16} alt="Logo" className="last-section-logo" />
          <p className="last-section-text">This website is made by Ahmad Alawneh and took me 12 hours to complete.</p>
        </div>
      </div>
    );
  }
}

export default LastSection;