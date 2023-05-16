import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: rgb(185, 223, 152);
  width: 100vw;
  max-width:100vw;
  height: var(--header-height);
  display: flex;
  align-items: center;
  padding: 0 2rem;

  font-family: 'Elsie', cursive;

  & > h1 {
    font-size: 3rem;
    margin-right: 50px;
  }
  & > h2 {
    font-size: 2rem;
    margin: 15px;
  }
  & a {
    color:rgb(73, 97, 51)
  }
  & a:link {
    text-decoration: none;
  }
  & a:hover {
    color:rgb(124, 55, 147)
  }
`

function Header() {
  return (
    <>
      <StyledHeader>
        <h1>Is it in season?</h1>
        <h2><Link to="/">Home</Link></h2>
        <h2><Link to="/recipes">Recipes</Link></h2>
        <h2><Link to="/seasons">Search by Season</Link></h2>
        {/* <h2><a href="https://www.usdalocalfoodportal.com/fe/fdirectory_farmersmarket/?source=fe&directory=farmersmarket&location=&x=&y=">Find a Farmers Market</a></h2> */}
      </StyledHeader>
    </>
  )
}

export default Header;