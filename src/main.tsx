import React from "react";
import ReactDOM from "react-dom/client";
import { AppRoutes } from "./routers/routes";
import { ThemeProvider } from "./components/theme-provider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>
);
