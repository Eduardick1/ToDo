import React, { Dispatch, memo, useCallback } from "react";
import { StatuSpan } from "./Status.styled";
import type { ITodo, TStatus } from "../../Utils/types";
import { COMPLETED, IN_PROGRESS, NOT_STARTED } from "../../Utils/constants";

const Status = memo(
  ({
    status,
    changeStatusHandler,
  }: {
    status: TStatus;
    changeStatusHandler: Dispatch<React.SetStateAction<ITodo>>;
  }) => {
    const handlerDblClickStatus = useCallback(() => {
      let newStatus: TStatus;
      switch (status) {
        case NOT_STARTED:
          newStatus = IN_PROGRESS;
          break;
        case IN_PROGRESS:
          newStatus = COMPLETED;
          break;
        case COMPLETED:
          newStatus = NOT_STARTED;
          break;
      }
      changeStatusHandler((prev) => {
        return { ...prev, status: newStatus };
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status]);

    return (
      <StatuSpan
        title="Double Click to change status of task"
        onDoubleClick={handlerDblClickStatus}
      >
        {status}
      </StatuSpan>
    );
  }
);

export default Status;
