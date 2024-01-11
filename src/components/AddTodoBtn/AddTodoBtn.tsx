import React, { memo, useCallback } from "react";
import { AddButton } from "./AddTodoBtn.styled";
import { FaRegPlusSquare } from "react-icons/fa";
import { useCreateTodoMutation } from "../../Redux/todoSlice";

const AddTodoBtn = memo(() => {
  const [createTodo, { isLoading }] = useCreateTodoMutation();
  const handleClickBtn = useCallback(
    () =>
      createTodo({ _id: Date.now(), status: "Not Started", text: "" }).unwrap(),
    []
  );
  return (
    <AddButton title="Click to add new task">
      {!isLoading && <FaRegPlusSquare onClick={handleClickBtn} />}
    </AddButton>
  );
});
export default AddTodoBtn;
