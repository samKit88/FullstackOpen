import Hello from "./Hello"

const App = () => {
  console.log("Hello from the component")
  const a = 87
  const b = 10
  const now = new Date()
  console.log(now.toString(), a+b)

  return (
    <div>
      <h1>Hello World</h1>
      <p>The sum of {a} and {b} is {a+b}</p>
      <Hello/>
      <Hello/>
      <Hello/>
    </div>
  )
}

export default App
