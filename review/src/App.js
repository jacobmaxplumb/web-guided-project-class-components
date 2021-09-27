import React, { useState } from "react";

const App = () => {
  const [state, setState] = useState({
    name: "Warren",
    age: 33
  });

  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
};

export default App;