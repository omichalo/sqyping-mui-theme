import React, { useEffect } from "react";

/**
 * FontProvider - Composant pour charger automatiquement la police Figtree
 *
 * Ce composant charge automatiquement la police Figtree Variable utilisée par le thème SQY PING.
 * Il doit être utilisé au niveau racine de l'application, idéalement dans le AppThemeProvider.
 */
export const FontProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useEffect(() => {
    // Import dynamique de la police Figtree pour éviter les problèmes SSR
    import("@fontsource-variable/figtree/index.css");
  }, []);

  return <>{children}</>;
};

export default FontProvider;
