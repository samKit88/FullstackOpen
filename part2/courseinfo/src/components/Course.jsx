import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const Course = ({ course }) => {
    return (  
      <>
        <Header name={course.name}/>
        <Content part={course.parts}/>
        <Total part={course.parts}/>
      </>
    );
  }


  export default Course