import { useState } from "react";
import Solicitudes from "../solicitudes/Solicitudes.js";

const AddForm = ({ persons, setPersons }) => {

  const [newName, setNewName] = useState({ name: "", number: "" });

  function addPerson(event) {
    event.preventDefault();
    const search = persons.find(
        (person) =>
          person.name.toLocaleLowerCase().replace(/\s/g, "") ===
          newName.name.toLocaleLowerCase().replace(/\s/g, "")
      )
    if (search && window.confirm(`${newName.name} is already added to phonebook, replace the old number with a new one?`)) {
      const UpdatedPerson = {...search,number: newName.number}
      Solicitudes.updateContact(search.id,UpdatedPerson)
      .then(response => {
        setPersons(persons.map(person => person.id === search.id ? response : person))
        console.log("Contact updated:", response);
        setNewName({ name: "", number: "" });
      }).catch( error => {
        alert("Hay problemas Editando este contacto, intenta de nuevo", error.message)
      })      
      return;
    }

    const personObject = {
      id: (persons.length + 1).toString(),
      name: newName.name,
      number: newName.number,
    };
    Solicitudes.createContact(personObject).then(response => {
      
      setPersons(persons.concat(response));
      console.log(persons)
      setNewName({ name: "", number: "" });
    })
    
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
          value={newName.number}
          name="number"
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
