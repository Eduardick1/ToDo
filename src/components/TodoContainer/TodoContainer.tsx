import React from "react";
import Todo from "../Todo/Todo";
import { useGetTodosQuery } from "../../Redux/todoSlice";
import { ContainerTodo } from "./TodoContainer.styled";

export default function TodoContainer() {
  const { data, isLoading } = useGetTodosQuery();
  return (
    <ContainerTodo>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : data ? (
        data.map((todo) => <Todo key={todo._id} todo={todo} />)
      ) : null}
    </ContainerTodo>
  );
}
