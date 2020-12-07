import React from "react";
import ReactDOM from "react-dom";
import "bootstrap-container";
import "./index.scss";
import App from "./App";
import { AlertProvider } from "./context/alert.context";

ReactDOM.render(
   <React.StrictMode>
      <AlertProvider>
         <App />
      </AlertProvider>
   </React.StrictMode>,
   document.getElementById("root")
);
