import React from "react";
import { createBrowserHistory } from "history";
import "./App.css";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <div>
      <p>Hardik500 (Header Application)</p>
    </div>
  );
}

export default App;