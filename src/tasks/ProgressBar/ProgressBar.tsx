import { useEffect, useState } from "react";

export const ProgressBar = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (percentage === 100) {
      return;
    }

    const interval = setInterval(() => {
      setPercentage((prevPercentage) => prevPercentage + 10);
    }, 200);

    return () => clearInterval(interval);
  }, [percentage]);

  return (
    <div
      style={{
        width: "200px",
        border: "1px solid black",
        borderRadius: "5px",
        margin: "20px 0",
        height: "20px",
      }}
    >
      <div
        style={{
          height: "100%",
          backgroundColor: "green",
          width: `${percentage}%`,
        }}
      />
    </div>
  );
};
