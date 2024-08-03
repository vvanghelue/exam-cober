import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import SearchAJob from "./search-a-job/SearchAJob.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SearchAJob />
  </React.StrictMode>
);
