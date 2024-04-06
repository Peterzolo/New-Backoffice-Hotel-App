import React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 9999, // Ensure the overlay is on top of everything
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const ProgressBar = ({ color = "primary", thickness = 4 }) => {
  const classes = useStyles();

  return (
    <div className={classes.overlay}>
      <Box sx={{ width: "100%" }}>
        <LinearProgress color={color} sx={{ height: thickness }} />
      </Box>
    </div>
  );
};

export default ProgressBar;
