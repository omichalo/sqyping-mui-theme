// SQY PING MUI Theme - SSR Export (Server-side)
import React from "react";

export {
  ssrTheme as getTheme,
  SSRThemeProvider as AppThemeProvider,
  SSRThemeProvider as SSRSafeThemeProvider,
  useSSRColorMode as useColorMode,
  SSRHighlight as Highlight,
  SSRHighlightH1 as HighlightH1,
  SSRHighlightTitle as HighlightTitle,
} from "./ssr";

// StoryLayout SSR-safe
export const StoryLayout = ({ children }: { children: React.ReactNode }) => {
  return React.createElement(
    "div",
    { suppressHydrationWarning: true },
    children
  );
};

// Re-export MUI components that are commonly used with the theme
export { ThemeProvider, CssBaseline } from "@mui/material";
export type { Theme } from "@mui/material/styles";
