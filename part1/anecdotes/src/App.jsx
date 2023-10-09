import { useState } from "react";

const Quote = ({ quote, vote }) => {
  return (
    <>
      <p> {quote} </p>
      <p>has {vote} {vote > 1 ? "votes" : "vote"}</p>
    </>
  );
};

const Button = ({ handleClick, text }) => <button onClick={handleClick}> {text} </button>
  


const AnecdotesQuote = ({ quote, vote, handleQuote, handleVote }) => {
  return (
    <>
      <Quote quote={quote} vote={vote}/>
      <Button handleClick={handleVote} text="vote" />
      <Button handleClick={handleQuote} text="next anecdotes" />
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const random = () => Math.floor(Math.random() * anecdotes.length);

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0));

  const handleQuote = () => setSelected(random());

  const handleVote = () => {
    setVote(
      vote.map((ele, ind) => {
        return ind === selected ? ele + 1 : ele;
      })
    );
  };

  return (
    <div>
      <AnecdotesQuote quote={anecdotes[selected]} vote={vote[selected]} handleQuote={handleQuote} handleVote={handleVote}/>
    </div>
  );
};

export default App;
