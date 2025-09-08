"use client";

import React from "react";
import { Box, Typography } from "@mui/material";

export default function TestSimplePage() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h1">Test Direct</Typography>
      <Typography variant="body1">
        Cette page n'utilise pas StoryLayout - si vous voyez ce texte, le
        problème vient du StoryLayout !
      </Typography>
    </Box>
  );
}
