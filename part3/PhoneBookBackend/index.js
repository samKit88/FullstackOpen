require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const PhoneBook = require('./models/phoneBook')

const app = express()

app.use(express.static('build'))
app.use(cors())
app.use(express.json())

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}

morgan.token('body', (req) => JSON.stringify(req.body))
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :body')
)

//persons route
app.get('/api/persons', (req, res) => {
  // res.json(persons);
  PhoneBook.find({}).then((person) => res.json(person))
})

//info route
app.get('/info', (req, res) => {
  PhoneBook.find({}).then((person) => {
    let response = `<p>Phonebook has info for ${person.length} people</p>
      <p>${new Date()}</p>`
    res.send(response)
  })
})

//get single person
app.get('/api/persons/:id', (req, res, next) => {
  PhoneBook.findById(req.params.id)
    .then((person) => {
      if (person) {
        res.json(person)
      } else {
        res.status(404).end()
      }
    })
    .catch((error) => next(error))
})

//delete
app.delete('/api/persons/:id', (req, res, next) => {
  PhoneBook.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(204).end()
    })
    .catch((error) => next(error))
})

//create
app.post('/api/persons', (req, res, next) => {
  const body = req.body

  const person = new PhoneBook({
    name: body.name,
    number: body.number,
  })

  person
    .save()
    .then((savePerson) => res.json(savePerson))
    .catch((error) => next(error))
})

//update
app.put('/api/persons/:id', (req, res, next) => {
  const body = req.body

  const person = {
    name: body.name,
    number: body.number,
  }

  PhoneBook.findByIdAndUpdate(req.params.id, person, { new: true })
    .then((updatedNote) => res.json(updatedNote))
    .catch((error) => next(error))
})

app.use(unknownEndpoint)

const errorHandler = (error, req, res, next) => {
  console.error(error)

  if (error.name === 'CastError') {
    res.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message })
  }

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log(`Server is runing on port ${PORT}`)
