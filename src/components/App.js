import React from 'react';
import './App.css';
import Header from './Header';
import FoodList from './FoodList';
import FoodDetail from './FoodDetail';
import Recipes from './Recipes';
import { Route, Routes } from 'react-router-dom';
import SeasonalSearch from './SeasonalSearch';
import Spring from './Spring';
import Summer from './Summer';
import Fall from './Fall';
import Winter from './Winter';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<FoodList />} />
      <Route path="/foods/:id" element={<FoodDetail />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/seasons" element={<SeasonalSearch />} />
      <Route path="/spring" element={<Spring />} />
      <Route path="/summer" element={<Summer />} />
      <Route path="/fall" element={<Fall />} />
      <Route path="/winter" element={<Winter />} />
    </Routes>
    </>
  );
}

export default App;