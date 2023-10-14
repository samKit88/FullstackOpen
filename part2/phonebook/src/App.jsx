import { useState } from "react";

//Components
import Header from "./components/Header";
import PersonName from "./components/PersonName";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phoneNumber: +251911000000 },
  ]);

  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");

  const addPhone = (event) => {
    event.preventDefault();

    const found = persons.find((p) => p.name === newName);

    if (!found) {
      const personObject = {
        name: newName,
        phoneNumber: newPhoneNumber,
      };

      setPersons(persons.concat(personObject));
      setNewName("");
      setNewPhoneNumber("");
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneNumber = (events) => {
    console.log("number", events.target.value);
    setNewPhoneNumber(events.target.value);
  };

  return (
    <div>
      <Header title="Phonebook" />
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

      <Header title="Numbers" />
      <ul>
        {persons.map((person) => (
          <PersonName
            key={person.name}
            name={person.name}
            phoneNumber={person.phoneNumber}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
