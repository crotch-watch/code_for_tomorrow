import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ContextProvder } from "./ContextProvider";
import { CardContainer } from "./CardContainer.comp";
import { Navbar } from "./Navbar.component";
import { FeedbackForm } from "./Form";
// import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvder>
      {/* <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
        <Navbar />
        <div>
          <CardContainer />
        </div>
      </div> */}
      <FeedbackForm />
    </ContextProvder>
  </StrictMode>
);
