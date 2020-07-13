import React from "react";
import TodoListItem from "./TodoListItem";
import { TodDoList } from "../types";

const TodoList = (props: TodDoList) => (
  <div className="toDoListItem">
    {props.toDoList.map((todo, i) => (
      <TodoListItem key={i} toDo={todo} deleteToDo={props.deleteToDo} />
    ))}
  </div>
);

export default TodoList;
