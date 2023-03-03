import React, { useState, useEffect } from 'react';

const Beer = ({ id }) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setData(json);
      })
      .catch(error => console.error(error));
  }, []);

  if (!data) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <img src={data.image_url} alt="beer" />
      <h2>{data.name}</h2>
      <p>{data.attenuation_level}</p>
      <p>{data.tagline}</p>
      <p>{data.first_brewed}</p>
      <p>{data.description}</p>
      <p>{data.contributed_by}</p>
    </div>
  );
};

export default Beer;