const Note = ({id,title,content,date,important}) => {
  return (
    <li key={id} style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px' }}>
      <h3>{title}</h3>
      <p>
        {content}
        {date && <span> ({date})</span>}
        {important && <strong>(¡Importante!)</strong>}
      </p>
    </li>
  );
};

export default Note; //Al importar permite usar el nombre que elija el usuario, por ejemplo: import NoteComponent from './components/Note.jsx'
//Si se usa export const etc, se debe importar como { Note } desde el archivo components/Note.jsx usar las llaves es obligatorio
//Si se usa export default, se puede importar sin llaves y con el nombre que se quiera, por ejemplo: import Note from './components/Note.jsx'