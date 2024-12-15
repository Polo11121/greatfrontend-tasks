import { Link } from "react-router";

export const App = () => {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <li
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          Counter:
          <Link
            to="https://www.greatfrontend.com/questions/user-interface/counter/react?framework=react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Question
          </Link>
          <Link to="counter-starting-code">Starting Code</Link>
          <Link to="counter-solution">Solution</Link>
        </li>
        <li
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          Accordion:
          <Link
            to="https://www.greatfrontend.com/questions/user-interface/accordion/react?framework=react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Question
          </Link>
          <Link to="accordion-starting-code">Starting Code</Link>
          <Link to="accordion-solution">Solution</Link>
        </li>
        <li
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          Contact Form:
          <Link
            to="https://www.greatfrontend.com/questions/user-interface/contact-form/react?framework=react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Question
          </Link>
          <Link to="contact-form-starting-code">Starting Code</Link>
          <Link to="contact-form-solution">Solution</Link>
        </li>
        <li
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          Holy Grail:
          <Link
            to="https://www.greatfrontend.com/questions/user-interface/holy-grail/react?framework=react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Question
          </Link>
          <Link to="holy-grail-starting-code">Starting Code</Link>
          <Link to="holy-grail-solution">Solution</Link>
        </li>
        <li
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          Progress Bar:
          <Link
            to="https://www.greatfrontend.com/questions/user-interface/progress-bars/react?framework=react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Question
          </Link>
          <Link to="progress-bar-starting-code">Starting Code</Link>
          <Link to="progress-bar-solution">Solution</Link>
        </li>
        <li
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          Tabs:
          <Link
            to="https://www.greatfrontend.com/questions/user-interface/tabs/react?framework=react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Question
          </Link>
          <Link to="tabs-starting-code">Starting Code</Link>
          <Link to="tabs-solution">Solution</Link>
        </li>
      </ul>
    </div>
  );
};
