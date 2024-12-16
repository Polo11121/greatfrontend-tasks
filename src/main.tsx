import { Fragment, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { App } from "./App";
import { TASKS } from "./tasks";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {TASKS.map(
          (
            {
              startingCodePath,
              solutionPath,
              StartingCodeComponent,
              SolutionComponent,
            },
            index
          ) => (
            <Fragment key={index}>
              <Route
                path={startingCodePath}
                element={<StartingCodeComponent />}
              />
              <Route path={solutionPath} element={<SolutionComponent />} />
            </Fragment>
          )
        )}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
