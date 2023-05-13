import React from 'react';
import './App.css';
import Header from './Header';
import FoodList from './FoodList';
import FoodDetail from './FoodDetail';
import Recipes from './Recipes';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<FoodList />} />
      <Route path="/foods/:id" element={<FoodDetail />} />
      <Route path="/recipes" element={<Recipes />} />
    </Routes>
    </>
  );
}

export default App;