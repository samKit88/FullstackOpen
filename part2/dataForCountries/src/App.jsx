import { useEffect, useState } from "react";

//services
import countrieService from "./services/countries";

const DetailInfo = ({ detailInfo }) => {
  if (!detailInfo.length) return null;
  let detail = detailInfo[0];
  return (
    <div>
      <h1>{detail.name.common}</h1>
      <br />
      <p>capital {detail.capital}</p>
      <p>area {detail.area}</p>
      <br />

      <h3>languages</h3>

      <ul>
        {Object.values(detail.languages).map((lan) => (
          <li key={lan}>{lan}</li>
        ))}
      </ul>
      <br />

      <img src={detail.flags.png} />
    </div>
  );
};

const ListCounries = ({ filterData, detailInfo }) => {
  if (filterData.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }
  return (
    <div>
      {filterData.length === 1 ? null : (
        <ul>
          {filterData.map((c, index) => (
            <li key={index}>{c.name.common}</li>
          ))}
        </ul>
      )}
      <DetailInfo detailInfo={detailInfo} />
    </div>
  );
};

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [allCountrie, setAllCountrie] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [detailInfo, setDetailInfo] = useState([]);

  // fetch all
  useEffect(() => {
    countrieService.getAll().then((res) => {
      setAllCountrie(res);
    }, []);
  }, []);

  useEffect(() => {
    if (filterData.length === 1) {
      countrieService.detail(filterData[0].name.common).then((data) => {
        setDetailInfo(detailInfo.concat(data));
      });
    } else {
      setDetailInfo([]);
    }
  }, [filterData]);

  // handle quire
  const handleInput = (event) => {
    const query = event.target.value;
    setInputValue(query);

    const data = allCountrie.filter((c) => {
      return c.name.common.toLowerCase().includes(query.toLowerCase());
    });
    !query ? setFilterData([]) : setFilterData(data);
  };

  return (
    <div>
      find countries: <input value={inputValue} onChange={handleInput} />
      {allCountrie.length ? (
        <ListCounries filterData={filterData} detailInfo={detailInfo} />
      ) : null}
    </div>
  );
};

export default App;
