
const Formulario = ({body, onChange, createNote }) => {
  return (
    <form onSubmit={createNote}>
      <label htmlFor="title">Title: </label>
      <input
        type="text"
        name="title"
        value={body.title}
        onChange={onChange}
      />
      <br />
      <label htmlFor="content">Add a new note: </label>
      <input
        type="text"
        name="content"
        value={body.content}
        onChange={onChange}
      />
      <br />
      <button type="submit">save</button>
    </form>
  );
};

export default Formulario;
