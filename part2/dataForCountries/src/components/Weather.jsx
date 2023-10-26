const Weather = ({ weather, capital }) => {
  return (
    <div>
      <h1>Weather in {capital}</h1>
      <p>temperature {weather.temp} Celcius</p>
      <img
        src={
          weather.icon
            ? `https://openweathermap.org/img/wn/${weather.icon}.png`
            : null
        }
      />
      <p>wind {weather.wind} m/s</p>
    </div>
  );
};

export default Weather;
