// Header
const Header = (props) => {
  // console.log(props);
  return (
    <h1>{props.course}</h1>
  );
};

// Content parts 
const Part = (props) => {
  console.log(props.part1, props.exercises1)
  return (
    <>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </>
  );
};

// Content
const Content = (props) => {
  // console.log(props);
  return (
    <>
      <Part part1={props.part1} exercises1={props.exercises1}/>
      <Part part2={props.part2} exercises2={props.exercises2}/>
      <Part part3={props.part3} exercises3={props.exercises3}/>
    </>
  );
};

// Total 
const Total = (props) => {
  // console.log(props)
  return (
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/> 
    </div>
  );
};

export default App;
