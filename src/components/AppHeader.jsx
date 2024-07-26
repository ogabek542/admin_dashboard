import React from 'react';
import { Box, Typography } from '@mui/material';

/** @type {import("@mui/material").SxProps} */ 

const styles = {
    appBar: {
        bgcolor: "neutral.main"
    }
};

function AppHeader() {
  return (
    <Box sx={styles.appBar}>
      <Typography sx={{ bgcolor: "primary.main" }}>App Header</Typography>
    </Box>
  );
}



export default AppHeader;
