import React, { useState } from "react";
import newBeerImg from "../../assets/new-beer.png";

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

  const saveField = (event) => updateField(event.currentTarget.name, event.currentTarget.value);

  return (
    <div>
      <img src={newBeerImg} alt="new beer" />
      <form>
        <div>
          <span className="label">Name</span>
          <input onChange={saveField} type="text" name="name" value={fields.name || ""} />
        </div>
        <div>
          <span className="label">Description</span>
          <input onChange={saveField} type="text" name="description" value={fields.description || ""} />
        </div>
        <div>
          <span className="label">Tagline</span>
          <input onChange={saveField} type="text" name="tagline" value={fields.tagline || ""} />
        </div>
        <div>
          <span className="label">First brewed</span>
          <input onChange={saveField} type="date" name="first_brewed" value={fields.first_brewed || ""} />
        </div>
        <div>
          <span className="label">Brewers tips</span>
          <input onChange={saveField} type="text" name="brewers_tips" value={fields.brewers_tips || ""} />
        </div>
        <div>
          <span className="label">Attenuation level</span>
          <input onChange={saveField} type="number" name="attenuation_level" value={fields.attenuation_level || ""} />
        </div>
        <div>
          <span className="label">Contributed by</span>
          <input onChange={saveField} type="text" name="contributed_by" value={fields.contributed_by || ""} />
        </div>
        <button onClick={sendForm}>Create A Beer !</button>
      </form>
      <div id="message">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default CreateBeer;
