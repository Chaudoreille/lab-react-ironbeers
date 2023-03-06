import React from 'react';
import { Link } from "react-router-dom";

const HomeLink = ({ link, image, title, text }) => {
  return (
    <Link className="card text-decoration-none text-start" to={link}>
      <img className="card-img-top" src={image} alt="beers" />
      <h3 className="card-title px-3 pt-3 text-black fw-normal">{title}</h3>
      <p className="card-text px-3 pb-3 text-secondary text-opacity-50">
        {text}
      </p>
    </Link>
  );
};

export default HomeLink;