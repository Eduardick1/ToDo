import styled from "styled-components";

export const Input = styled.textarea<{
  $isDisabled: boolean;
}>`
  grid-area: text;
  resize: none;
  overflow: hidden;
  font-size: 1.5rem;
  background-color: transparent;
  position: relative;
  padding: ${(props) => props.theme.todoPadding};
  border: 1px solid ${(props) => props.theme.primaryColor};
  border-radius: 1rem;
  outline: none;
  &:focus {
    border: ${(props) =>
      props.$isDisabled
        ? "1px solid " + props.theme.inActiveColor
        : "2px solid " + props.theme.primaryColor};
  }
`;
