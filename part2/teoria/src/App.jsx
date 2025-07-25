import Note from './components/Note.jsx';
//Se podria importar tambien como { Note as NoteComponent } desde el archivo components/Note.jsx -> en este caso no es obligatorio usar llaver a menos que se quiera cambiar el nombre
//Si se usa export const etc, se debe importar como { Note } desde el archivo components/Note.jsx usar las llaves es obligatorio

function App({ notes }) {
  return (
    <>
      <h1>React App</h1>
      <h2>Renderizar listas en React</h2>
      <ol>
        {notes.map(note => (<Note key={note.id} {...note} />))}
      </ol>
      <div>
        {
          [
            <p>sebasstian mojica</p>,
            <p>otro nombre</p>
          ]
        }
      </div>
    </>
  );
}

export default App;
