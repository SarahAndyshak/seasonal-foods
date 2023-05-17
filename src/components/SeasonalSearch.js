import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Blueberries from "./../imgs/Blueberries.png";
import Watermelon from "./../imgs/Watermelon.png";
import Gourd from "./../imgs/Gourd.png";
import Berries from "./../imgs/Berries.png";


const StyledSeasonalSearch = styled.div`
text-align: center;
font-family: 'Elsie', cursive;
font-size: 1.5rem;
img {
  height: 100px;
}
img:hover {
  transform: scale(1.5);
}

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
.container {
  margin: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
`

function SeasonalSearch() {
  return (
    <StyledSeasonalSearch>
      <h1>Find fruits and vegetables by season</h1>
      
      <div className="container">
        <Link to="/spring"><img src={Blueberries} alt="Blueberries" /></Link>
        <h2><Link to="/spring">Spring</Link></h2>
      </div>

      <div className="container">
        <Link to="/summer"><img src={Watermelon} alt="Watermelon" /></Link>
        <h2><Link to="/summer">Summer</Link></h2>
      </div>

      <div className="container">
        <Link to="/fall"><img src={Gourd} alt="Gourd" /></Link>
        <h2><Link to="/fall">Fall</Link></h2>
      </div>

      <div className="container">
        <Link to="/winter"><img src={Berries} alt="Berries" /></Link>
        <h2><Link to="/winter">Winter</Link></h2>
      </div>
    </StyledSeasonalSearch>
  )
}

export default SeasonalSearch;