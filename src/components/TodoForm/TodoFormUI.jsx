import React from "react";

export default function TodoFormUI({
  onSubmit,
  onChange,
  onCancel,
  newTodoValue,
}) {
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nueva tarea</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Crear tarea"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Guardar
        </button>
      </div>
    </form>
  );
}

export { TodoFormUI };
