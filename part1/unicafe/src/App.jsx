import { useState } from "react";

const Title = ({ title }) => <h1>{title}</h1>;

const Button = ({ handleGoodClick, handleNeutralClick, handleBadClick }) => {
  return (
    <div>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>neutral</button>
    </div>
  );
};

const StatisticLine = ({ name, value }) => (
  <tr>
    <td>{name} {value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  let sum = good + bad + neutral;

  if (!sum) return <p> No feedback given </p>;

  return (
    <div>
      <table>
        <StatisticLine name="good" value={good} />
        <StatisticLine name="neutral" value={neutral} />
        <StatisticLine name="bad" value={bad} />
        <StatisticLine name="average" value={(good * 1 + bad * -1) / sum} />
        <StatisticLine name="positive" value={`${(good * 100) / sum} %`} />
      </table>
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
      <Title title="give feedback" />
      <Button
        handleGoodClick={handleGoodClick}
        handleNeutralClick={handleNeutralClick}
        handleBadClick={handleBadClick}
      />
      <Title title="statistic" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
