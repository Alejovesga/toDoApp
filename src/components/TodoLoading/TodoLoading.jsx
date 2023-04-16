import React from "react";
import "./TodoLoading.css";
import { TodoLoadingItem } from "../TodoLoadingItem/TodoLoadingItem";

function TodoLoading() {
  return (
    <div>
      <TodoLoadingItem />
      <TodoLoadingItem />
      <TodoLoadingItem />
      <TodoLoadingItem />
    </div>
  );
}

export { TodoLoading };
