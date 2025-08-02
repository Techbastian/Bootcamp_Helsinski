import { useState } from "react";
import Solicitudes from "../solicitudes/Solicitudes.js";

const AddForm = ({ persons, setPersons, setMessage, setColor }) => {

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
        setColor("green");
        setMessage(`Has realizado el cambio de numero de ${newName.name} a ${newName.number} correctamente`);
        setTimeout(() => {
          setMessage(null);
        }, 3000);
        setNewName({ name: "", number: "" });
      }).catch( error => {
        setColor("red");
        setMessage(`El contacto ${newName.name} ha sido borrado de la base de datos`);
        setTimeout(() => {
          setMessage(null);
          setColor("");
        }, 3000);
        setPersons(persons.filter(person => person.id !== search.id));
        setNewName({ name: "", number: "" });
      })      
      return;
    }

    const personObject = {
      id: (persons.length + 1).toString(),
      name: newName.name,
      number: newName.number,
    };
    Solicitudes.createContact(personObject).then(response => {
      setMessage(`${newName.name} ha sido añadido a tu lista correctamente`);
      setTimeout(() => {
        setMessage(null);
      }, 3000);
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
