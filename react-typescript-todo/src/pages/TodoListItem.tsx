import React from "react";
import { ToDoListItem } from "../types";

const TodoListItem = (props: ToDoListItem) => {
  const key = props.toDo.id;
  return (
    <div>
      <div className="item">
        <li>{props.toDo.name}</li>
        <button onClick={(e) => props.deleteToDo(props.toDo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoListItem;
