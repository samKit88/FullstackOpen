import { useState, useEffect } from "react";

//services
import phoneBook from "./services/phoneBook";

//Components
import Header from "./components/Header";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonsList from "./components/PersonsList";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("");

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
      };

      phoneBook
        .create(personObject)
        .then((createdObject) => {
          setPersons(persons.concat(createdObject));
          setNewName("");
          setNewPhoneNumber("");
          setMessage(`Added ${personObject.name}`);
          setTimeout(() => {
            setMessage(null);
          }, 5000);
          setMessageType("success");
        })
        .catch((error) => {
          setMessage(error.response.data.error);
          setTimeout(() => {
            setMessage(null);
          }, 5000);
          setMessageType("error");
        });
    } else {
      // alert(`${newName} is already added to phonebook`);
      if (
        window.confirm(
          `${found.name} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const newPerson = {
          ...found,
          number: newPhoneNumber,
        };
        phoneBook
          .updatePerson(found.id, newPerson)
          .then((res) => {
            setPersons(persons.map((p) => (p.id !== found.id ? p : res)));
            setNewName("");
            setNewPhoneNumber("");
            setMessage(`Phone number is chenged for ${newPerson.name}`);
            setTimeout(() => {
              setMessage(null);
            }, 5000);
            setMessageType("success");
          })
          .catch((err) => {
            setMessage(`page Not found for ${newPerson.name}`);
            setTimeout(() => {
              setMessage(null);
            }, 5000);
            setPersons(persons.filter((p) => p.id !== newPerson.id));
            setMessageType("error");
          });
      }
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

  const handleDelete = (id) => {
    const findPerson = persons.find((p) => p.id === id);

    if (window.confirm(`Delete ${findPerson.name}?`)) {
      phoneBook.deletePerson(id).then(() => {
        setPersons(persons.filter((p) => p.id !== id));
      });
    }
  };

  return (
    <div>
      <Header title="Phonebook" />
      <Notification message={message} type={messageType} />
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
      <PersonsList
        filteredPersons={filteredPersons}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
