import React from "react";
import Contact from "./Contact.jsx";

const ShowContacts = ({ persons, resultado }) => {
  return (
    <tbody>
      {resultado.length <= 0
        ? persons.map((person) => (
            <Contact key={person.name} person={person}/>
          ))
        : resultado.map((person) => (
            <Contact key={person.name} person={person}/>
          ))}
    </tbody>
  );
};

export default ShowContacts;
