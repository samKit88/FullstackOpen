import PersonName from "./PersonName";

const PersonsList = ({ filteredPersons }) => {
  return (
    <ul>
      {filteredPersons.map((person) => (
        <PersonName
          key={person.name}
          name={person.name}
          phoneNumber={person.number}
        />
      ))}
    </ul>
  );
};

export default PersonsList;
