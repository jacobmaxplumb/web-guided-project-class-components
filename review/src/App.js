import React, { useState } from "react";

const Person = (props)=> {
  return(<div>
    <h1>Hello {props.name}. You are {props.age} years old.</h1>
    <p>{props.name} is a fantastic name. Never change it!!</p>
  </div>);
}

const App = () => {
  const [state, setState] = useState({
    name: "Warren",
    age: 33
  });

  const handleClick = ()=> {
    setState({
      ...state,
      name: "Allison",
      age: 12
    });
  }

  return (
    <div>
      <Person name={state.name} age={state.age}/>
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
};

export default App;