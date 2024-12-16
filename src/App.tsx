import { Link } from "react-router";
import { TASKS } from "./tasks";

export const App = () => (
  <div>
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {TASKS.map(
        ({ title, question, startingCodePath, solutionPath }, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            {title}:
            <Link to={question} target="_blank" rel="noopener noreferrer">
              Question
            </Link>
            <Link to={startingCodePath}>Starting Code</Link>
            <Link to={solutionPath}>Solution</Link>
          </li>
        )
      )}
    </ul>
  </div>
);
