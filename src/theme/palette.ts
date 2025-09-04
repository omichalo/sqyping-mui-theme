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
    main: "#e53e3e", // Rouge plus chaleureux, inspiré de l'orange SQY PING
    light: "#fc8181",
    dark: "#c53030",
    contrastText: colors.white,
  },
  warning: {
    main: colors.orange, // Utilise l'orange SQY PING comme warning
    light: "#ff9f4a",
    dark: "#d16a00",
    contrastText: colors.white,
  },
  success: {
    main: "#38a169", // Vert plus moderne, harmonieux avec la palette
    light: "#68d391",
    dark: "#2f855a",
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
    50: "#f8f9fa", // Légèrement teinté de bleu
    100: "#f1f3f4", // Plus doux
    200: "#e8eaed", // Teinté de navy
    300: "#dadce0", // Harmonie avec la palette
    400: "#9aa0a6", // Gris neutre
    500: "#5f6368", // Gris moyen
    600: "#3c4043", // Gris foncé
    700: "#202124", // Proche du navy
    800: "#1a1f4a", // Navy foncé
    900: "#0d1117", // Très foncé, harmonieux
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
    main: "#fc8181", // Rouge plus clair pour le mode sombre
    light: "#feb2b2",
    dark: "#e53e3e",
    contrastText: colors.black,
  },
  warning: {
    main: colors.orange, // Utilise l'orange SQY PING comme warning
    light: "#ff9f4a",
    dark: "#d16a00",
    contrastText: colors.black,
  },
  success: {
    main: "#68d391", // Vert plus clair pour le mode sombre
    light: "#9ae6b4",
    dark: "#38a169",
    contrastText: colors.black,
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
    50: "#0d1117", // Très foncé, harmonieux
    100: "#161b22", // Navy foncé
    200: "#21262d", // Proche du navy
    300: "#30363d", // Gris foncé
    400: "#484f58", // Gris moyen
    500: "#656d76", // Gris neutre
    600: "#8b949e", // Gris clair
    700: "#b1bac4", // Harmonie avec la palette
    800: "#c9d1d9", // Teinté de navy
    900: "#f0f6fc", // Plus doux, teinté de bleu
  },
};

// Extension du type Palette pour ajouter des couleurs personnalisées
declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      highlight: string;
      highlightDark: string;
      accent: string;
      accentLight: string;
      surface: string;
      surfaceDark: string;
      navyLight: string;
      navyText: string;
    };
  }

  interface PaletteOptions {
    custom?: {
      highlight?: string;
      highlightDark?: string;
      accent?: string;
      accentLight?: string;
      surfaceDark?: string;
      navyLight?: string;
      navyText?: string;
    };
  }
}

// Couleurs personnalisées
const customColors = {
  light: {
    highlight: colors.orange,
    highlightDark: "#d16a00",
    accent: colors.blue,
    accentLight: "#8ba8e0", // Bleu plus clair pour éviter le contraste faible
    surface: "#f8f9fa",
    surfaceDark: "#e9ecef",
    navyLight: "#4a4a8a", // Navy clair pour les textes sur fond clair
    navyText: "#1a1f4a", // Navy foncé pour les textes sur fond clair
  },
  dark: {
    highlight: colors.orange,
    highlightDark: "#d16a00",
    accent: "#6b8dd1",
    accentLight: "#8ba8e0", // Bleu plus clair pour le mode sombre
    surface: "#2a2a2a",
    surfaceDark: "#1a1a1a",
    navyLight: "#6b6ba0", // Navy clair pour le mode sombre
    navyText: "#4a4a8a", // Navy clair pour les textes sur fond sombre
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
