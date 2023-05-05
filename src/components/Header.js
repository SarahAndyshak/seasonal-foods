import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Header(){
  return (
    <Router>
      <h1>Is it in season?</h1>
      <p><Link to="/">Home</Link></p>
    </Router>
  )
}

export default Header;