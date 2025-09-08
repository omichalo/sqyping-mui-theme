"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "../theme";

// Types
type ColorMode = "light" | "dark";

interface ColorModeContextType {
  mode: ColorMode;
  toggleColorMode: () => void;
  setColorMode: (mode: ColorMode) => void;
}

// Context
const ColorModeContext = createContext<ColorModeContextType | undefined>(
  undefined
);

// Hook personnalisé
export const useColorMode = (): ColorModeContextType => {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error("useColorMode must be used within an AppThemeProvider");
  }
  return context;
};

// Props du provider
interface AppThemeProviderProps {
  children: ReactNode;
  defaultMode?: ColorMode;
}

// Provider principal
export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({
  children,
  defaultMode = "light",
}) => {
  const [mode, setMode] = useState<ColorMode>(defaultMode);

  // Charger le mode depuis localStorage au montage
  useEffect(() => {
    const savedMode = localStorage.getItem("sqyping-color-mode") as ColorMode;
    if (savedMode && (savedMode === "light" || savedMode === "dark")) {
      setMode(savedMode);
    }
  }, []);

  // Sauvegarder le mode dans localStorage
  useEffect(() => {
    localStorage.setItem("sqyping-color-mode", mode);
  }, [mode]);

  // Fonction pour basculer le mode
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  // Fonction pour définir un mode spécifique
  const setColorMode = (newMode: ColorMode) => {
    setMode(newMode);
  };

  // Créer le thème basé sur le mode actuel
  const theme = getTheme(mode);

  // Valeur du context
  const contextValue: ColorModeContextType = {
    mode,
    toggleColorMode,
    setColorMode,
  };

  return (
    <ColorModeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
};

// Export par défaut
export default AppThemeProvider;
