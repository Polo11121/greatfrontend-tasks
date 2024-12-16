import { ChangeEvent, useState } from "react";
import { Dice } from "./Dice";

export const DiceRollerSolution = () => {
  const [numberOfDices, setNumberOfDices] = useState(1);
  const [dices, setDices] = useState<number[]>([]);

  const handleClick = () =>
    setDices(
      Array.from(
        { length: numberOfDices },
        () => Math.floor(Math.random() * 6) + 1
      )
    );
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNumberOfDices(+e.target.value);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <div>
        <input
          type="number"
          value={numberOfDices}
          onChange={handleChange}
          min={1}
        />
        <button onClick={handleClick}>Roll</button>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          width: "500px",
          flexWrap: "wrap",
        }}
      >
        {dices.map((dots, index) => (
          <Dice dots={dots} key={index} />
        ))}
      </div>
    </div>
  );
};
