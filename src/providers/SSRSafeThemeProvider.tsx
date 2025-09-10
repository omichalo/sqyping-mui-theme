"use client";

import React, { ReactNode } from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Theme } from "@mui/material/styles";

interface SSRSafeThemeProviderProps {
  children: ReactNode;
  theme: Theme;
}

export function SSRSafeThemeProvider({
  children,
  theme,
}: SSRSafeThemeProviderProps) {
  // Appliquer le thème immédiatement, même pendant le rendu SSR
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
