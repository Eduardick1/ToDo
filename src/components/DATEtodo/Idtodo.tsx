import React, { memo } from "react";
import { DateSpan } from "./Idtodo.styled";

const Datetodo = memo(({ id }: { id: number }) => {
  const date = new Date(id).toUTCString().slice(4, -7);
  return (
    <DateSpan title="Time and Date of creation this task">{date}</DateSpan>
  );
});

export default Datetodo;
