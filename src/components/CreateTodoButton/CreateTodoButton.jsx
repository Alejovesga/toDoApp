import React from "react";
import "./CreateTodoButton.css";
import { FaPlus } from "react-icons/fa";

function CreateTodoButton({ setOpenModal }) {
  const onClickButton = () => {
    setOpenModal(true);
  };

  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      <FaPlus />
    </button>
  );
}

export { CreateTodoButton };
