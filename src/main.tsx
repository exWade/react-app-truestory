import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import "./normalize.css";

import "./18n.ts";
import { ModalProvider } from "./context/ModalContext.tsx";
import { ThemeProvider } from "./providers/ThemeProvider.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <ModalProvider>
          <App />
        </ModalProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
