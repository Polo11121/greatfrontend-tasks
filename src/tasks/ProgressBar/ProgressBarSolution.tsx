import { useState } from "react";
import { ProgressBar } from "./ProgressBar";

export const ProgressBarSolution = () => {
  const [progressBarsCount, setProgressBarsCount] = useState(0);

  const handleClick = () => setProgressBarsCount((prevCount) => prevCount + 1);

  return (
    <div>
      <button onClick={handleClick}>Add</button>
      {Array.from({ length: progressBarsCount }).map((_, index) => (
        <ProgressBar key={index} />
      ))}
    </div>
  );
};
