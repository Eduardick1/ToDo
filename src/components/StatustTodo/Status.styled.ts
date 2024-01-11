import styled from "styled-components";

export const StatuSpan = styled.span`
  grid-area: mark;
  padding: ${(props) => props.theme.todoPadding};
  font-weight: ${(props) => props.theme.activeFontW};
  text-align: center;
  cursor: pointer;
  transition: transform 150ms ease;

  &:hover {
    transform: scale(1.05);
  }
`;
