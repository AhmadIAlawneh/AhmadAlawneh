import React, { Component } from 'react';
import './DayRecipeSection.css'
import dayrescipe from '../../assets/Pizza.jpg'
class DayRecipeSection extends React.Component {
  render() {
    return (
      <div className="day-recipe-section">
        <div className="day-recipe-image">
            <img src={dayrescipe} alt="Recipe of the Day"/>
        <div className="day-recipe-card">
            <div className="day-recipe-card-content">
                <h3 className="day-recipe-title">Recipe of the Day</h3>
                <p className="day-recipe-description">Recipe description</p>
            </div>
        
        </div>
        </div>
        <div className="tips-section">
            <h3 className="tips-title">Tips</h3>
            <button className="add-tip"><h5>Add tip</h5></button>
        <div className="tips-container">
            <div className="tip-card">
                <img src="tip1-image.jpg" alt="Tip 1"/>
                <p className="tip-description">Tip 1 description</p>
            </div>
            <div className="tip-card">
                <img src="tip2-image.jpg" alt="Tip 2"/>
                <p className="tip-description">Tip 2 description</p>
            </div>
            <div className="tip-card">
                <img src="tip3-image.jpg" alt="Tip 3"/>
                <p className="tip-description">Tip 3 description</p>
            </div>
        </div>
        </div>
    </div>
    );
  }
}

export default DayRecipeSection;