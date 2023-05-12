import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: rgb(185, 223, 152);
`

function Header() {
  return (
    <>
      <StyledHeader>
      <h1>Is it in season?</h1>
      <Link to="/">Home</Link>
      </StyledHeader>
    </>
  )
}

export default Header;