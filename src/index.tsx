import "../tailwind.css";
import "./inline-styles.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

document.documentElement.classList.add("js");

const appElement = document.getElementById("app");

if (!appElement) {
  throw new Error("The application root element is missing.");
}

ReactDOM.createRoot(appElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
