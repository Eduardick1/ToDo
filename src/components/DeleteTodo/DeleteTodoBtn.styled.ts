import styled from "styled-components";

export const DeleteButton = styled.button`
  position: absolute;
  top: 1rem;
  right: -1.5rem;
  font-size: 1rem;
  color: ${(props) => props.theme.inActiveColor};
  transition: font-size 150ms ease;
  &:hover {
    font-weight: ${(props) => props.theme.activeFontW};
    color: ${(props) => props.theme.negativeColor};
  }
`;
