import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledRecipes = styled.div`
margin: 2rem;
margin-left: 5rem;
text-align: left;
font-family: 'Elsie', cursive;
font-size: 1.5rem;

& h1 {
  color:rgb(124, 55, 147);
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

function Recipes () {
  return (
    <StyledRecipes>
      <h1>Cherry</h1>
      <h3><a href="https://cookeatshare.com/recipes/quick-and-easy-fresh-cherry-pie-692039">Quick and Easy Fresh Cherry Pie, by David Martin</a></h3>
      <h3><a href="https://cookeatshare.com/recipes?keywords=cherry">Check out more recipes with cherries!</a></h3>
      <br />

      <h1>Tomato</h1>
      <h3><a href="https://cookeatshare.com/recipes/mediterranean-lamb-stew-with-tomato-mushroom-and-eggplant-kokkinisto-797643">Mediterranean Lamb Stew with tomato, mushroom and eggplant (Kokkinisto), by John Spottiswood</a></h3>
      <h3><a href="https://cookeatshare.com/recipes?keywords=tomato">Check out more recipes with tomato!</a></h3>
      <br />

      <h1>Carrot</h1>
      <h3><a href="https://cookeatshare.com/recipes/carrot-and-red-lentils-soup-761174">Carrot and Red Lentil Soup, by Easy Cook - Laka kuharica</a></h3>
      <h3><a href="https://cookeatshare.com/recipes?keywords=carrot">Check out more recipes with carrot!</a></h3>
      <br />

      <h1>Orange</h1>
      <h3><a href="https://cookeatshare.com/recipes/smoked-orange-peel-chicken-793501">Smoked Orange Peel Chicken, by Patti Fisher</a></h3>
      <h3><a href="https://cookeatshare.com/recipes?keywords=orange">Check out more recipes with orange!</a></h3>
      <br />

      <h1>Mango</h1>
      <h3><a href="https://cookeatshare.com/recipes/mango-lassi-743042">Mango Lassi, by pshinde2109</a></h3>
      <h3><a href="https://cookeatshare.com/recipes?keywords=mango">Check out more recipes with mango!</a></h3>
      <br />

      <h1>Banana</h1>
      <h3><a href="https://cookeatshare.com/recipes/easy-banana-bread-719687">Easy Banana Bread, by ShaleeDP</a></h3>
      <h3><a href="https://cookeatshare.com/recipes?keywords=banana">Check out more recipes with banana!</a></h3>
      <br />

      <h1>Kiwi</h1>
      <h3><a href="https://cookeatshare.com/recipes/chocolate-kiwi-smoothie-700004">Chocolate Kiwi Smoothie, by Nupur UKrasoi</a></h3>
      <h3><a href="https://cookeatshare.com/recipes?keywords=kiwi">Check out more recipes with kiwi!</a></h3>
      <br />

      <h1>Avocado</h1>
      <h3><a href="https://cookeatshare.com/recipes/quinoa-salad-with-broccoli-and-chickpeas-707082">Quinoa Salad with Broccoli and Chickpeas, by Ronda</a></h3>
      <h3><a href="https://cookeatshare.com/recipes?keywords=avocado">Check out more recipes with avocado!</a></h3>
      <br />

      <h1>Broccoli</h1>
      <h3><a href="https://cookeatshare.com/recipes/broccoli-and-cauliflower-salad-with-red-grapes-719192">Broccoli and Cauliflower Salad with Red Grapes Salad, by Robyn Savoie</a></h3>
      <h3><a href="https://cookeatshare.com/recipes?keywords=broccoli">Check out more recipes with broccoli!</a></h3>
      <br />

      <h1>Cauliflower</h1>
      <h3><a href="https://cookeatshare.com/recipes/gobi-cauliflower-manchurian-772137">Gobi (Cauliflower) Manchurian, by Hina Gujral</a></h3>
      <h3><a href="https://cookeatshare.com/recipes?keywords=cauliflower">Check out more recipes with cauliflower!</a></h3>
      <br />

      <h1>Blueberries</h1>
      <h3><a href="https://cookeatshare.com/recipes/banana-blueberry-muffin-810851">Banana Blueberry Muffin, by Simmy Routroy</a></h3>
      <h3><a href="https://cookeatshare.com/recipes?keywords=blueberries">Check out more recipes with blueberries!</a></h3>
      <br />

      <h1>Cabbage</h1>
      <h3><a href="https://cookeatshare.com/recipes/stuffed-cabbage-golabki-664567">Stuffed Cabbage (Golabki), by Therese</a></h3>
      <h3><a href="https://cookeatshare.com/recipes?keywords=cabbage">Check out more recipes with cabbage!</a></h3>
      <br />

      <h1>Grapes</h1>
      <h3><a href="https://cookeatshare.com/recipes/fresh-and-easy-grape-sherbet-686486">Fresh and Easy Grape Sherbet, by Catherine Pappas</a></h3>
      <h3><a href="https://cookeatshare.com/recipes?keywords=grapes">Check out more recipes with grapes!</a></h3>
      <br />

      <h1>Dragon Fruit</h1>
      <h3><a href="https://cookeatshare.com/recipes/no-bake-dessert-tropical-coconut-milk-rice-pudding-with-dragon-fruit-rambutans-719670/external">No Bake Dessert | Tropical Coconut Milk Rice Pudding … with dragon fruit & rambutans, by Deeba Rajpal</a></h3>
      <h3><a href="https://cookeatshare.com/recipes?keywords=dragon+fruit">Check out more recipes with dragon fruit!</a></h3>
      <br />

      <h1>Watermelon</h1>
      <h3><a href="https://cookeatshare.com/recipes/no-bake-dessert-tropical-coconut-milk-rice-pudding-with-dragon-fruit-rambutans-719670/external">Watermelon Salsa, by Kelsey Martin</a></h3>
      <h3><a href="https://cookeatshare.com/recipes/watermelon-salsa-587">Check out more recipes with watermelon!</a></h3>
      <br /> 

    </StyledRecipes>
  )
}

export default Recipes;