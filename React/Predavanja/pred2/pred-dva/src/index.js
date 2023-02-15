import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Komponenta1 from "./Komponenta1";

// Importano iz novih file-ova --> App.js i Komponenta1.js

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
    <Komponenta1 />
    <App />
  </div>
); // ili napisano <App></App>
