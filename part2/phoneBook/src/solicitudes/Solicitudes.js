import axios from 'axios';

export const getAllNotes = (url) =>{
  return axios.get(url)
    .then(response => response.data)
    .catch(error => {
      console.error("Error fetching notes:", error);
      throw error;
    });
}