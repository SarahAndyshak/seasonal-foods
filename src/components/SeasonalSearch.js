import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledSeasonalSearch = styled.div`
text-align: left;
font-family: 'Elsie', cursive;
font-size: 1.5rem;

& h1 {
  color:rgb(124, 55, 147);
  text-align: center;
}
& h1 a {
  color:rgb(124, 55, 147);
}
& h1 a:hover {
  color:rgb(73, 97, 51);
}
& a {
  color:rgb(73, 97, 51);
}
& a:link {
  text-decoration: none;
}
& a:hover {
  color:rgb(124, 55, 147);
}
`

function SeasonalSearch() {
  return (
    <StyledSeasonalSearch>
      <h1>Find fruits and vegetables by season</h1>
      <h2><Link to="/spring">Spring</Link></h2>
      <h2><Link to="/summer">Summer</Link></h2>
      <h2><Link to="/fall">Fall</Link></h2>
      <h2><Link to="/winter">Winter</Link></h2>
    </StyledSeasonalSearch>
  )
}

export default SeasonalSearch;