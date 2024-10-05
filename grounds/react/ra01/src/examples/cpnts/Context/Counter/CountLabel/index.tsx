import React, { useContext } from 'react';
import { CountContext } from '..';

export const CountLabel = () => {
  //const { count } = useContext(CountContext);
  //return <div>{count}</div>;

  const uCC = useContext(CountContext);
  return <div>{uCC?.count}</div>;
};
