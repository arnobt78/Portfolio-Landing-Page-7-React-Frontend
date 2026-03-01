import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

// Vite/React 18+ entry: createRoot mounts the app into #root.
// StrictMode helps catch side-effect and deprecation issues in development.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
