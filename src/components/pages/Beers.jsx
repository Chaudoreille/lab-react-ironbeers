import React, { useState, useEffect } from "react";
import BeersImg from "../../assets/beers.png";
import { Link } from "react-router-dom";

const Beers = () => {
  const [allBeers, setAllBeers] = useState();

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then(res => res.json())
      .then(json => setAllBeers(json))
      .catch(error => console.error(error));
  }, []);

  if (!allBeers) {
    return (
      <div>
        <img src={BeersImg} alt="beers" />
        <p>Loading</p>
      </div>
    );
  }
  return (
    <div>
      <img src={BeersImg} alt="beers" />
      <ul>
        {allBeers.map(beer => (
          <li key={beer._id}>
            <Link to={`/beers/${beer._id}`}>
              <img src={beer.image_url} alt="beer" />
              <h2>{beer.name}</h2>
              <p>{beer.tagline} </p>
              <p>{beer.contributed_by} </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Beers;
