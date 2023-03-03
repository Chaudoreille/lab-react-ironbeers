import React from 'react';
import Beer from '../Beer';
import { useParams } from 'react-router-dom';
const BeerDetails = () => {
  const { id } = useParams();

  console.log(id);
  return (
    <Beer id={id} />
  );
};

export default BeerDetails;;