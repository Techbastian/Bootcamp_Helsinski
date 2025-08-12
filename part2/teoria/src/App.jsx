import Note from "./components/Note.jsx";
import Formulario from "./components/Formulario.jsx";
//import Notes from "./components/Notes.jsx";
//import NotesAxios from "./components/NotesAxios.jsx";
import { useState, useEffect } from "react";
import { getAll, createNote, upDateAll } from "./solicitudes/Solicitudes.js";
import Notification from "./components/Notification.jsx";
import Footer from "./components/Footer.jsx";

//Se podria importar tambien como { Note as NoteComponent } desde el archivo components/Note.jsx -> en este caso no es obligatorio usar llaver a menos que se quiera cambiar el nombre
//Si se usa export const etc, se debe importar como { Note } desde el archivo components/Note.jsx usar las llaves es obligatorio
const URL_API_NAV = "http://localhost:3001/api/notes";

function App() {
  const [notes, setNotes] = useState([]);

  const [loading, setLoading] = useState(false);
  const [body, setBody] = useState({ title: "", content: "" });
  const [filter, setFilter] = useState(false);
  const [message, setMessage] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    createNote(URL_API_NAV, {
      id: (notes.length + 1).toString(),
      ...body,
    })
      .then((data) => {
        console.log("Nota creada:", data);
        //tratar de usar el .concat para agregar el nuevo elemento al array de notas
        // setNotes(prevNotes => prevNotes.concat(data));
        setNotes((prevNotes) => [...prevNotes, data]);
        setBody({ title: "", content: "" });
      })
      .catch((error) => {
        setMessage(`Note no podemos crear la nota: ${error.message}`);
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      });
  }

  function handleChange({ target }) {
    const { name, value } = target;
    console.log("name:", name, "value:", value);
    setBody((prevBody) => {
      return {
        ...prevBody,
        [name]: value,
      };
    });
  }

  const toggleImportance = (id) => {
    console.log(`Vamos a cambiar la importancia de la nota ${id}`);
    const editedNote = notes.find((note) => note.id === id);
    const content = { ...editedNote, important: !editedNote.important };
    upDateAll(URL_API_NAV, id, content)
      .then((response) => {
        setNotes(notes.map((note) => (note.id !== id ? note : response)));
        //MAP RETORNA UN NUEVO ARRAY, EN ESTE CASO SI SE CUMPLE LA CONDICION, LOS DATOS DE ESTE NUEVO ARRAY SERAN IGUALES AL ANTERIOR, SINO SE HACE EL CAMBIO. DE ESTA FORMA NO SE MODIFICA DIRECTAMENTE EL ESTADO DE LA VARIABLE.
      })
      .catch((error) => {
        setMessage(`Note '${content}' was already removed from server`);
        setTimeout(() => {
          setMessage(null);
        }, 3000);
        setNotes((note) => note.id !== id);
      });
  };

  useEffect(() => {
    setLoading(true);
    getAll(URL_API_NAV).then((data) => {
      console.log("Info del servidor:", data);
      setNotes(data);
      setLoading(false);
    });
  }, []);

  const notesToShow = !filter ? notes : notes.filter((note) => note.important);

  return (
    <>
      <h1>React App</h1>
      <Notification message={message} />
      <h2>Crear nueva nota</h2>
      <Formulario
        body={body}
        onChange={handleChange}
        createNote={handleSubmit}
      />
      <h2>Renderizar listas en React</h2>
      <button onClick={() => setFilter(!filter)}>
        {filter ? "Mostrar todas" : "Mostrar solo importantes"}
      </button>
      {loading && <h3>Cargando datos ...</h3>}
      <ol>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            {...note}
            toggleImportance={() => toggleImportance(note.id)}
          />
        ))}
      </ol>
      {/* <div>
        {
          [
            <p>sebasstian mojica</p>,
            <p>otro nombre</p>
          ]
        }
      </div> */}
      {/* <div
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
      </div> */}
      <Footer />
    </>
  );
}

export default App;
