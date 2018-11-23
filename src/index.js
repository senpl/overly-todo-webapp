import React from "react";
import ReactDOM from "react-dom";
import { afterChange, store } from "react-recollect";
import TaskList from "./TaskList";
import "./index.css";

const storedData = JSON.parse(localStorage.getItem("store"));
store.tasks = storedData
  ? storedData.tasks
  : [
      {
        id: 1,
        name: "Example task",
        done: true
      }
    ];

    store.index =storedData.index
    store.minimal=storedData.minimalOrdered

ReactDOM.render(<TaskList />, document.getElementById("root"));

afterChange(store => {
  localStorage.setItem("store", JSON.stringify(store));
});
