import { useState } from "react";

const AddForm = ({ persons, setPersons }) => {

  const [newName, setNewName] = useState({ name: "", number: "" });

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
      setNewName({ name: "", number: "" });
      return;
    }

    const personObject = {
      id: persons.length + 1,
      name: newName.name,
      number: newName.number,
    };
    setPersons(persons.concat(personObject));
    setNewName({ name: "", number: "" });
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
