import type { Metadata } from "next";
import { ClientThemeProvider } from "../components/ClientThemeProvider";
import "@fontsource-variable/figtree/index.css";

export const metadata: Metadata = {
  title: "SQY PING - MUI Theme",
  description:
    "Production-ready MUI theme for SQY PING React/Next.js application",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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
        <ClientThemeProvider>{children}</ClientThemeProvider>
      </body>
    </html>
  );
}
