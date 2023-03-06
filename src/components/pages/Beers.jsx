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
      <form className="my-4 mx-auto">
        <input className="border border-gray" onChange={(e) => setFilter(e.currentTarget.value)} type="text" placeholder="Filter results" />
      </form>
      <ul className="container list-unstyled p-0" style={{ maxWidth: "705px" }}>
        {allBeers.map(beer => (
          <li key={beer._id} className="border border-gray p-3">
            <Link className="row text-decoration-none" to={`/beers/${beer._id}`}>
              <div className="col-1 w-25" style={{ maxHeight: "150px" }}>
                <img src={beer.image_url} alt="beer" className="img-fluid mh-100" />
              </div>
              <div className="col-1 w-75 d-flex flex-column justify-content-center align-items-start text-start">
                <h2 className="text-dark fw-normal">{beer.name}</h2>
                <p className="text-secondary text-opacity-50 mb-0 fw-bold">{beer.tagline}</p>
                <small className="text-dark fw-bold">{beer.contributed_by} </small>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Beers;
