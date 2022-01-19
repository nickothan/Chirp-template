import React from "react"
import ReactDOM from "react-dom"

//* Import components
import App from "./App"

//* Import Styles
import { theme } from "./config/theme"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./config/globalStyles"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
