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

  .circle-container {
    position: relative;
    width: 600px;
    height: 600px;
    padding: 20px;
    // /*2.8em = 2em*1.4 (2em = half the width of a link with img, 1.4 = sqrt(2))*/
    border: solid 1px;
    border-radius: 50%;
    margin: 60px auto;
  }
  .circle-container a {
    display: block;
    position: absolute;
    top: 50%; 
    left: 50%;
    width: 50px; 
    height: 50px;
    margin: -10px;
  }
  .circle-container img { display: block; width: 100%; }
  .deg0 { transform: translate(200px); }
  .deg24 { transform: rotate(24deg) translate(200px) rotate(-24deg); }
  .deg48 { transform: rotate(48deg) translate(200px) rotate(-48deg); }
  .deg72 { transform: rotate(72deg) translate(200px) rotate(-72deg); }
  .deg96 { transform: rotate(96deg) translate(200px) rotate(-96deg); }
  .deg120 { transform: rotate(120deg) translate(200px) rotate(-120deg); }
  .deg144 { transform: rotate(144deg) translate(200px) rotate(-144deg); }
  .deg168 { transform: rotate(168deg) translate(200px) rotate(-168deg); }
  .deg192 { transform: rotate(192deg) translate(200px) rotate(-192deg); }
  .deg216 { transform: rotate(216deg) translate(200px) rotate(-216deg); }
  .deg240 { transform: rotate(240deg) translate(200px) rotate(-240deg); }
  .deg264 { transform: rotate(264deg) translate(200px) rotate(-264deg); }
  .deg288 { transform: rotate(288deg) translate(200px) rotate(-288deg); }
  .deg312 { transform: rotate(312deg) translate(200px) rotate(-312deg); }
  .deg336 { transform: rotate(336deg) translate(200px) rotate(-336deg); }
  
`

function FoodList() {
  return (
    <StyledFoodList>
      <a href="https://www.usdalocalfoodportal.com/fe/fdirectory_farmersmarket/?source=fe&directory=farmersmarket&location=&x=&y=">Find a Farmers Market Near You!</a>
      <br /> <br />
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

    <div className='circle-container'>
      
      {/* <Link to="/food">
        <img alt="cherry" src={Cherry} className='deg0'/>
      </Link> */}

      {/* <img src='image.jpg'className='center'/> */}

      <img alt="cherry" src={Cherry} className='deg0'/>
      <img alt="tomato" src={Tomato} className='deg24'/>
      <img alt="carrots" src={Carrots} className='deg48'/>
      <img alt="orange" src={Orange} className='deg72'/>
      <img alt="mango" src={Mango} className='deg96'/>
      <img alt="banana" src={Banana} className='deg120'/>
      <img alt="kiwi" src={Kiwi} className='deg144'/>
      <img alt="avocado" src={Avocado} className='deg168'/>
      <img alt="broccoli" src={Broccoli} className='deg192'/>
      <img alt="cauliflower" src={Cauliflower} className='deg216'/>
      <img alt="blueberries" src={Blueberries} className='deg240'/>
      <img alt="cabbage" src={Cabbage} className='deg264'/>
      <img alt="grapes" src={Grapes} className='deg288'/>
      <img alt="dragonfruit" src={Dragonfruit} className='deg312'/>
      <img alt="watermelon" src={Watermelon} className='deg336'/>
    </div>

    {/* <div className='circle-container'>
      <a href='#' class='center'><img src='image.jpg'/></a>
      
      <Link to="/food">
        <img alt="cherry" src={Cherry} className='deg0'/>
      </Link>


      <a href='#' class='deg24'><img alt="tomato" src={Tomato}/></a>
      <a href='#' class='deg48'><img alt="carrots" src={Carrots}/></a>
      <a href='#' class='deg72'><img alt="orange" src={Orange}/></a>
      <a href='#' class='deg96'><img alt="mango" src={Mango}/></a>
      <a href='#' class='deg120'><img alt="banana" src={Banana}/></a>
      <a href='#' class='deg144'><img alt="kiwi" src={Kiwi}/></a>
      <a href='#' class='deg168'><img alt="avocado" src={Avocado}/></a>
      <a href='#' class='deg192'><img alt="broccoli" src={Broccoli}/></a>
      <a href='#' class='deg216'><img alt="cauliflower" src={Cauliflower}/></a>
      <a href='#' class='deg240'><img alt="blueberries" src={Blueberries}/></a>
      <a href='#' class='deg264'><img alt="cabbage" src={Cabbage}/></a>
      <a href='#' class='deg288'><img alt="grapes" src={Grapes}/></a>
      <a href='#' class='deg312'><img alt="dragonfruit" src={Dragonfruit}/></a>
      <a href='#' class='deg336'><img alt="watermelon" src={Watermelon}/></a>
    </div> */}



    </StyledFoodList>
  );
}

export default FoodList;