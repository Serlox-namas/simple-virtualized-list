import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.css";

import List from "./app/VirtualizedList";
import people from "./data/people";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <h1>Simple virtualized list</h1>
      <List items={people} dataKey={"email"} height={200} itemHeight={40} />
    </div>
  </React.StrictMode>,
  rootElement
);
