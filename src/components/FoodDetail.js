import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

const StyledFoodDetails = styled.div`
  margin: 2rem;
  margin-left: 5rem;
  font-family: 'Elsie', cursive;
  font-size: 1.5rem;
`


function FoodDetail() {

  let { id } = useParams();
  const[foodState, setFoodState] = useState(null);
  const[errorState, setErrorState] = useState(null);
  const[loadedState, setLoadedState] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/api/foods/${id}`)
    .then(response => {
      if(!response.ok){
        throw new Error(`${response.status}: ${response.statusText}`);
      } else {
        return response.json()
      }
    })
    .then((jsonifiedResponse) => {
      setFoodState(jsonifiedResponse);
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

      <StyledFoodDetails>
        <h1>{foodState.name}</h1>
        <h3>When is it in season?</h3>
        <h5>{foodState.harvestSeason}</h5>
        <h3>Where does it generally grow?</h3>
        <h5>{foodState.geography}</h5>
        <h3>Popular uses:</h3>
        <h5>{foodState.popularUses}</h5>
        <h3>Sample recipe:</h3>
        <h5>{foodState.sampleRecipe}</h5>
      </StyledFoodDetails>
    );
  }


}

export default FoodDetail;