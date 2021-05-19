import React from 'react';
import { HomePage } from './components/HomePage/HomePage';
import { GlobalStyleReset } from "./styles/CssReset";
import { ThemeProvider } from "styled-components";
import theme from "./styles/Themes";

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyleReset />
      <HomePage />
    </ThemeProvider>
  );
};

export default App;
