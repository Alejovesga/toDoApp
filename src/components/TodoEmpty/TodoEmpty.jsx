import React from "react";
import "./TodoEmpty.css";

function TodoEmpty() {
  return (
    <div className="Empty">
      <img src="list.png" className="Empty-list" />
      <p className="Empty-text">No hay tareas pendientes</p>
      <p className="Empty-sub-text"> ¡Crea algunas tareas!</p>
    </div>
  );
}

export { TodoEmpty };
