import React from "react";
import { store, collect } from "react-recollect";
import Task from "./Task";

const TaskList = () => (
  <div>
    <button
      onClick={() => {
        store.tasks.push({
          id: Math.random(), // don't judge me
          name: "",
          done: false
        });
      }}
    >
      Add a task
    </button>
    {!!store.tasks &&
      store.tasks.map(task => <Task key={task.id} task={task} />)}
  </div>
);

export default collect(TaskList);
