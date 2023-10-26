import { useEffect, useState } from "react";

//services
import countrieService from "./services/countries";
import weatherService from "./services/weather";

//Components
import ListCountries from "./components/ListCountries";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [allCountrie, setAllCountrie] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [detailInfo, setDetailInfo] = useState([]);
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  // fetch all
  useEffect(() => {
    countrieService.getAll().then((res) => {
      setAllCountrie(res);
    }, []);
  }, []);

  // fetch detail
  useEffect(() => {
    if (filterData.length === 1) {
      countrieService.detail(filterData[0].name.common).then((data) => {
        setDetailInfo(detailInfo.concat(data));
      });
    } else {
      setDetailInfo([]);
    }
  }, [filterData]);

  //fetch weather
  useEffect(() => {
    if (detailInfo.length === 1) {
      let lat = detailInfo[0].latlng[0];
      let lon = detailInfo[0].latlng[1];

      weatherService.getWeather(lat, lon).then((res) =>
        setWeather({
          temp: res.main.temp,
          wind: res.wind.speed,
          icon: res.weather[0].icon,
        })
      );
    }
  }, [detailInfo]);
  //user Input
  useEffect(() => {
    const data = allCountrie.filter((c) => {
      return c.name.common.toLowerCase().includes(query.toLowerCase());
    });
    !query ? setFilterData([]) : setFilterData(data);
  }, [query]);

  // handle quire
  const handleInput = (event) => {
    const queryInput = event.target.value;
    setInputValue(queryInput);
    setQuery(queryInput);
  };

  const handleFilter = (queryInput) => {
    setQuery(queryInput);
  };

  return (
    <div>
      find countries: <input value={inputValue} onChange={handleInput} />
      {allCountrie.length ? (
        <ListCountries
          filterData={filterData}
          detailInfo={detailInfo}
          handleFilter={handleFilter}
          weather={weather}
        />
      ) : null}
    </div>
  );
};

export default App;
