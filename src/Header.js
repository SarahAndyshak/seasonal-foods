import React from "react";
import { Link } from "react-router-dom";

function Header(){
  return (
    <React.Fragment>
      <h1>Is it in season?</h1>
      <p><Link to="/">Home</Link></p>
    </React.Fragment>
  )
}

export default Header;