import PersonName from "./PersonName";

const PersonsList = ({ filteredPersons, handleDelete }) => {
  return (
    <ul>
      {filteredPersons.map((person) => (
        <PersonName
          key={person.id}
          person={person}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default PersonsList;
