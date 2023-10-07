import { useState } from "react";

const Title = ({title}) => <h1>{title}</h1>

      
const Buttons = ({ name, handleClick }) => <button onClick={handleClick}> {name} </button>

const Statistics = ({ good, neutral, bad }) => {
  let sum = good + bad + neutral;

  if (!sum) return <p> No feedback given </p>;

  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>average {(good * 1 + bad * -1) / sum}</p>
      <p>positive {`${(good * 100) / sum} %`}</p>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleGoodClick = () => {
    const updateGood = good + 1;
    setGood(updateGood);
    setTotal(updateGood + neutral + bad);
  };

  const handleNeutralClick = () => {
    const updateNeutral = neutral + 1;
    setNeutral(updateNeutral);
    setTotal(updateNeutral + good + bad);
  };

  const handleBadClick = () => {
    const updateBad = bad + 1;
    setBad(updateBad);
    setTotal(updateBad + good + neutral);
  };

  return (
    <div>
      <Title title='give feedback'/>
      <Buttons name="good" handleClick={handleGoodClick} />
      <Buttons name="neutral" handleClick={handleNeutralClick} />
      <Buttons name="bad" handleClick={handleBadClick} />
      <Title title='statistic'/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
