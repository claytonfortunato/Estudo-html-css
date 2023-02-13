import { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme, { darkThemeColors } from "./theme";

import "./App.css";
import Button from "./components/Button";
import { Title } from "./components/Title";

const GlobalStyle = createGlobalStyle`
  html,body {
    background-color: ${(props) => props.theme.colors.white};
  }
`;

const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    ...darkThemeColors,
  },
};

function App() {
  const [activeTheme, setActiveTheme] = useState(theme);

  const handleTheme = () => {
    if (activeTheme === theme) {
      setActiveTheme(darkTheme);
    } else {
      setActiveTheme(theme);
    }
  };

  return (
    <ThemeProvider theme={activeTheme}>
      <GlobalStyle />
      <div className="App">
        <h1>AOBA!</h1>
        <Button>Botão</Button>
        <Button onClick={handleTheme}>Alterar tema</Button>
        <Title />
      </div>
    </ThemeProvider>
  );
}

export default App;
