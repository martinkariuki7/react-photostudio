import React from "react";
import ReactDOM from "react-dom/client";
/* import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing"; */
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

/* Sentry.init({
  dsn: "https://a4800772ae944e65be027c6f891cd27d@o4504616436957184.ingest.sentry.io/4504616439250944",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
}); */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
