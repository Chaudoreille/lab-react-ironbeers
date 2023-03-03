import React, { useState, useEffect } from 'react';
import Beer from '../Beer';
import { useParams } from 'react-router-dom';

const BeerDetails = () => {
  const { id } = useParams();
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
  console.log(data);
  return (
    <Beer {...data} />
  );
};

export default BeerDetails;;