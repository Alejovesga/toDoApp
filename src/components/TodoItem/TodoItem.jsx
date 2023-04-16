import react from "react";
import "./TodoItem.css";
import { FaCheck, FaTrashAlt } from "react-icons/fa";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      >
        <FaCheck onClick={props.onComplete} />
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete">
        <FaTrashAlt onClick={props.onDelete} />
      </span>
    </li>
  );
}

export { TodoItem };
