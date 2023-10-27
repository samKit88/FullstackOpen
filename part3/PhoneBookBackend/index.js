const express = require("express");

const app = express();

app.use(express.json());

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

const generateId = () => {
  const maxId = persons.length > 0 ? Math.max(...persons.map((n) => n.id)) : 0;
  return maxId + 1;
};

//persons route
app.get("/api/persons", (req, res) => {
  res.json(persons);
});

//info route
app.get("/info", (req, res) => {
  res.send(
    `<p>Phone book has info for ${
      persons.length
    } people</p> <p>${new Date()}</p>`
  );
});

//get single person
app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);

  const person = persons.find((p) => p.id === id);

  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

//delete
app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);

  persons = persons.filter((p) => p.id !== id);

  res.status(204).end();
});

//create
app.post("/api/persons", (req, res) => {
  const body = req.body;

  if (!body.name || !body.number) {
    return res.status(400).json({
      error: "content-missing",
    });
  }

  const name = persons.find((p) => p.name === body.name);

  if (name) {
    return res.status(409).json({
      error: "name must be unique",
    });
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  };

  persons = persons.concat(person);

  res.json(person);
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server is runing on port ${PORT}`);
