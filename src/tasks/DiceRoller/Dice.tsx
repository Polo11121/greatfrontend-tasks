import "./style.css";

export const Dice = ({ dots }: { dots: number }) => (
  <div className="dice">
    {Array.from({ length: dots }).map((_, index) => (
      <div key={index} className={`dot dot-${dots}`}></div>
    ))}
  </div>
);
