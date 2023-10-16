import { useState, useEffect } from "react";

//services
import phoneBook from "./services/phoneBook";

//Components
import Header from "./components/Header";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonsList from "./components/PersonsList";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    phoneBook.getAll().then((initialValue) => {
      setPersons(initialValue);
    });
  }, []);

  const addPhone = (event) => {
    event.preventDefault();

    const found = persons.find((p) => p.name === newName);

    if (!found) {
      const personObject = {
        name: newName,
        number: newPhoneNumber,
        id: persons.length + 1,
      };

      phoneBook.create(personObject).then((createdObject) => {
        console.log("created", createdObject);
        setPersons(persons.concat(createdObject));
        setNewName("");
        setNewPhoneNumber("");
      });
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
      <Filter filterValue={filterValue} handleFilter={handleFilter} />
      <Header title="Add a new" />
      <PersonForm
        addPhone={addPhone}
        newName={newName}
        newPhoneNumber={newPhoneNumber}
        handleNameChange={handleNameChange}
        handlePhoneNumber={handlePhoneNumber}
      />
      <Header title="Numbers" />
      <PersonsList filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
