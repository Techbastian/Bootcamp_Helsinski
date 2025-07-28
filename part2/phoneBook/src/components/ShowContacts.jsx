import React from "react";
import Contact from "./Contact.jsx";

const ShowContacts = ({ persons, resultado }) => {
  return (
    <div>
      {resultado.length <= 0
        ? persons.map((person) => (
            <Contact key={person.name} person={person} />
          ))
        : resultado.map((person) => (
            <Contact key={person.name} person={person} />
          ))}
    </div>
  );
};

export default ShowContacts;
