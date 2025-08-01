import Services from "../solicitudes/Solicitudes.js";

const Contact = ({ person }) => {

  const eliminateContact = () => {
    if (window.confirm(`Confirma que eliminaras a ${person.name} de tu lista de contactos`)) {
      Services.deleteContact(person.id)
        .then(() => {
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error deleting contact:", error);
          alert("There was an error deleting the contact. Please try again.");
        });
    }
  }

  return (
    <tr>
      <td>
        <strong>{person.name}:</strong>
      </td>
      <td>{person.number}</td>
      <td>
        <button
          style={{
            background: "blue",
            border: "1px solid black",
            color: "white",
            borderRadius: "5px",
          }}
          onClick={eliminateContact}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Contact;
