const Total = ({ part }) => {
  return (
    <p>
      <b>
        total of  {" "}
        {part.reduce((acc,part) => acc + part.exercises, 0)}
        {" "}
        exercises
      </b>
    </p>
  );
};

export default Total;
