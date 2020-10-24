import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    background-color: ${({ theme }) => theme.bgBody};
    color: ${({ theme }) => theme.text};
  }
  input, select, option {
    background-color: ${({ theme }) => theme.bgBody};
    color: ${({ theme }) => theme.text};
  }
  .elements {
    background-color: ${({ theme }) => theme.elements};
  }
  .filter-input {
    background-color: ${({ theme }) => theme.elements};
  }
  .dropdown>span:hover {
    background-color: ${({ theme }) => theme.hover};
  }
`;
