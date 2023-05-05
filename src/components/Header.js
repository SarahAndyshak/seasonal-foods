import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: rgb(185, 223, 152);
`

function Header() {
  return (
    <Router>
      <StyledHeader>
      <h1>Is it in season?</h1>
      <p><Link to="/">Home</Link></p>
      </StyledHeader>
    </Router>
  )
}

export default Header;