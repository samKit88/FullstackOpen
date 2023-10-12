const Total = ({ part }) => {
  return (
    <p>
      <b>
        total of  {" "}
        {part[0].exercises + part[1].exercises + part[2].exercises + part[3].exercises}
        {" "}
        exercises
      </b>
    </p>
  );
};

export default Total;
