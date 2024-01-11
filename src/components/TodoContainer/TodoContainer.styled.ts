import styled from "styled-components";

export const ContainerTodo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.gap};
`;
