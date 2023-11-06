const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please give a password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://samuelgirmacx9896:${password}@cluster0.9mvr5ic.mongodb.net/phoneBookApp?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const phoneBookSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const PhoneBook = mongoose.model('PhoneBook', phoneBookSchema)

if (process.argv[3] === undefined) {
  PhoneBook.find({}).then((result) => {
    console.log('phonebook:')
    result.forEach((phoneNumber) => {
      console.log(phoneNumber.name, phoneNumber.number)
    })
    mongoose.connection.close()
  })
} else if (process.argv.length === 5) {
  const name = process.argv[3]
  const number = process.argv[4]

  const phoneBook = new PhoneBook({
    name: name,
    number: number,
  })

  phoneBook.save().then(() => {
    console.log(
      `added ${phoneBook.name} number ${phoneBook.number} to phonebook`
    )
    mongoose.connection.close()
  })
} else {
  console.log('Your arguments should be 3 or 5')
  mongoose.connection.close()
  process.exit(1)
}
