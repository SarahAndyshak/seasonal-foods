import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

const StyledSeasonalSearch = styled.div`

`

function SeasonalSearch() {

  let { id } = useParams();
  const[springState, setSpringState] = useState(null);
  const[summerState, setSummerState] = useState(null);
  // const[fallState, setFallState] = useState(null);
  // const[winterState, setWinterState] = useState(null);

  const[errorState, setErrorState] = useState(null);
  const[loadedState, setLoadedState] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/api/foods?harvestSeason=spring`)
    .then(response => {
      if(!response.ok){
        throw new Error(`${response.status}: ${response.statusText}`);
      } else {
        return response.json()
      }
    })
    .then((jsonifiedResponse) => {
      setSpringState(jsonifiedResponse);
      setLoadedState(true);
    })
    .catch((error) => {
      setErrorState(error.message);
    });
  }, [])

  // useEffect(() => {
  //   fetch(`http://localhost:5000/api/foods?harvestSeason=summer`)
  //   .then(response => {
  //     if(!response.ok){
  //       throw new Error(`${response.status}: ${response.statusText}`);
  //     } else {
  //       return response.json()
  //     }
  //   })
  //   .then((jsonifiedResponse) => {
  //     setSummerState(jsonifiedResponse);
  //     setLoadedState(true);
  //   })
  //   .catch((error) => {
  //     setErrorState(error.message);
  //   });
  // }, [])

  // useEffect(() => {
  //   fetch(`http://localhost:5000/api/foods?harvestSeason=fall`)
  //   .then(response => {
  //     if(!response.ok){
  //       throw new Error(`${response.status}: ${response.statusText}`);
  //     } else {
  //       return response.json()
  //     }
  //   })
  //   .then((jsonifiedResponse) => {
  //     setFallState(jsonifiedResponse);
  //     setLoadedState(true);
  //   })
  //   .catch((error) => {
  //     setErrorState(error.message);
  //   });
  // }, [])

  // useEffect(() => {
  //   fetch(`http://localhost:5000/api/foods?harvestSeason=winter`)
  //   .then(response => {
  //     if(!response.ok){
  //       throw new Error(`${response.status}: ${response.statusText}`);
  //     } else {
  //       return response.json()
  //     }
  //   })
  //   .then((jsonifiedResponse) => {
  //     setWinterState(jsonifiedResponse);
  //     setLoadedState(true);
  //   })
  //   .catch((error) => {
  //     setErrorState(error.message);
  //   });
  // }, [])

  if(errorState) {
    return <h1>Error: {errorState}</h1>;
  } else if (!loadedState) {
    return <h1>...Loading...</h1>;
  } else {
    return (

      <StyledSeasonalSearch>
        
        <h1>Foods by harvest season</h1>
        <br />

        <h2>Spring</h2>
          <ul>
            {springState.map((food, foodId) =>
            <li key={foodId}>
              <Link to={`/foods/${food.foodId}`}>
              <h3>{food.name}</h3>
              </Link>
            </li>
            )}
          </ul>
          <br />

          <h2>Summer</h2>
          {/* <ul>
            {summerState.map((food, foodId) =>
            <li key={foodId}>
              <Link to={`/foods/${food.foodId}`}>
              <h3>{food.name}</h3>
              </Link>
            </li>
            )}
          </ul> */}
        


        {/* <h2>Summer</h2>
        <h1>{summerState.name}</h1>
        <br />

        <h2>Fall</h2>
        <h1>{fallState.name}</h1>
        <br />

        <h2>Winter</h2>
        <h1>{winterState.name}</h1>
        <br /> */}

        <h4><Link to="/recipes">Check out some recipes with this ingredient!</Link> |
        <a href="https://www.usdalocalfoodportal.com/fe/fdirectory_farmersmarket/?source=fe&directory=farmersmarket&location=&x=&y="> Find a Farmers Market Near You!</a></h4>
      </StyledSeasonalSearch>
    );
  }


}

export default SeasonalSearch;