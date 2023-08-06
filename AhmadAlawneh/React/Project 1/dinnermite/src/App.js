import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import RecipeCard from './Components/RecipeCard/RecipeCard.jsx';
import CookerSection from './Components/CookerSection/CookerSection.jsx';
import LastSection from './Components/LastSection/LastSection.jsx';
import DayRecipeSection from './Components/DayRecipeSection/DayRecipeSection.jsx';
import LatestNewsSection from './Components/LatestNewsSection/LatestNewsSection.jsx';
import VideoSection from './Components/VideoSection/VideoSection';
import SearchSection from './Components/SearchSection/SearchSection';
import FAQPage from './Components/FQA/FAQPage.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <SearchSection />
          <VideoSection />
          <RecipeCard />
          <CookerSection />
          <LatestNewsSection />
          <DayRecipeSection />
          <LastSection />
          <Routes>
            <Route path="/faq" element={<FAQPage />} />
            {/* Other routes */}
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;