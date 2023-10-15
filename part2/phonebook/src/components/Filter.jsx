const Filter = ({ filterValue, handleFilter }) => {
  return (
    <div>
      fiter shown with: <input value={filterValue} onChange={handleFilter} />
    </div>
  );
};

export default Filter;
