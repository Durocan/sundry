import React, { useState } from 'react';

export const StateComponent2 = () => {
  const [count, setCount] = useState(0);

  const sub = () => {
    setCount(count - 1);
  };

  const add = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={add}>+</button>
      <p>{count}</p>
      <button onClick={sub}>-</button>
    </div>
  );
};
