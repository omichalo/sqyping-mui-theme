"use client";

import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  Card,
  CardContent,
} from "@mui/material";
import { HighlightH1, HighlightTitle } from "@/components/Highlight";
import { useColorMode } from "@/providers/AppThemeProvider";
import Link from "next/link";
import Image from "next/image";
import {
  Palette as PaletteIcon,
  SmartButton as ButtonIcon,
  Description as FormIcon,
  Navigation as NavIcon,
  Feedback as FeedbackIcon,
  ViewModule as CardIcon,
  Dashboard as DashboardIcon,
  Assignment as FormPageIcon,
} from "@mui/icons-material";

const storyPages = [
  {
    title: "Theme Showcase",
    path: "/stories/theme-showcase",
    icon: <PaletteIcon />,
    description:
      "Découvrez la palette de couleurs et les typographies du thème SQY PING",
  },
  {
    title: "Buttons & Chips",
    path: "/stories/buttons-chips",
    icon: <ButtonIcon />,
    description:
      "Explorez tous les styles de boutons, chips et badges disponibles",
  },
  {
    title: "Forms",
    path: "/stories/forms",
    icon: <FormIcon />,
    description: "Composants de formulaire avec validation et interactions",
  },
  {
    title: "Navigation",
    path: "/stories/navigation",
    icon: <NavIcon />,
    description: "AppBar, Drawer, Tabs et Breadcrumbs pour la navigation",
  },
  {
    title: "Feedback",
    path: "/stories/feedback",
    icon: <FeedbackIcon />,
    description: "Alertes, Snackbars, Tooltips et Dialogs pour le feedback",
  },
  {
    title: "Cards & Lists",
    path: "/stories/cards-lists",
    icon: <CardIcon />,
    description:
      "Cards, Accordions, Listes et Avatars pour organiser le contenu",
  },
  {
    title: "Complex Dashboard",
    path: "/stories/complex-dashboard",
    icon: <DashboardIcon />,
    description: "Tableau de bord complet avec graphiques et tableaux",
  },
  {
    title: "Complex Form Page",
    path: "/stories/complex-form-page",
    icon: <FormPageIcon />,
    description:
      "Formulaire multi-étapes avec validation et upload de fichiers",
  },
];

export default function HomePage() {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Box sx={{ mb: 4 }}>
          <Image
            src={mode === "light" ? "/favicon.png" : "/images/sqyping-logo-dark.svg"}
            alt="SQY PING Logo"
            width={200}
            height={100}
            style={{ 
              margin: "0 auto"
            }}
          />
        </Box>
        <HighlightH1 sx={{ mb: 2 }}>SQY PING Theme</HighlightH1>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
          Thème MUI production-ready pour React/Next.js
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: 600, mx: "auto" }}
        >
          Un thème moderne, chaleureux et inclusif avec une palette de couleurs
          soigneusement sélectionnée, une typographie Google Figtree et des
          composants personnalisés.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={toggleColorMode}
          sx={{ mb: 4 }}
        >
          {mode === "light" ? "Mode sombre" : "Mode clair"}
        </Button>
      </Box>

      <Box sx={{ mb: 6 }}>
        <HighlightTitle sx={{ mb: 4, textAlign: "center" }}>
          Pages de démonstration
        </HighlightTitle>

        <Stack spacing={3}>
          {storyPages.map((page, index) => (
            <Card key={page.path} sx={{ "&:hover": { boxShadow: 4 } }}>
              <CardContent>
                <Stack direction="row" spacing={3} alignItems="center">
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: "primary.main",
                      color: "primary.contrastText",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {page.icon}
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="h2" gutterBottom>
                      {page.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                    >
                      {page.description}
                    </Typography>
                  </Box>
                  <Button
                    component={Link}
                    href={page.path}
                    variant="contained"
                    sx={{ minWidth: 120 }}
                  >
                    Voir la démo
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>

      <Box sx={{ textAlign: "center", py: 4 }}>
        <Typography variant="h6" gutterBottom>
          Caractéristiques du thème
        </Typography>
        <Stack
          direction="row"
          spacing={4}
          justifyContent="center"
          flexWrap="wrap"
          useFlexGap
        >
          <Typography variant="body2" color="text.secondary">
            ✓ Palette de couleurs cohérente
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ✓ Typographie Google Figtree
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ✓ Mode sombre/clair
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ✓ Composants personnalisés
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ✓ Accessibilité AA
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ✓ TypeScript strict
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
}
