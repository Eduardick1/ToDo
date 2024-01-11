export type TStatus = "Not Started" | "In-Progress" | "Completed";

export interface ITodo {
  _id: number;
  status: TStatus;
  text: string;
}
