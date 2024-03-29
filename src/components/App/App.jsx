import React from "react";
import { useTodos } from "../../Hooks/useTodos.jsx";
import "./App.css";

import { TodoCounter } from "../TodoCounter/TodoCounter.jsx";
import { TodoSearch } from "../TodoSearch/TodoSearch.jsx";
import { TodoList } from "../TodoList/TodoList.jsx";
import { TodoItem } from "../TodoItem/TodoItem.jsx";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton.jsx";
import { Title } from "../Title/Title.jsx";
import { Modal } from "../Modal/Modal.jsx";
import { TodoForm } from "../TodoForm/TodoForm.jsx";
import { TodoLoading } from "../TodoLoading/TodoLoading.jsx";
import { TodoEmpty } from "../TodoEmpty/TodoEmpty.jsx";
import { TodoError } from "../TodoError/TodoError.jsx";
import { TodoHeader } from "../TodoHeader/TodoHeader.jsx";

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodos,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader>
        <Title />
        <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        onError={() => <TodoError />}
        onLoading={() => <TodoLoading />}
        onEmpty={() => <TodoEmpty />}
        render={(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        )}
      />

      {/* <TodoList>
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
      </TodoList> */}

      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export default App;
