

import React, { useCallback } from "react";
import { useScrollTrigger, Zoom, Box, Fab } from "@mui/material";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import RocketIcon from "@mui/icons-material/Rocket";
const Top = () => {
  // Use window instead of body as document will be undefined when the hooks first run.
  const trigger = useScrollTrigger({
    // Number of pixels needed to scroll to toggle trigger to true.
    threshold: 100,
  });

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Zoom in={trigger}>
      <Box
        role="presentation"
        // Place the button in the bottom right corner.
        sx={{
          position: "fixed",
          bottom: 32,
          right: 32,
          zIndex: 1,
        }}
      >
        <Fab
          onClick={scrollToTop}
          color="primary"
          size="small"
          aria-label="Scroll back to top"
        >
          <KeyboardArrowUp fontSize="medium" />
        </Fab>
      </Box>
    </Zoom>
  );
};

export default Top;