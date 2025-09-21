"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { getTheme } from "../theme";
import { SSRSafeThemeProvider } from "./SSRSafeThemeProvider";
import { FontProvider } from "../components/FontProvider";
import { isServer } from "../utils/environment";

// Vérifier si on est côté client
const isClient = typeof window !== "undefined";

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
  // Si on est côté serveur, on retourne des valeurs par défaut
  if (!isClient) {
    return {
      mode: "light",
      toggleColorMode: () => {},
      setColorMode: () => {},
    };
  }

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
  // Si on est côté serveur, on utilise le mode par défaut
  if (!isClient) {
    const theme = getTheme(defaultMode);
    return (
      <SSRSafeThemeProvider theme={theme}>
        <FontProvider>{children}</FontProvider>
      </SSRSafeThemeProvider>
    );
  }

  // État pour le mode de couleur (côté client uniquement)
  const [mode, setMode] = useState<ColorMode>(defaultMode);
  const [mounted, setMounted] = useState(false);

  // Effet pour charger le mode depuis localStorage (client-side seulement)
  useEffect(() => {
    setMounted(true);

    // Charger le mode depuis localStorage
    try {
      const savedMode = localStorage.getItem("sqyping-color-mode") as ColorMode;
      if (savedMode && (savedMode === "light" || savedMode === "dark")) {
        setMode(savedMode);
      }
    } catch (error) {
      console.warn("Failed to load color mode from localStorage:", error);
    }
  }, []);

  // Effet pour sauvegarder le mode dans localStorage
  useEffect(() => {
    if (!mounted) return;

    try {
      localStorage.setItem("sqyping-color-mode", mode);
    } catch (error) {
      console.warn("Failed to save color mode to localStorage:", error);
    }
  }, [mode, mounted]);

  // Fonctions pour gérer le mode
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const setColorMode = (newMode: ColorMode) => {
    setMode(newMode);
  };

  // Créer le thème
  const theme = getTheme(mode);

  // Valeur du contexte
  const contextValue: ColorModeContextType = {
    mode,
    toggleColorMode,
    setColorMode,
  };

  // Si pas encore monté, retourner le mode par défaut
  if (!mounted) {
    return (
      <ColorModeContext.Provider value={contextValue}>
        <FontProvider>
          <SSRSafeThemeProvider theme={getTheme(defaultMode)}>
            {children}
          </SSRSafeThemeProvider>
        </FontProvider>
      </ColorModeContext.Provider>
    );
  }

  return (
    <ColorModeContext.Provider value={contextValue}>
      <FontProvider>
        <SSRSafeThemeProvider theme={theme}>{children}</SSRSafeThemeProvider>
      </FontProvider>
    </ColorModeContext.Provider>
  );
};

export default AppThemeProvider;
