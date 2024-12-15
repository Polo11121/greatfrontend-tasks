import { useState } from "react";
import "./styles.css";

// Build an Accordion component that displays a list of vertically stacked sections that each contain a title and content snippet. Some HTML is provided for you as example contents along with a chevron icon.

// Requirements
// By default, all sections are collapsed and are hidden from view.
// Clicking on a section title toggles the contents.
// If the section is collapsed, the section will be expanded and the contents will be displayed.
// If the section is expanded, the section will be collapsed and the contents will be hidden.
// The sections are independent of each other.
// Example
// Try out an example of an accordion component.

// Notes
// The focus of this question is on functionality, not the styling. Do not spend too much time writing custom CSS.
// You may modify the markup (e.g. adding ids, data attributes, replacing some tags, etc) and use client-side rendering instead.
// You may want to think about ways to improve the user experience of the application and implement them (you get bonus credit for doing that during interviews).

export default function AccordionStartingCode() {
  const [accordions, setAccordions] = useState({
    HTML: true,
    CSS: true,
    JavaScript: true,
  });

  const toggleAccordion = (index: keyof typeof accordions) =>
    setAccordions((prevAccordions) => ({
      ...prevAccordions,
      [index]: !prevAccordions[index],
    }));

  return (
    <div>
      <div>
        <div onClick={toggleAccordion.bind(null, "HTML")}>
          HTML{" "}
          <span
            aria-hidden={true}
            className={
              accordions["HTML"]
                ? "accordion-icon"
                : "accordion-icon accordion-icon--rotated"
            }
          />
        </div>
        {accordions["HTML"] && (
          <div>
            The HyperText Markup Language or HTML is the standard markup
            language for documents designed to be displayed in a web browser.
          </div>
        )}
      </div>
      <div onClick={toggleAccordion.bind(null, "CSS")}>
        <div>
          CSS{" "}
          <span
            aria-hidden={true}
            className={
              accordions["CSS"]
                ? "accordion-icon"
                : "accordion-icon accordion-icon--rotated"
            }
          />
        </div>
        {accordions["CSS"] && (
          <div>
            Cascading Style Sheets is a style sheet language used for describing
            the presentation of a document written in a markup language such as
            HTML or XML.
          </div>
        )}
      </div>
      <div onClick={toggleAccordion.bind(null, "JavaScript")}>
        <div>
          JavaScript{" "}
          <span
            aria-hidden={true}
            className={
              accordions["JavaScript"]
                ? "accordion-icon"
                : "accordion-icon accordion-icon--rotated"
            }
          />
        </div>
        {accordions["JavaScript"] && (
          <div>
            JavaScript, often abbreviated as JS, is a programming language that
            is one of the core technologies of the World Wide Web, alongside
            HTML and CSS.
          </div>
        )}
      </div>
    </div>
  );
}
