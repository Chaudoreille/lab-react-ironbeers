import React from 'react';

const Input = ({ changeCallback, name, type, value }) => {
  return (
    <div className='row text-end px-3 my-2 justify-content-center'>
      <span className="col-4 label">{name[0].toUpperCase() + name.slice(1).replace("_", " ").replace("-", " ")}</span>
      <input className="col-6" onChange={changeCallback} type={type || " text"} name={name || "name"} value={value || ""} />
    </div>
  );
};

export default Input;