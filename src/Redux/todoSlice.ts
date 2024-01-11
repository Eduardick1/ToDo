import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITodo } from "../Utils/types";

export const todosApi = createApi({
  reducerPath: "todos",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  tagTypes: ["Todo"],
  endpoints: (builder) => ({
    getTodos: builder.query<ITodo[], void>({
      query: () => "todos",
      providesTags: (result = []) => [
        { type: "Todo", id: "LIST" },
        ...result.map(({ _id }) => ({ type: "Todo" as const, id: _id })),
      ],
    }),
    updateTodo: builder.mutation<void, ITodo>({
      query: (body: ITodo) => ({
        url: `todos/${body._id}`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      }),
      invalidatesTags: ["Todo"],
    }),
    createTodo: builder.mutation<void, ITodo>({
      query: (body: ITodo) => ({
        url: "todos",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Todo"],
    }),
    deleteTodo: builder.mutation<void, number>({
      query: (id: number) => ({
        url: `todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todo"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = todosApi;
