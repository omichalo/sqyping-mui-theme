// SQY PING MUI Theme - Main Export
export { getTheme } from "./theme";
export { AppThemeProvider, useColorMode } from "./providers/AppThemeProvider";
export { Highlight, HighlightH1, HighlightTitle } from "./components/Highlight";
export { StoryLayout } from "./components/StoryLayout";

// Re-export MUI components that are commonly used with the theme
export { ThemeProvider, CssBaseline } from "@mui/material";
export type { Theme } from "@mui/material/styles";
