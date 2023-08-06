import React, { Component } from 'react';
import './TipsSection.css'
class TipsSection extends React.Component {
  render() {
    return (
      <div className="tips-section">
        <h3 className="tips-title">Tips</h3>
        <button className="add-tip">
          <h5>Add tip</h5>
        </button>
        <div className="tips-container">
          <div className="tip-card">
            <img src="tip1-image.jpg" alt="Tip 1" />
            <p className="tip-description">Tip 1 description</p>
          </div>
          <div className="tip-card">
            <img src="tip2-image.jpg" alt="Tip 2" />
            <p className="tip-description">Tip 2 description</p>
          </div>
          <div className="tip-card">
            <img src="tip3-image.jpg" alt="Tip 3" />
            <p className="tip-description">Tip 3 description</p>
          </div>
          {/* Add more tip cards as needed */}
        </div>
      </div>
    );
  }
}

export default TipsSection;