import Content from "./Content";
import Header from "./Header";

const Course = ({ course }) => {
  console.log('course.............' , course.parts)

    return (  
      <>
        <Header name={course.name}/>
        <Content part={course.parts}/>
      </>
    );
  }


  export default Course