import React from "react";
import "./TodoForm.css";
import { TodoFormUI } from "./TodoFormUI";

export default function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
    setNewTodoValue("");
  };

  return (
    <TodoFormUI
      onSubmit={onSubmit}
      onChange={onChange}
      onCancel={onCancel}
      newTodoValue={newTodoValue}
    />
  );
}

export { TodoForm };
