import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import IsCoolContext from "./components/isCoolContext";
import { BrowserRouter, HashRouter } from "react-router-dom";

import './styles.css';

const rootEl = document.getElementById('main');
const root = ReactDOM.createRoot(rootEl);

root.render(<HashRouter>
  <IsCoolContext.Provider value={true}>
    <App/>
  </IsCoolContext.Provider>
</HashRouter>
);

console.log('Hello console');
