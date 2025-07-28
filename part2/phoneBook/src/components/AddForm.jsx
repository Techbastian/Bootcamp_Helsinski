import React from "react";
import { useState } from "react";

const AddForm = ({ persons, setPersons }) => {

  const [newName, setNewName] = useState({ name: "", phone: "" });

  function addPerson(event) {
    event.preventDefault();

    if (
      persons.find(
        (person) =>
          person.name.toLocaleLowerCase().replace(/\s/g, "") ===
          newName.name.toLocaleLowerCase().replace(/\s/g, "")
      )
    ) {
      alert(`${newName.name} is already added to phonebook`);
      setNewName({ name: "", phone: "" });
      return;
    }

    const personObject = {
      id: persons.length + 1,
      name: newName.name,
      phone: newName.phone,
    };
    setPersons(persons.concat(personObject));
    setNewName({ name: "", phone: "" });
  }

  function handleChange(event) {
    console.log(event.target.name, event.target.value);
    setNewName({
      ...newName,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <form onSubmit={addPerson}>
      <fieldset>
        <strong>Name:</strong>{" "}
        <input value={newName.name} name="name" onChange={handleChange} />
        <br />
        <br />
        <strong>Number:</strong>{" "}
        <input
          type="number"
          value={newName.phone}
          name="phone"
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Add new contact</button>
      </fieldset>
    </form>
  );
};

export default AddForm;
