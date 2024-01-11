import React, { memo, useEffect, useState } from "react";
import { TodoDiv } from "./Todo.styled";
import Datetodo from "../DATEtodo/Idtodo";
import { ITodo } from "../../Utils/types";
import Inputodo from "../INPUTtodo/Inputodo";

import Status from "../StatustTodo/Status";
import { useUpdateTodoMutation } from "../../Redux/todoSlice";
import DeleteTodo from "../DeleteTodo/DeleteTodo";

const Todo = memo(({ todo }: { todo: ITodo }) => {
  const [ToDo, setTodo] = useState<ITodo>({
    _id: todo._id,
    status: todo.status,
    text: todo.text,
  });

  const [updateTodo, { error }] = useUpdateTodoMutation();

  useEffect(
    () => {
      updateTodo(ToDo).unwrap();
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ToDo]
  );

  error && console.log("PUT FRONT ERROR", error);

  return (
    <TodoDiv>
      <DeleteTodo id={ToDo._id} />
      <Datetodo id={ToDo._id} />
      <Status status={ToDo.status} changeStatusHandler={setTodo} />
      <Inputodo text={ToDo.text} changeTextHandler={setTodo} />
    </TodoDiv>
  );
});

export default Todo;
