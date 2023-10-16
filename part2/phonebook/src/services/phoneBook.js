import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

//getAll
const getAll = () => {
  const request = axios.get(baseUrl).then((response) => response.data);
  return request;
};

//create
const create = (newObject) => {
  const request = axios
    .post(baseUrl, newObject)
    .then((response) => response.data);
  return request;
};

//delete
const deletePerson = (id) => {
  const request = axios
    .delete(`${baseUrl}/${id}`)
    .then((response) => response.data);
  return request;
};

export default { getAll, create, deletePerson };
