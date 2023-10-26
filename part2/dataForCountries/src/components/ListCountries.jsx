import DetailInfo from "./DetailInfo";

const ListCountries = ({ filterData, detailInfo, handleFilter, weather }) => {
  if (filterData.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }
  return (
    <div>
      {filterData.length === 1 ? null : (
        <ul>
          {filterData.map((c, index) => (
            <li key={index}>
              {c.name.common}{" "}
              <button onClick={() => handleFilter(c.name.common)}>show</button>
            </li>
          ))}
        </ul>
      )}
      <DetailInfo detailInfo={detailInfo} weather={weather} />
    </div>
  );
};

export default ListCountries;
