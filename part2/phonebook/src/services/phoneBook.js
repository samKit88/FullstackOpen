import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

//getAll
const getAll = () => {
  const response = axios.get(baseUrl).then((response) => response.data);
  return response;
};

//create
const create = (newObject) => {
  const response = axios
    .post(baseUrl, newObject)
    .then((response) => response.data);
  return response;
};

export default { getAll, create };
