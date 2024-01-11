import styled from "styled-components";

export const TodoDiv = styled.div`
  display: grid;
  grid-template-areas:
    "date date mark"
    "text text text";
  grid-template-rows: 3rem;
  gap: ${(props) => props.theme.todoPadding};
  width: 30rem;
  position: relative;
  border-radius: 1.5rem;
  padding: ${(props) => props.theme.todoPadding};
  background-color: #f8fae5;
`;
