
const Hello = (props) => {
  console.log(props)  
  return (
    <div>Hello {props.name} your age is {props.age}</div>
  )
}

const App = () => {

  const now = new Date()
  const a = 45
  const b = 10
  const name = "Tina"
  const age = "17"
  console.log(now.toString(), a+b)
  return (
    <div>
      <h1>Hello World</h1>
      <p>The sum of {a} and {b} is {a+b}</p>
      <Hello name={name} age={age}/>
 
    </div>
  )
}

export default App
