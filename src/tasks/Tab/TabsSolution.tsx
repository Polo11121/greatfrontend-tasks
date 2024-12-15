import { useState } from "react";

const TABS = [
  {
    title: "HTML",
    content:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    title: "CSS",
    content:
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
  },
  {
    title: "JavaScript",
    content:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  },
];

export const TabsSolution = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].title);

  const handleClick = (tab: string) => setActiveTab(tab);

  const activeTabContent = TABS.find((tab) => tab.title === activeTab)?.content;

  return (
    <div>
      <div>
        {TABS.map((tab) => (
          <button
            key={tab.title}
            onClick={handleClick.bind(null, tab.title)}
            style={{ color: tab.title === activeTab ? "blue" : "black" }}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div>{activeTabContent}</div>
    </div>
  );
};
