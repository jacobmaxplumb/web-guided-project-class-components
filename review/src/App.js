import React, { useState } from "react";

const App = () => {
  const [state, setState] = useState({
    name: "Warren",
    age: 33
  });

  return (
    <div>
      <h1>Hello {state.name}. You are {state.age} years old.</h1>
    </div>
  );
};

export default App;