import React from "react";
import { TodoCounter } from "../TodoCounter/TodoCounter.jsx";
import { TodoSearch } from "../TodoSearch/TodoSearch.jsx";
import { TodoList } from "../TodoList/TodoList.jsx";
import { TodoItem } from "../TodoItem/TodoItem.jsx";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton.jsx";
import { Title } from "../Title/Title.jsx";
import { TodoContext } from "../TodoContext/TodoContext.jsx";
import { Modal } from "../Modal/Modal.jsx";
import { TodoForm } from "../TodoForm/TodoForm.jsx";
import { TodoLoading } from "../TodoLoading/TodoLoading.jsx";
import { TodoEmpty } from "../TodoEmpty/TodoEmpty.jsx";
import { TodoError } from "../TodoError/TodoError.jsx";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodos,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <Title />
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <TodoError />}
        {!error && loading && <TodoLoading />}
        {!error && !loading && !searchedTodos.length && <TodoEmpty />}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { AppUI };
