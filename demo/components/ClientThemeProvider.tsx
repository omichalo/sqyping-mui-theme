"use client";

import { AppThemeProvider } from "@sqyping/mui-theme";

interface ClientThemeProviderProps {
  children: React.ReactNode;
}

export function ClientThemeProvider({ children }: ClientThemeProviderProps) {
  return <AppThemeProvider>{children}</AppThemeProvider>;
}
