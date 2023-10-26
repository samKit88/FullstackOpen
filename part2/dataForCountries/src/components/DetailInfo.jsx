import Weather from "./Weather";

const DetailInfo = ({ detailInfo, weather }) => {
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

      <Weather weather={weather} capital={detail.capital} />
    </div>
  );
};

export default DetailInfo;
