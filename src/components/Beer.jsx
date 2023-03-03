import React from 'react';

const Beer = ({ image_url, name, attenuation_level, tagline, first_brewed, description, contributed_by }) => {
  return (
    <div>
      <img src={image_url} alt="beer" />
      <h2>{name}</h2>
      <p>{attenuation_level}</p>
      <p>{tagline}</p>
      <p>{first_brewed}</p>
      <p>{description}</p>
      <p>{contributed_by}</p>
    </div>
  );
};

export default Beer;