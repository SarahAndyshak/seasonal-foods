import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

const StyledSummer = styled.div`
margin: 2rem;
font-family: 'Elsie', cursive;
font-size: 1.5rem;

img {
  height: 100px;
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
& h4 {
  text-align: center;
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
  text-align: center;
}
`

function Summer() {

  let { id } = useParams();
  const[summerState, setSummerState] = useState(null);
  const[errorState, setErrorState] = useState(null);
  const[loadedState, setLoadedState] = useState(false);

  useEffect(() => {
    fetch(`https://seasonalfoodapp.azurewebsites.net/api/foods?harvestSeason=summer`)
    .then(response => {
      if(!response.ok){
        throw new Error(`${response.status}: ${response.statusText}`);
      } else {
        return response.json()
      }
    })
    .then((jsonifiedResponse) => {
      setSummerState(jsonifiedResponse);
      setLoadedState(true);
    })
    .catch((error) => {
      setErrorState(error.message);
    });
  }, [])

  if(errorState) {
    return <h1>Error: {errorState}</h1>;
  } else if (!loadedState) {
    return <h1>...Loading...</h1>;
  } else {
    return (

      <StyledSummer>
        
        <h1>Summer foods</h1>
        <div className="container">            {summerState.map((food, foodId) =>
          <h3 key={foodId}>
            <Link to={`/foods/${food.foodId}`}>
            <h3>{food.name}</h3>
            </Link>
          </h3>
          )}
        </div>
        <br />

        <h4><Link to="/recipes">Check out some recipes!</Link> |
        <a href="https://www.usdalocalfoodportal.com/fe/fdirectory_farmersmarket/?source=fe&directory=farmersmarket&location=&x=&y="> Find a Farmers Market Near You!</a></h4>
      </StyledSummer>
    );
  }
}

export default Summer;