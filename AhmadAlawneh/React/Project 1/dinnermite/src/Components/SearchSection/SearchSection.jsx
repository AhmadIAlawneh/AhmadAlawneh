import React, { Component } from 'react';
import './SearchSection.css';

class SearchSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0,
      visibleSlides: 5,
    };

    this.sliderRef = React.createRef();
    this.slides = ['Main', 'Pizza', 'Fish', 'Appetizers', 'Desserts', 'Eggs', 'Salad', 'Snacks'];
  }

  componentDidMount() {
    this.updateSlider();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.currentSlide !== this.state.currentSlide ||
      prevState.visibleSlides !== this.state.visibleSlides
    ) {
      this.updateSlider();
    }
  }

  updateSlider = () => {
    const { currentSlide, visibleSlides } = this.state;
    const slideWidth = 100; // Width of each slide
    const slideMargin = 10; // Margin between slides

    this.sliderRef.current.style.transition = 'transform 0.3s ease-in-out';
    this.sliderRef.current.style.transform = `translateX(-${
      (slideWidth + slideMargin) * currentSlide
    }px`;

    this.slides.forEach((slide, index) => {
      const slideElement = this.sliderRef.current.children[index];
      if (index < currentSlide || index >= currentSlide + visibleSlides) {
        slideElement.style.opacity = 0;
        slideElement.style.pointerEvents = 'none';
      } else {
        slideElement.style.opacity = 1;
        slideElement.style.pointerEvents = 'auto';
      }
    });
  };

  slideNext = () => {
    this.setState((prevState) => ({
      currentSlide: (prevState.currentSlide + 1) % this.slides.length,
    }));
  };

  render() {
    return (
      <div className="search-section">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <span>or</span>
        </div>
        <div className="slider-container">
          <div className="slider" ref={this.sliderRef}>
            {this.slides.map((slide, index) => (
              <div className="slide" key={index}>
                {slide}
              </div>
            ))}
          </div>
        </div>
        <div className="slider-arrow next" onClick={this.slideNext}>
          &gt;
        </div>
      </div>
    );
  }
}

export default SearchSection;
