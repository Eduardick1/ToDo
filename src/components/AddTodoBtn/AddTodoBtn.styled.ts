import styled from "styled-components";

export const AddButton = styled.button`
  font-size: 1.5rem;
  font-weight: 400;
  width: fit-content;
  color: ${(props) => props.theme.inActiveColor};
  transition: font-size 200ms ease;
  &:hover {
    font-size: 1.8rem;
    color: ${(props) => props.theme.positiveColor};
  }
`;
