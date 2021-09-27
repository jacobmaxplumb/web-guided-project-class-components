import React, { useState } from "react";

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
      <h1>Hello {state.name}. You are {state.age} years old.</h1>
      <p>{state.name} is a fantastic name. Never change it!!</p>
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
};

export default App;