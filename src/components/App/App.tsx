import React from "react";
import TodoContainer from "../TodoContainer/TodoContainer";
import { AppMain } from "./App.styled";
import AddTodoBtn from "../AddTodoBtn/AddTodoBtn";

function App() {
  return (
    <AppMain>
      <TodoContainer />
      <AddTodoBtn />
    </AppMain>
  );
}

export default App;
