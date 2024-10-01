import React, { useState } from 'react';
import { Button } from '../../cpnts/Button';
import { Label } from '../../cpnts/Label';

export const PropsAndState = () => {
  const [count, setCount] = useState(0);

  const sub = () => {
    setCount(count - 1);
  };

  const add = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Button onClick={sub} label={'-'} />
      <Label data={count} />
      <Button onClick={add} label={'+'} />
    </div>
  );
};
