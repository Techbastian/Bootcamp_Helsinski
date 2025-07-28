import { useState } from "react";
import Search from "./components/Search.jsx";
import AddForm from "./components/AddForm.jsx";
import ShowContacts from "./components/ShowContacts.jsx";

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040-123456", id: 1 },
    { name: "Ada Lovelace", phone: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", phone: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", phone: "39-23-6423122", id: 4 },
  ]);

  const [resultado, setResultado] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <h1>Phonebook</h1>
      <Search
        persons={persons}
        setResultado={setResultado}
        setSearchTerm={setSearchTerm}
      />
      <br />
      <br />
      <h2>Add new contact</h2>
      <AddForm persons={persons} setPersons={setPersons} />
      <h2>Contacts list</h2>
      <div>
        {searchTerm && (
          <p>
            Search results for: <strong>{searchTerm}</strong>
          </p>
        )}
        {searchTerm && resultado.length === 0 ? (
          <p>No contacts found.</p>
        ) : (
          <ShowContacts persons={persons} resultado={resultado} />
        )}
      </div>
    </div>
  );
}

export default App;
