import React, { Component } from 'react';
import './CookerSection.css'
import chef from  '../../assets/chef.jpg'
class CookerSection extends React.Component {
  render() {
    return (
      <div className="cooker-section">
        <img src={chef} className="cooker-image" />
        <div className="cooker-card">
          <div className="card-body">
            <h2 className="cooker-title">Cooker Competition</h2>
            <p className="cooker-text">Join our exciting cooker competition and show off your cooking skills!</p>
            <a href="#" className="cooker-button">Learn More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default CookerSection;