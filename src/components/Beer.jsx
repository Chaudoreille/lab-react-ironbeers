import React from 'react';

const Beer = ({ image_url, name, attenuation_level, tagline, first_brewed, description, contributed_by }) => {
  return (
    <div className='d-flex flex-column p-4 text-start'>
      <div className='text-center d-flex flex-justify-center' style={{ maxHeight: "50vh" }}>
        <img className='w-auto mx-auto mh-100' style={{ objectFit: "contain" }} src={image_url} alt="beer" />
      </div>
      <div className='d-flex justify-content-between mt-3'>
        <h2 className='fw-normal m-0'>{name}</h2>
        <p className='text-secondary text-opacity-25 fs-2 m-0'>{attenuation_level}</p>
      </div>
      <div className='d-flex justify-content-between'>
        <p className='text-secondary text-opacity-75 fs-5 fw-bold'>{tagline}</p>
        <small className='fw-bold'>{first_brewed}</small>
      </div>
      <p className=''>{description}</p>
      <small className='text-secondary text-opacity-50 fw-bold'>{contributed_by}</small>
    </div >
  );
};

export default Beer;