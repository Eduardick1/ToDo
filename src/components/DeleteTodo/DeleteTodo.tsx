import React, { memo } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { DeleteButton } from "./DeleteTodoBtn.styled";
import { useDeleteTodoMutation } from "../../Redux/todoSlice";

const DeleteTodo = memo(({ id }: { id: number }) => {
  const [deleteTodo] = useDeleteTodoMutation();
  return (
    <DeleteButton
      title="Double Click to delete task"
      onClick={() => {
        deleteTodo(id);
      }}
    >
      <FaRegTrashCan />
    </DeleteButton>
  );
});

export default DeleteTodo;
