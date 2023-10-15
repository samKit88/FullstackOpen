const PersonForm = ({
  addPhone,
  newName,
  newPhoneNumber,
  handleNameChange,
  handlePhoneNumber,
}) => {
  return (
    <form onSubmit={addPhone}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newPhoneNumber} onChange={handlePhoneNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
