import React, { Component } from 'react';
import './RecipeCard.css';
import './RecipeCard.css'
class RecipeCard extends Component {
render() {
    return (
    <div>
        <h1 className="resipe">most explosive recipe at restaurant</h1>
        <div className="recipe-section">
            <div className="card">
            <div className="card-img">
                <img src="recipe1.jpg" alt="Recipe 1" />
            </div>
            </div>
            <div className="card">
            <div className="card-content">
                <p className="card-text">Recipe 1 description</p>
            </div>
            </div>
            <div className="card">
            <div className="card-img">
                <img src="recipe2.jpg" alt="Recipe 2" />
            </div>
            </div>
            <div className="card">
            <div className="card-content">
                <p className="card-text">Recipe 2 description</p>
            </div>
        </div>
        </div>
        <div className="recipe-section">
            <div className="card">
            <div className="card-img">
                <img src="recipe3.jpg" alt="Recipe 3" />
            </div>
        </div>
        <div className="card">
            <div className="card-content">
                <p className="card-text">Recipe 3 description</p>
            </div>
        </div>
        <div className="card">
            <div className="card-img">
            <img src="recipe4.jpg" alt="Recipe 4" />
            </div>
          </div>
        <div className="card">
        <div className="card-content">
            <p className="card-text">Recipe 4 description</p>
        </div>
        </div>
        </div>
        </div>
    );
  }
}

export default RecipeCard;