import { createGlobalStyle } from "styled-components";

type Theme = {
  theme: {
    background: string;
    primary_text: string;
  };
};

export const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
    }

    :root {
      --color-dark: hsl(0, 0%, 10%);
      --color-light: hsl(0, 0%, 95%);
    }

    body {
      transition: .4s ease;
      background-color: ${(props: Theme) => props.theme.background};
      color: ${(props: Theme) => props.theme.primary_text};
    }
  `;
