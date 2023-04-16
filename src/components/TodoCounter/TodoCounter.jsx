import React from "react";
import "./TodoCounter.css";
import { FaList } from "react-icons/fa";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  return (
    <h2 className="TodoCounter">
      <FaList className="TodoCounterIcon" />
      Has completado {completedTodos} de {totalTodos} tareas
    </h2>
  );
}

export { TodoCounter };
