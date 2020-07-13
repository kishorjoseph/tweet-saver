import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import { ToDoItem } from "../types";

const initialToDoList: ToDoItem[] = [];
const initialTodo: ToDoItem = { name: "", id: "" };

const ToDo = () => {
  const [toDoList, setTodoList] = useState(initialToDoList);
  const [toDo, setToDo] = useState(initialTodo);

  useEffect(() => {}, []);
  const handleToDo = (e: React.ChangeEvent<HTMLInputElement>) => {
    let uid = toDoList.length + 1;
    setToDo({ name: e.currentTarget.value, id: uid });
  };

  const addToDo = () => {
    if (toDo.name !== "") setTodoList([...toDoList, toDo]);
    setToDo({ name: "", id: "" });
  };

  const handleDelete = (id: number | string) => {
    let updatedToDos = toDoList.filter((todo) => {
      return id !== todo.id;
    });
    setTodoList(updatedToDos);
  };
  return (
    <div>
      <div className="toDoTitle">Add your favourite todo here!</div>
      <div className="toDoInput">
        <input type="text" value={toDo.name} onChange={handleToDo} />
        <button type="button" onClick={addToDo}>
          Add
        </button>
      </div>
      <TodoList toDoList={toDoList} deleteToDo={handleDelete} />
    </div>
  );
};

export default ToDo;
