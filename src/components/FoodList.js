import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Avocado from "./../imgs/Avocado.png";
import Banana from "./../imgs/Banana.png";
import Cherry from "./../imgs/Cherry.png";
import styled from "styled-components";

const StyledFoodList = styled.div`
  img {
    height: 150px;
  }
`

function FoodList() {
  return (
    <StyledFoodList>
    <img src={Avocado} alt="an avocado" />
    </StyledFoodList>
  )
}

export default FoodList;