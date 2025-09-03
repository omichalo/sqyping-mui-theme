import { PaletteOptions, Palette } from "@mui/material/styles";

// Couleurs de base SQY PING
const colors = {
  navy: "#28306d",
  orange: "#f1861f",
  blue: "#4267b0",
  black: "#000000",
  white: "#ffffff",
} as const;

// Palette claire
const lightPalette: PaletteOptions = {
  mode: "light",
  primary: {
    main: colors.navy,
    light: "#4a4a8a",
    dark: "#1a1f4a",
    contrastText: colors.white,
  },
  secondary: {
    main: colors.orange,
    light: "#ff9f4a",
    dark: "#d16a00",
    contrastText: colors.white,
  },
  info: {
    main: colors.blue,
    light: "#6b8dd1",
    dark: "#2d4a8a",
    contrastText: colors.white,
  },
  error: {
    main: "#d32f2f",
    light: "#ef5350",
    dark: "#c62828",
    contrastText: colors.white,
  },
  warning: {
    main: "#ed6c02",
    light: "#ff9800",
    dark: "#e65100",
    contrastText: colors.white,
  },
  success: {
    main: "#2e7d32",
    light: "#4caf50",
    dark: "#1b5e20",
    contrastText: colors.white,
  },
  background: {
    default: "#fafafa",
    paper: colors.white,
  },
  text: {
    primary: colors.black,
    secondary: "#666666",
    disabled: "#999999",
  },
  divider: "#e0e0e0",
  grey: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
  },
};

// Palette sombre
const darkPalette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#4a4a8a", // Navy plus clair pour le mode sombre
    light: "#6b6ba0",
    dark: colors.navy,
    contrastText: colors.white,
  },
  secondary: {
    main: colors.orange,
    light: "#ff9f4a",
    dark: "#d16a00",
    contrastText: colors.black,
  },
  info: {
    main: "#6b8dd1", // Bleu plus clair pour le mode sombre
    light: "#8ba8e0",
    dark: colors.blue,
    contrastText: colors.white,
  },
  error: {
    main: "#f44336",
    light: "#e57373",
    dark: "#d32f2f",
    contrastText: colors.white,
  },
  warning: {
    main: "#ff9800",
    light: "#ffb74d",
    dark: "#f57c00",
    contrastText: colors.black,
  },
  success: {
    main: "#4caf50",
    light: "#81c784",
    dark: "#388e3c",
    contrastText: colors.white,
  },
  background: {
    default: "#121212",
    paper: "#1e1e1e",
  },
  text: {
    primary: colors.white,
    secondary: "#b3b3b3",
    disabled: "#666666",
  },
  divider: "#333333",
  grey: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
  },
};

// Extension du type Palette pour ajouter des couleurs personnalisées
declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      highlight: string;
      highlightDark: string;
      accent: string;
      surface: string;
      surfaceDark: string;
    };
  }

  interface PaletteOptions {
    custom?: {
      highlight?: string;
      highlightDark?: string;
      accent?: string;
      surface?: string;
      surfaceDark?: string;
    };
  }
}

// Couleurs personnalisées
const customColors = {
  light: {
    highlight: colors.orange,
    highlightDark: "#d16a00",
    accent: colors.blue,
    surface: "#f8f9fa",
    surfaceDark: "#e9ecef",
  },
  dark: {
    highlight: colors.orange,
    highlightDark: "#d16a00",
    accent: "#6b8dd1",
    surface: "#2a2a2a",
    surfaceDark: "#1a1a1a",
  },
};

export const createPalette = (mode: "light" | "dark"): PaletteOptions => {
  const basePalette = mode === "light" ? lightPalette : darkPalette;

  return {
    ...basePalette,
    custom: customColors[mode],
  };
};

export { colors };
