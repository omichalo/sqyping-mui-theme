import type { Metadata } from "next";
import { AppThemeProvider } from "@/providers/AppThemeProvider";
import "@fontsource-variable/figtree/index.css";

export const metadata: Metadata = {
  title: "SQY PING - MUI Theme",
  description:
    "Production-ready MUI theme for SQY PING React/Next.js application",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  );
}
