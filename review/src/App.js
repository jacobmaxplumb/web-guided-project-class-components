import React, { useState } from "react";

const Person = (props)=> {
  console.log(props);
  return(<div>
    <h1>Hello {state.name}. You are {state.age} years old.</h1>
    <p>{state.name} is a fantastic name. Never change it!!</p>
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
      <Person state={state}/>
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
};

export default App;