import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { App } from "./App";
import { CounterSolution } from "./tasks/Counter/CounterSolution";
import CounterStartingCode from "./tasks/Counter/CounterStartingCode";
import AccordionSolution from "./tasks/Accordion/AccordionSolution";
import AccordionStartingCode from "./tasks/Accordion/AccordionStartingCode";
import ContactFormStartingCode from "./tasks/ContactForm/ContactFormStartingCode";
import { ContactFormSolution } from "./tasks/ContactForm/ContactFormSolution";
import { HolyGrailSolution } from "./tasks/HolyGrail/HolyGrailSolution";
import HolyGrailStartingCode from "./tasks/HolyGrail/HolyGrailStartingCode";
import { ProgressBarSolution } from "./tasks/ProgressBar/ProgressBarSolution";
import ProgressBarStartingCode from "./tasks/ProgressBar/ProgressBarStartingCode";
import { TabsSolution } from "./tasks/Tab/TabsSolution";
import TabsStartingCode from "./tasks/Tab/TabsStartingCode";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="counter-solution" element={<CounterSolution />} />
        <Route path="counter-starting-code" element={<CounterStartingCode />} />
        <Route path="accordion-solution" element={<AccordionSolution />} />
        <Route
          path="accordion-starting-code"
          element={<AccordionStartingCode />}
        />
        <Route path="contact-form-solution" element={<ContactFormSolution />} />
        <Route
          path="contact-form-starting-code"
          element={<ContactFormStartingCode />}
        />
        <Route path="holy-grail-solution" element={<HolyGrailSolution />} />
        <Route
          path="holy-grail-starting-code"
          element={<HolyGrailStartingCode />}
        />
        <Route path="progress-bar-solution" element={<ProgressBarSolution />} />
        <Route
          path="progress-bar-starting-code"
          element={<ProgressBarStartingCode />}
        />
        <Route path="tabs-solution" element={<TabsSolution />} />
        <Route path="tabs-starting-code" element={<TabsStartingCode />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
