import { useState } from "react";

const Titles = (props) => <h1> {props.title} </h1>;

const Buttons = ({ name, handleClick }) => (
  <button onClick={handleClick}> {name} </button>
);

const Statistics = (props) => (
  <p>
    {props.name} {props.value}
  </p>
);


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

  let sum = good + bad + neutral;

  return (
    <div>
      <Titles title="give feedback" />
      <Buttons name="good" handleClick={handleGoodClick} />
      <Buttons name="neutral" handleClick={handleNeutralClick} />
      <Buttons name="bad" handleClick={handleBadClick} />
      <Titles title="statistics" />
      <Statistics name="good" value={good} />
      <Statistics name="neutral" value={neutral} />
      <Statistics name="bad" value={bad} />
      <Statistics name="all" value={total} />
      <Statistics name="average" value={(good * 1 + bad * -1) / sum} />
      <Statistics name="positive" value={`${(good * 100) / sum} %`} />
    </div>
  );
};

export default App;
