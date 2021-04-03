import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Box } from "@material-ui/core";

const ProgressBar = () => (
  <div style={{ width: '100%' }}>
     <Box display="flex" justifyContent="center" alignContent="center">
        <CircularProgress size={100} />
     </Box>
  </div>
);

export default ProgressBar;