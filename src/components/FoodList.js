import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Avocado from "./../imgs/Avocado.png";
import Banana from "./../imgs/Banana.png";
import Blueberries from "./../imgs/Blueberries.png";
import Broccoli from "./../imgs/Broccoli.png";
import Cabbage from "./../imgs/Cabbage.png";
import Carrots from "./../imgs/Carrots.png";
import Cauliflower from "./../imgs/Cauliflower.png";
import Cherry from "./../imgs/Cherry.png";
import Dragonfruit from "./../imgs/Dragonfruit.png";
import Grapes from "./../imgs/Grapes.png";
import Kiwi from "./../imgs/Kiwi.png";
import Mango from "./../imgs/Mango.png";
import Orange from "./../imgs/Orange.png";
import Tomato from "./../imgs/Tomato.png";
import Watermelon from "./../imgs/Watermelon.png";
import styled from "styled-components";
// import { Link } from "react-router-dom";

const StyledFoodList = styled.div`
  img {
    height: 100px;
  }

  // .place_list {
  //   position: absolute;
  //   z-index: 1;
  //   padding: 20px;
  //   box-shadow: 0px 8px 10px 0px #0000002b;
  // }

  .circle-container {
    position: relative;
    width: 500px;
    height: 500px;
    // padding: 20px;
    border: solid 1px;
    border-radius: 50%;
    margin: 50px auto;
  }
  .circle-container a {
    display: block;
    position: absolute;
    top: 40%; 
    left: 40%;
    // width: 70px; 
    // height: 70px;
    // margin: -10px;
  }
// Original code  
  // .circle-container img { display: block; width: 100%; }
  // .deg0 { transform: translate(200px); } /* 12em = half the width of the wrapper */
  // .deg45 { transform: rotate(45deg) translate(200px) rotate(-45deg); }
  // .deg90 { transform: rotate(90deg) translate(200px) rotate(-90deg); }
  // .deg135 { transform: rotate(135deg) translate(200px) rotate(-135deg); }
  // .deg180 { transform: translate(-200px); }
  // .deg225 { transform: rotate(225deg) translate(200px) rotate(-225deg); }
  // .deg270 { transform: rotate(270deg) translate(200px) rotate(90deg); }
  // .deg315 { transform: rotate(315deg) translate(200px) rotate(-315deg); }
// More angles -- all adjusted because of item shape
.circle-container img { display: block; width: 100%; }
  .deg0 { transform: translate(250px); }
  .deg24 { transform: rotate(19deg) translate(250px) rotate(-19deg); }
  .deg48 { transform: rotate(44deg) translate(250px) rotate(-44deg); }
  .deg72 { transform: rotate(66deg) translate(250px) rotate(-66deg); }
  .deg96 { transform: rotate(94deg) translate(250px) rotate(-94deg); }
  .deg120 { transform: rotate(126deg) translate(250px) rotate(-126deg); }
  .deg144 { transform: rotate(150deg) translate(250px) rotate(-150deg); }
  .deg168 { transform: rotate(174deg) translate(250px) rotate(-174deg); }
  .deg192 { transform: rotate(196deg) translate(250px) rotate(-196deg); }
  .deg216 { transform: rotate(220deg) translate(250px) rotate(-220deg); }
  .deg240 { transform: rotate(248deg) translate(250px) rotate(-248deg); }
  .deg264 { transform: rotate(274deg) translate(250px) rotate(-274deg); }
  .deg288 { transform: rotate(296deg) translate(250px) rotate(-296deg); }
  .deg312 { transform: rotate(316deg) translate(250px) rotate(-316deg); }
  .deg336 { transform: rotate(336deg) translate(250px) rotate(-336deg); }
  
`

function FoodList() {
  return (
    <StyledFoodList>
      <a href="https://www.usdalocalfoodportal.com/fe/fdirectory_farmersmarket/?source=fe&directory=farmersmarket&location=&x=&y=">Find a Farmers Market Near You!</a>
      <br /> <br />

{/* Just placing on the page */}
      {/* <img alt="cherry" src={Cherry}/>
      <img alt="tomato" src={Tomato}/>
      <img alt="carrots" src={Carrots}/>
      <img alt="orange" src={Orange}/>
      <img alt="mango" src={Mango}/>
      <img alt="banana" src={Banana}/>
      <img alt="kiwi" src={Kiwi}/>
      <img alt="avocado" src={Avocado}/>
      <img alt="broccoli" src={Broccoli}/>
      <img alt="cauliflower" src={Cauliflower}/>
      <img alt="blueberries" src={Blueberries}/>
      <img alt="cabbage" src={Cabbage}/>
      <img alt="grapes" src={Grapes}/>
      <img alt="dragonfruit" src={Dragonfruit}/>
      <img alt="watermelon" src={Watermelon}/> */}

{/* Placing images in a circle, original code */}
    {/* <div class='circle-container'>
        <a href='#' class='center'><img src='image.jpg'/></a>
        <a href='#' class='deg0'><img alt="deg0" src='image.jpg'/></a>
        <a href='#' class='deg45'><img alt="deg45" src='image.jpg'/></a>
        <a href='#' class='deg90'><img alt="deg90" src='image.jpg'/></a>
        <a href='#' class='deg135'><img alt="deg135" src='image.jpg'/></a>
        <a href='#' class='deg180'><img alt="deg180" src='image.jpg'/></a>
        <a href='#' class='deg225'><img alt="deg225" src='image.jpg'/></a>
        <a href='#' class='deg270'><img alt="deg270" src='image.jpg'/></a>
        <a href='#' class='deg315'><img alt="deg315" src='image.jpg'/></a>
    </div> */}


{/* placing images in a circle more angles */}
      <div class='circle-container'>
        {/* <a href='#' class='center'><img src='image.jpg'/></a> */}
        <a href='#' class='deg0'><img alt="deg0" src={Mango}/></a>

        <a href='#' class='deg24'><img alt="deg24" src={Banana}/></a>

        <a href='#' class='deg48'><img alt="deg48" src={Kiwi}/></a>

        <a href='#' class='deg72'><img alt="deg72" src={Avocado}/></a>
        
        <a href='#' class='deg96'><img alt="deg96" src={Broccoli}/></a>
        
        <a href='#' class='deg120'><img alt="deg120" src={Cauliflower}/></a>
        
        <a href='#' class='deg144'><img alt="deg144" src={Blueberries}/></a>
        
        <a href='#' class='deg168'><img alt="deg168" src={Cabbage}/></a>
        
        <a href='#' class='deg192'><img alt="deg192" src={Grapes}/></a>
        
        <a href='#' class='deg216'><img alt="deg216" src={Dragonfruit}/></a>
        
        <a href='#' class='deg240'><img alt="deg240" src={Watermelon}/></a>
        
        <a href='#' class='deg264'><img alt="deg264" src={Cherry}/></a>
        
        <a href='#' class='deg288'><img alt="deg288" src={Tomato}/></a>
        
        <a href='#' class='deg312'><img alt="deg312" src={Carrots}/></a>
        
        <a href='#' class='deg336'><img alt="deg336" src={Orange}/></a>

      </div>


    </StyledFoodList>
  );
}

export default FoodList;