import styled from "styled-components";

export const AppMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100dvh;
  padding-top: ${(props) => props.theme.gap};
  gap: ${(props) => props.theme.gap};
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.primaryColor};
`;
