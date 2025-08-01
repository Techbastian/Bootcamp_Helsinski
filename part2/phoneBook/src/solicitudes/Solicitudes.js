import axios from "axios";

const URL_NAVIGATE = "http://localhost:3001/persons";

const getAllNotes = () => {
  return axios
    .get(URL_NAVIGATE)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching notes:", error);
      throw error;
    });
};

const createContact = (info) => {
  const peticion = fetch(URL_NAVIGATE, {
    method: "POST",
    body: JSON.stringify(info),
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });

  return peticion.then((response) => response.json());
};

const deleteContact = (id) => {
  return axios.delete(`${URL_NAVIGATE}/${id}`)
  .then(response => response.data)
  .catch(error => {
    console.error("Error deleting contact:", error);
    throw error;
  });
}

const updateContact = (id, info) => {
  return axios.put(`${URL_NAVIGATE}/${id}`, info)
    .then(response => response.data)
    .catch(error => {
      console.error("Error updating contact:", error);
      throw error;
    });
}

export default { 
  getAllNotes, 
  createContact,
  deleteContact,
  updateContact
};
