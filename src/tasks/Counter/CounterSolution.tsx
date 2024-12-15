import { useState } from "react";

export const CounterSolution = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount((prevCount) => prevCount + 1);

  return (
    <div>
      <button onClick={handleClick}>Clicks: {count}</button>
    </div>
  );
};
