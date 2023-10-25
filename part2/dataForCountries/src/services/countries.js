import axios from "axios";

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";
const detailUrl = "https://studies.cs.helsinki.fi/restcountries/api/name";

const getAll = () => {
  const requiest = axios.get(baseUrl);
  return requiest.then((res) => res.data);
};

const detail = (name) => {
  const requiest = axios.get(`${detailUrl}/${name}`);
  return requiest.then((res) => res.data);
};

export default { getAll, detail };
