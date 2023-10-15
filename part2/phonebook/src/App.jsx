import { useState } from "react";

//Components
import Header from "./components/Header";
import PersonName from "./components/PersonName";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const addPhone = (event) => {
    event.preventDefault();

    const found = persons.find((p) => p.name === newName);

    if (!found) {
      const personObject = {
        name: newName,
        number: newPhoneNumber,
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
    setNewPhoneNumber(events.target.value);
  };

  const handleFilter = (event) => {
    setFilterValue(event.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())
  );

  return (
    <div>
      <Header title="Phonebook" />
      <div>
        fiter shown with: <input value={filterValue} onChange={handleFilter} />
      </div>
      <Header title="Add a new" />
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
        {filteredPersons.map((person) => (
          <PersonName
            key={person.name}
            name={person.name}
            phoneNumber={person.number}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
