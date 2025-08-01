import { useEffect, useState } from "react";
import Search from "./components/Search.jsx";
import AddForm from "./components/AddForm.jsx";
import ShowContacts from "./components/ShowContacts.jsx";
import services from "./solicitudes/Solicitudes.js";

function App() {
  const [persons, setPersons] = useState([]);

  const [resultado, setResultado] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      services.getAllNotes().then((persons) => {
        setPersons(persons);
        setLoading(false);
      });
    }, 1000);
  }, []);

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
        {persons.length === 0 && loading && <h3>Loading...</h3>}
        {persons.length === 0 && !loading && <h3>No contacts available.</h3>}
        {searchTerm && resultado.length === 0 ? (
          <p>No contacts found.</p>
        ) : (
          <table>
            <ShowContacts persons={persons} resultado={resultado} />
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
