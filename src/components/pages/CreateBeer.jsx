import React, { useState, useEffect } from "react";
import newBeerImg from "../../assets/new-beer.png";
import Input from "../Input";

const CreateBeer = () => {
  const [fields, setFields] = useState({});
  const [message, setMessage] = useState([]);

  const updateField = (fieldName, value) => {
    const fieldUpdate = { [fieldName]: value };

    setFields(currentFields => ({ ...currentFields, ...fieldUpdate }));
  };

  const sendForm = (event) => {
    event.preventDefault();

    fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fields)
    })
      .then(res => res.json())
      .then(data => {
        setMessage(data.message);
        setFields({});
      })
      .catch(error => console.error(error));
  };

  useEffect(() => {
    if (message) {
      setTimeout(() => setMessage(), 3000);
    }

  }, [message]);


  const saveField = (event) => updateField(event.currentTarget.name, event.currentTarget.value);

  return (
    <div className="mx-auto" style={{ maxWidth: "705px" }}>
      <img className="img-fluid" src={newBeerImg} alt="new beer" />
      <h1 className="my-4">Create your own Beer !</h1>
      <form className="container">
        <Input
          changeCallback={saveField}
          name="name"
          value={fields.name}
        />
        <Input
          changeCallback={saveField}
          name="description"
          value={fields.description}
        />
        <Input
          changeCallback={saveField}
          name="tagline"
          value={fields.tagline}
        />
        <Input
          changeCallback={saveField}
          type="date"
          name="first_brewed"
          value={fields.first_brewed}
        />
        <Input
          changeCallback={saveField}
          name="brewers_tips"
          value={fields.brewers_tips}
        />
        <Input
          changeCallback={saveField}
          type="number"
          name="attenuation_level"
          value={fields.attenuation_level}
        />
        <Input
          changeCallback={saveField}
          name="contributed_by"
          value={fields.contributed_by}
        />
        <button className="btn btn-primary my-4" onClick={sendForm}>Create A Beer !</button>
      </form>
      <div id="message">
        <p className="badge text-bg-success fs-5 fw-normal">{message}</p>
      </div>
    </div>
  );
};

export default CreateBeer;
