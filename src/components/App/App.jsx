import React from "react";

import { AppUI } from "./AppUI.jsx";
import { TodoProvider } from "../TodoContext/TodoContext.jsx";
import "./App.css";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
