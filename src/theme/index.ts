import { createTheme, ThemeOptions } from "@mui/material/styles";
import { createPalette } from "./palette";
import { typography } from "./typography";
import { shadows, darkShadows } from "./shadows";
import { createComponents } from "./components";

export const getTheme = (mode: "light" | "dark") => {
  const palette = createPalette(mode);
  const themeShadows = mode === "light" ? shadows : darkShadows;

  const themeOptions: ThemeOptions = {
    palette,
    typography,
    shadows: themeShadows,
    shape: {
      borderRadius: 8,
    },
    spacing: 8,
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    components: {} as any, // Sera rempli par createComponents
  };

  const theme = createTheme(themeOptions);

  // Ajouter les composants personnalisés après la création du thème
  theme.components = createComponents(theme) as any;

  return theme;
};

// Thèmes par défaut
export const lightTheme = getTheme("light");
export const darkTheme = getTheme("dark");

// Export des utilitaires
export { createPalette } from "./palette";
export { typography } from "./typography";
export { shadows, darkShadows, coloredShadows } from "./shadows";
export { createComponents } from "./components";
