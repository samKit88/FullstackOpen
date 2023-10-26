import axios from "axios";

// variable api_key now has the value set in startup
const api_key = import.meta.env.VITE_SOME_KEY;

const weatherUrl = (lat, lon) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${api_key}`;

const getWeather = (lat, lon) => {
  const url = weatherUrl(lat, lon);
  const requiest = axios.get(url);
  return requiest.then((res) => res.data);
};

export default { getWeather };
