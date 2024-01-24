import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./01-getting-started/App"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
