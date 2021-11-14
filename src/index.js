import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "@mui/material/styles";
import App from "./App";

import theme from "./theme";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>,

  rootElement
);
