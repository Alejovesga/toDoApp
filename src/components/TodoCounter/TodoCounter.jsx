import React from "react";
import "./TodoCounter.css";
import { FaList } from "react-icons/fa";

function TodoCounter({ completedTodos, totalTodos }) {
  return (
    <h2 className="TodoCounter">
      <FaList className="TodoCounterIcon" />
      Has completado {completedTodos} de {totalTodos} tareas
    </h2>
  );
}

export { TodoCounter };
