

const App = () => {
  
  const now = new Date()
  const a = 45
  const b = 10
  console.log(now.toString(), a+b)
  return (
    <div>
      <h1>Hello World</h1>
      <p>The sum of {a} and {b} is {a+b}</p>
    </div>
  )
}

export default App
