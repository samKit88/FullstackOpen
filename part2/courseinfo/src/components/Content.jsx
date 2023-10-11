import Part from "./Part";

const Content = ({ part }) => {
  console.log('part.............' , part)
    return (  
      <>
        {part.map(part => <Part part={part} key={part.id}/>)}
      </>
    );
  }


  export default Content