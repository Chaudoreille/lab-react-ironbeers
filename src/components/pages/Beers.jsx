import React, { useState, useEffect } from "react";
import BeersImg from "../../assets/beers.png";
import { Link } from "react-router-dom";

const Beers = () => {
  const [allBeers, setAllBeers] = useState();
  const [filter, setFilter] = useState();

  useEffect(() => {
    const requestUrl = filter ?
      `https://ih-beers-api2.herokuapp.com/beers/search?q=${filter}` :
      'https://ih-beers-api2.herokuapp.com/beers';
    fetch(requestUrl)
      .then(res => res.json())
      .then(json => setAllBeers(json))
      .catch(error => console.error(error));
  }, [filter]);

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
      <img className="img-fluid" src={BeersImg} alt="beers" />
      <form>
        <input onChange={(e) => setFilter(e.currentTarget.value)} type="text" />
      </form>
      <ul className="container list-unstyled">
        {allBeers.map(beer => (
          <li key={beer._id}>
            <Link className="row" to={`/beers/${beer._id}`}>
              <div className="col-1 w-25">
                <img src={beer.image_url} alt="beer" className="img-fluid mh-100" />
              </div>
              <div className="col-1 w-75">
                <h2>{beer.name}</h2>
                <p>{beer.tagline} </p>
                <p>{beer.contributed_by} </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Beers;
