import react from "react";
import "./TodoList.css";
function TodoList(props) {
  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {!props.error && props.loading && props.onLoading()}
      {!props.error &&
        !props.loading &&
        !props.searchedTodos.length &&
        props.onEmpty()}
      <ul>{props.searchedTodos.map(props.render)}</ul>
    </section>
  );
}

export { TodoList };
