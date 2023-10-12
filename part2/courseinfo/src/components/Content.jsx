import Part from "./Part";

const Content = ({ part }) => {
    return (  
      <>
        {part.map(part => <Part part={part} key={part.id}/>)}
      </>
    );
  }


  export default Content