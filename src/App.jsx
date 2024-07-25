import {Box, ThemeProvider, Typography} from "@mui/material"
import React from "react";
import theme from "./config/theme"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import "./App.css";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
          <Box>
            <Typography variant="link">Bismillah</Typography>
          </Box>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
