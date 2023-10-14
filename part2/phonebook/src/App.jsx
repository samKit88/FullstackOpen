import { useState } from "react";

//Components
import Header from "./components/Header";
import PersonName from "./components/PersonName";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas" },
    { name: "Ada Lovelace" },
  ]);

  const [newName, setNewName] = useState("");

  const addPhone = (event) => {
    event.preventDefault();

    const found = persons.find((p) => p.name === newName);

    if (!found) {
      const personObject = {
        name: newName,
      };

      setPersons(persons.concat(personObject));
      setNewName("");
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <Header title="Phonebook" />
      <form onSubmit={addPhone}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <Header title="Numbers" />
      <ul>
        {persons.map((person) => (
          <PersonName key={person.name} name={person.name} />
        ))}
      </ul>
    </div>
  );
};

export default App;
