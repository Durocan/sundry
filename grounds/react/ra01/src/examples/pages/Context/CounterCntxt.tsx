import { CountProvider } from "../../cpnts/Context/Counter";
import { CountLabel } from "../../cpnts/Context/Counter/CountLabel";
import { PlusButton } from "../../cpnts/Context/Counter/PlusButton";

export const CounterCntxt = () => {
    return (
      <CountProvider>
        <CountLabel />
        <PlusButton />
      </CountProvider>
    );
  };
  