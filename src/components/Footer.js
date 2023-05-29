import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  font-family: 'Elsie', cursive;
  width: 100 vw;
  max-width: 100 vw;
  display: flex;
  justify-content: center;
  margin: 10px;
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

function Footer() {
  return(
    <>
    <StyledFooter>
      <a href="https://github.com/SarahAndyshak/seasonal-foods"><p>Sarah Andyshak, 2023 | Image credits</p></a>
    </StyledFooter>
    </>
  )
}

export default Footer;