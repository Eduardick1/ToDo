import React, { Dispatch, memo, useCallback, useRef, useState } from "react";
import type { ChangeEvent, KeyboardEvent, MouseEvent } from "react";

import { Input } from "./Inputtodo.styled";
import { ITodo } from "../../Utils/types";

const Inputodo = memo(
  ({
    text,
    changeTextHandler,
  }: {
    text: string;
    changeTextHandler: Dispatch<React.SetStateAction<ITodo>>;
  }) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [isDisabled, setDisabled] = useState<boolean>(true);

    const resizeInputOnChange = useCallback(
      (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (textAreaRef.current) {
          textAreaRef.current.style.height = "fit-content";
          textAreaRef.current.style.height = `${e.target.scrollHeight + 8}px`;
        }
      },
      []
    );

    // disable or enable textarea
    const toggleEditMode = useCallback((e: MouseEvent | null = null) => {
      if (e && isDisabled === true) setDisabled(false);
      if (!e) setDisabled(true);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Enter - save text to db | Esc - cancel text changes
    const handleKeyboardPress = useCallback(
      (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
          toggleEditMode();
          changeTextHandler((prev) => {
            return { ...prev, text: e.currentTarget.value };
          });
        }
        if (e.key === "Escape") {
          toggleEditMode();
          e.currentTarget.value = text;
        }
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    );

    return (
      <Input
        $isDisabled={isDisabled}
        readOnly={isDisabled}
        ref={textAreaRef}
        onChange={resizeInputOnChange}
        onDoubleClick={toggleEditMode}
        onKeyDown={handleKeyboardPress}
        defaultValue={text}
        placeholder="Enter your task..."
        name="inputTodo"
        title="Double Click to unlock, 'Enter' to apply changes, 'Escape' to cancel changes"
      />
    );
  }
);

export default Inputodo;
