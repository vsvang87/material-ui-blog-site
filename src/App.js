import React from "react";
import { Container, createMuiTheme, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import Feature from "./components/Feature";

function App() {
  // Dark Mode
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <Feature />
      </Container>
    </ThemeProvider>
  );
}

export default App;
