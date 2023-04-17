import React from "react";
import "./TodoError.css";

function TodoError() {
  return (
    <div className="Error">
      <img src="bee.png" className="Error-bee" />
      <p className="Error-text">¡Es una abeja!</p>
      <p className="Error-sub-text"> Algo ha salido mal, contacta a soporte</p>
    </div>
  );
}

export { TodoError };
