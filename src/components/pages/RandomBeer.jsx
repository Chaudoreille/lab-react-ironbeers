import React, { useState, useEffect } from 'react';
import RandomBeerImg from "../../assets/random-beer.png";
import Beer from "../Beer";

const RandomBeer = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then(res => res.json())
      .then(json => {
        setData(json);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <img className="img-fluid" src={RandomBeerImg} alt="random beer" />
      {data ? <Beer {...data} /> : <div>Loading</div>}
    </div>
  );
};

export default RandomBeer;
