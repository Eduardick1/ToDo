import styled from "styled-components";

export const DateSpan = styled.span`
  grid-area: date;
  text-align: center;
  border-right: 1px solid ${(props) => props.theme.primaryColor};

  padding: ${(props) => props.theme.todoPadding};
`;
