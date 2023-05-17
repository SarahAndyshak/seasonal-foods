import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const StyledRecipes = styled.div`
margin: 2rem;
margin-left: 5rem;
text-align: left;
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
  display: flex;
  align-items: center;
  
  & > h1 {
    margin: 2rem;
  }
  & > h3 {
    margin-right: 2rem;
  }
}

.title {
  text-align: center
}
`

function Recipes () {
  return (
    <StyledRecipes>
      <div className="title">
        <h1>Enjoy some recipes at these links!</h1>
        <h5>Click on the name of an item or its picture to return to its details</h5>
        </div>
      <div className="container">
        <Link to="/foods/1"><img src={Cherry} alt="Cherry"/></Link>
        <h1><Link to="/foods/1">Cherry</Link></h1>
        <h3><a href="https://cookeatshare.com/recipes/quick-and-easy-fresh-cherry-pie-692039">Quick and Easy Fresh Cherry Pie, by David Martin</a></h3>
        <h3><a href="https://cookeatshare.com/recipes?keywords=cherry">Check out more recipes with cherries!</a></h3>
      </div>
      <br />

      <div className="container">
        <Link to="/foods/2"><img src={Tomato} alt="Tomato" /></Link>
        <h1><Link to="/foods/2">Tomato</Link></h1>
        <h3><a href="https://cookeatshare.com/recipes/mediterranean-lamb-stew-with-tomato-mushroom-and-eggplant-kokkinisto-797643">Mediterranean Lamb Stew with tomato, mushroom and eggplant (Kokkinisto), by John Spottiswood</a></h3>
        <h3><a href="https://cookeatshare.com/recipes?keywords=tomato">Check out more recipes with tomato!</a></h3>
      </div>
      <br />

      <div className="container">
        <Link to="/foods/3"><img src={Carrots} alt="Carrots" /></Link>
        <h1><Link to="/foods/3">Carrot</Link></h1>
        <h3><a href="https://cookeatshare.com/recipes/carrot-and-red-lentils-soup-761174">Carrot and Red Lentil Soup, by Easy Cook - Laka kuharica</a></h3>
        <h3><a href="https://cookeatshare.com/recipes?keywords=carrot">Check out more recipes with carrot!</a></h3>
      </div>
      <br />

      <div className="container">
        <Link to="/foods/4"><img src={Orange} alt="Orange" /></Link>
        <h1><Link to="/foods/4">Orange</Link></h1>
        <h3><a href="https://cookeatshare.com/recipes/smoked-orange-peel-chicken-793501">Smoked Orange Peel Chicken, by Patti Fisher</a></h3>
        <h3><a href="https://cookeatshare.com/recipes?keywords=orange">Check out more recipes with orange!</a></h3>
      </div>
      <br />

      <div className="container">
        <Link to="/foods/5"><img src={Mango} alt="Mango" /></Link>
        <h1><Link to="/foods/5">Mango</Link></h1>
        <h3><a href="https://cookeatshare.com/recipes/mango-lassi-743042">Mango Lassi, by pshinde2109</a></h3>
        <h3><a href="https://cookeatshare.com/recipes?keywords=mango">Check out more recipes with mango!</a></h3>
        </div>
      <br />

      <div className="container">
        <Link to="/foods/6"><img src={Banana} alt="Banana" /></Link>
        <h1><Link to="/foods/6">Banana</Link></h1>
        <h3><a href="https://cookeatshare.com/recipes/easy-banana-bread-719687">Easy Banana Bread, by ShaleeDP</a></h3>
        <h3><a href="https://cookeatshare.com/recipes?keywords=banana">Check out more recipes with banana!</a></h3>
      </div>
      <br />

      <div className="container">
        <Link to="/foods/7"><img src={Kiwi} alt="Kiwi" /></Link>
        <h1><Link to="/foods/7">Kiwi</Link></h1>
        <h3><a href="https://cookeatshare.com/recipes/chocolate-kiwi-smoothie-700004">Chocolate Kiwi Smoothie, by Nupur UKrasoi</a></h3>
        <h3><a href="https://cookeatshare.com/recipes?keywords=kiwi">Check out more recipes with kiwi!</a></h3>
      </div>
      <br />

      <div className="container">
        <Link to="/foods/8"><img src={Avocado} alt="Avocado" /></Link>
        <h1><Link to="/foods/8">Avocado</Link></h1>
        <h3><a href="https://cookeatshare.com/recipes/quinoa-salad-with-broccoli-and-chickpeas-707082">Quinoa Salad with Broccoli and Chickpeas, by Ronda</a></h3>
        <h3><a href="https://cookeatshare.com/recipes?keywords=avocado">Check out more recipes with avocado!</a></h3>
      </div>
      <br />

      <div className="container">
        <Link to="/foods/9"><img src={Broccoli} alt="Broccoli" /></Link>
        <h1><Link to="/foods/9">Broccoli</Link></h1>
        <h3><a href="https://cookeatshare.com/recipes/broccoli-and-cauliflower-salad-with-red-grapes-719192">Broccoli and Cauliflower Salad with Red Grapes Salad, by Robyn Savoie</a></h3>
        <h3><a href="https://cookeatshare.com/recipes?keywords=broccoli">Check out more recipes with broccoli!</a></h3>
      </div>
      <br />

      <div className="container">
        <Link to="/foods/10"><img src={Cauliflower} alt="Cauliflower" /></Link>
        <h1><Link to="/foods/10">Cauliflower</Link></h1>
        <h3><a href="https://cookeatshare.com/recipes/gobi-cauliflower-manchurian-772137">Gobi (Cauliflower) Manchurian, by Hina Gujral</a></h3>
        <h3><a href="https://cookeatshare.com/recipes?keywords=cauliflower">Check out more recipes with cauliflower!</a></h3>
      </div>
      <br />

      <div className="container">
        <Link to="/foods/11"><img src={Blueberries} alt="Blueberries" /></Link>
        <h1><Link to="/foods/11">Blueberries</Link></h1>
        <h3><a href="https://cookeatshare.com/recipes/banana-blueberry-muffin-810851">Banana Blueberry Muffin, by Simmy Routroy</a></h3>
        <h3><a href="https://cookeatshare.com/recipes?keywords=blueberries">Check out more recipes with blueberries!</a></h3>
      </div>
      <br />

      <div className="container">
        <Link to="/foods/12"><img src={Cabbage} alt="Cabbage" /></Link>
        <h1><Link to="/foods/12">Cabbage</Link></h1>
        <h3><a href="https://cookeatshare.com/recipes/stuffed-cabbage-golabki-664567">Stuffed Cabbage (Golabki), by Therese</a></h3>
        <h3><a href="https://cookeatshare.com/recipes?keywords=cabbage">Check out more recipes with cabbage!</a></h3>
        </div>
      <br />

      <div className="container">
        <Link to="/foods/13"><img src={Grapes} alt="Grapes" /></Link>
        <h1><Link to="/foods/13">Grapes</Link></h1>
        <h3><a href="https://cookeatshare.com/recipes/fresh-and-easy-grape-sherbet-686486">Fresh and Easy Grape Sherbet, by Catherine Pappas</a></h3>
        <h3><a href="https://cookeatshare.com/recipes?keywords=grapes">Check out more recipes with grapes!</a></h3>
      </div>
      <br />

      <div className="container">
        <Link to="/foods/14"><img src={Dragonfruit} alt="Dragonfruit" /></Link>
        <h1><Link to="/foods/14">Dragon Fruit</Link></h1>
        <h3><a href="https://cookeatshare.com/recipes/no-bake-dessert-tropical-coconut-milk-rice-pudding-with-dragon-fruit-rambutans-719670/external">No Bake Dessert | Tropical Coconut Milk Rice Pudding … with dragon fruit & rambutans, by Deeba Rajpal</a></h3>
        <h3><a href="https://cookeatshare.com/recipes?keywords=dragon+fruit">Check out more recipes with dragon fruit!</a></h3>
      </div>
      <br />

      <div className="container">
        <Link to="/foods/15"><img src={Watermelon} alt="Watermelon" /></Link>
        <h1><Link to="/foods/15">Watermelon</Link></h1>
        <h3><a href="https://cookeatshare.com/recipes/no-bake-dessert-tropical-coconut-milk-rice-pudding-with-dragon-fruit-rambutans-719670/external">Watermelon Salsa, by Kelsey Martin</a></h3>
        <h3><a href="https://cookeatshare.com/recipes/watermelon-salsa-587">Check out more recipes with watermelon!</a></h3>
      </div>
      <br /> 

    </StyledRecipes>
  )
}

export default Recipes;