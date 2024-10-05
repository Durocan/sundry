import React, { useContext } from 'react';
import { CountContext } from '..';

export const PlusButton = () => {
  //const { plusCount } = useContext(CountContext);
  //return <button onClick={plusCount}>+1</button>;

  const uCC = useContext(CountContext);
  return <button onClick={uCC.plusCount}>+1</button>;
};
