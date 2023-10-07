import { useState } from "react"

const Titles = (props) => <h1> {props.title} </h1>
    
const Buttons = ({name, handleClick}) => <button onClick={handleClick}> {name} </button>

const Total = (props) => <p>{props.buttonName} {props.value}</p>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0) 

  const handleGoodClick = () => setGood(good + 1)
  
  const handleNeutralClick = () => setNeutral(neutral + 1)
  
  const handleBadClick = () => setBad(bad + 1)
  

  return(
    <div>
      <Titles title='give feedback'/> 
      <Buttons name='good' handleClick={handleGoodClick}/>
      <Buttons name='neutral' handleClick={handleNeutralClick}/>
      <Buttons name='bad' handleClick={handleBadClick}/>
      <Titles title='statistics'/>
      <Total buttonName='good' value={good}/>
      <Total buttonName='neutral' value={neutral}/>
      <Total buttonName='bad' value={bad}/>
    </div>
  )
}

export default App