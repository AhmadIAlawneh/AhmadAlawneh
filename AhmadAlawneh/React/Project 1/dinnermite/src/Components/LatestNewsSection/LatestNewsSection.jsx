import React, { Component } from 'react';
import './LatestNewsSection.css'
import pizza from '../../assets/Pizza.jpg'
class LatestNewsSection extends React.Component {
  render() {
    return (
      <div className="latest-news-section">
        <div className="latest-news-image">
          <img src={pizza} alt="Recipe Image" />
        </div>
        <div className="latest-news-card">
          <h3 className="latest-news-title">Competition Winner: Best Recipe</h3>
          <p className="latest-news-description">We are thrilled to announce the winner of our recent cooking competition with their delicious recipe. Check out the details and try the winning recipe yourself!</p>
          <a href="#" className="latest-news-button">Read More</a>
        </div>
      </div>
    );
  }
}

export default LatestNewsSection;