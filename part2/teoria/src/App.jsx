import Note from "./components/Note.jsx";
import Formulario from "./components/Formulario.jsx";
import Notes from "./components/Notes.jsx";
import NotesAxios from "./components/NotesAxios.jsx";
import { useState, useEffect} from "react";
import { getAll, createNote } from "./solicitudes/Solicitudes.js";

//Se podria importar tambien como { Note as NoteComponent } desde el archivo components/Note.jsx -> en este caso no es obligatorio usar llaver a menos que se quiera cambiar el nombre
//Si se usa export const etc, se debe importar como { Note } desde el archivo components/Note.jsx usar las llaves es obligatorio

function App() {
  const [notes, setNotes] = useState([]);

  const [loading, setLoading] = useState(false);
  const [body, setBody] = useState({ title: "", content: "" });
  const [filter, setFilter] = useState(false);

  const importants = notes.filter(note => note.important)

  function handleSubmit(event) {
    event.preventDefault();
    
    createNote("http://localhost:3001/notes", {
      id: notes.length + 1,
      ...body
    }).then((data) => {
      console.log("Nota creada:", data);
      //tratar de usar el .concat para agregar el nuevo elemento al array de notas
      // setNotes(prevNotes => prevNotes.concat(data));
      setNotes((prevNotes) => [
        ...prevNotes,
        data
      ]);
      setBody({ title: "", content: "" });
    });
  }

  function handleChange({target}) {
    const {name, value} = target;
    console.log("name:", name, "value:", value);
    setBody((prevBody) => {
      return {
        ...prevBody,
        [name]: value
      }
    })
  }

  const toggleImportance = (id) => {
    console.log("Toggling importance for note with id:", id);
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getAll("http://localhost:3001/notes").then((data) => {
        console.log("Info del servidor:", data);
        setNotes(data);
        setLoading(false);
      });
    }, 1000);
  }, []);

  return (
    <>
      <h1>React App</h1>
      <h2>Renderizar listas en React</h2>
      <button onClick={() => setFilter(!filter)}>{filter ? 'Mostrar todas' : 'Mostrar solo importantes'}</button>
      {loading && <h3>Cargando datos ...</h3>}
      <ol>
        {!filter ? notes.map((note) => (
          <Note key={note.id} {...note} toggleImportance={() => toggleImportance(note.id)} />
        )) : importants.map((note) => (
          <Note key={note.id} {...note} toggleImportance={() => toggleImportance(note.id)} />
        ))}
      </ol>

      <Formulario body={body} onChange={handleChange} createNote={handleSubmit} />
      {/* <div>
        {
          [
            <p>sebasstian mojica</p>,
            <p>otro nombre</p>
          ]
        }
      </div> */}
      <div
        style={{
          backgroundColor: "lightgray",
          padding: "10px",
          border: "2px solid black",
        }}
      >
        <h1>Creando notas con fetch</h1>
        <ol>
          <Notes />
        </ol>
      </div>
      <div
        style={{
          backgroundColor: "lightblue",
          padding: "10px",
          border: "2px solid black",
        }}
      >
        <h1>Notes with Axios</h1>
        <ol>
          <NotesAxios />
        </ol>
      </div>
    </>
  );
}

export default App;
