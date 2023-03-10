import React, { useState } from 'react';


function App() {
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState(' blue ');

  function decrementCount() {
    setCount(poo => poo - 1);
    setTheme(' green ');
  };

  function incrementCount() {
    setCount(poo => poo + 1);
    setTheme(' red ');
  }
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>

  );
}

export default App;
