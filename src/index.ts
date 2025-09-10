// SQY PING MUI Theme - Main Export (Client-side)
export { getTheme } from "./theme";
export { AppThemeProvider, useColorMode } from "./providers/AppThemeProvider";
export { SSRSafeThemeProvider } from "./providers/SSRSafeThemeProvider";
export {
  Highlight,
  HighlightH1,
  HighlightH2,
  HighlightH3,
  HighlightTitle,
} from "./components/Highlight";
export { StoryLayout } from "./components/StoryLayout";
export { FontProvider } from "./components/FontProvider";

// Re-export MUI components that are commonly used with the theme
export { ThemeProvider, CssBaseline } from "@mui/material";
export type { Theme } from "@mui/material/styles";
