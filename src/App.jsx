import {Box, ThemeProvider, Typography,CssBaseline} from "@mui/material"
import React from "react";
import theme from "./config/theme"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import "./App.css";
import SideNav from "./components/SideNav";
import AppHeader from "./components/AppHeader";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <AppHeader/>
          <Box>
            <SideNav/>
            <Box comoponent={"main"}>

            </Box>
          </Box>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
