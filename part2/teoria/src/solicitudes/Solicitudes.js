import axios from "axios";

export const getAll = (url) => {
  return axios.get(url).then((response) => {
    return response.data;
  }).catch((error) => {
    console.error("Error fetching notes:", error);
    throw error;
  });

};

export const createNote = (url, note) => {
    return axios.post(url, {
        userId:1,
        ...note
    }).then((response) => {
        //console.log("Created note:", response);
        return response.data;
    }).catch((error) => {
        console.error("Error creating note:", error);
        throw error;
    });
}

export const upDateAll = (url,id,note) => {
  return axios.put(`${url}/${id}`, note)
  .then((response) => {
    console.log("New data:", response.data);
    return response.data;
  }).catch((error) => {
    console.log("Error updating information:", error);
    throw error;
  })
}

export const upDatePart = (url,id,part) => {
  return axios.patch(`${url}/${id}`, part)
  .then((response) => {
    console.log("New data:", response.data);
    return response.data;
  }).catch((error) => {
    console.log("Error updating information:", error);
    throw error;
  })
}