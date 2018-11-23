import React from "react";
import { collect, store } from "react-recollect";

const Task = ({ task }) => (
  <div>
    <input
      type="checkbox"
      checked={task.done}
      onChange={e => (task.done = e.target.checked)}
    />

    <input
      type="text"
      value={task.name}
      onChange={e => (task.name = e.target.value)}
    />

    <button
      onClick={() => {
        store.tasks = store.tasks.filter(({ id }) => id !== task.id);
      }}
    >
      ✕
    </button>
  </div>
);

export default collect(Task);

function getPrevOrder(currentOrder, orderList) {
  orderList.sort();
  let index = orderList.indexOf(currentOrder);
  if (index == -1) return 0;
  if (index == 0) return orderList[0];
  if (index == 1) return orderList[0] - 1;
  return (orderList[index - 2] + orderList[index - 1]) / 2;
}

function getNextOrder(currentOrder, orderList) {
  orderList.sort();
  let index = orderList.indexOf(currentOrder);
  if (index == -1) return 0;
  if (index + 1 == orderList.length) return orderList[orderList.length - 1];
  if (index + 2 == orderList.length) return orderList[orderList.length - 1] + 1;
  return (orderList[index + 1] + orderList[index + 2]) / 2;
}

function getOrderList(items, filter = () => true) {
  let list = items
    .filter(item => !item.deleted && filter(item))
    .map(a => a.order);
  list.sort();
  return list;
}