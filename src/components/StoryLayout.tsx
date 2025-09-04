"use client";

import React, { useState } from "react";
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  useTheme,
  useMediaQuery,
  Divider,
  Switch,
  FormControlLabel,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Palette as PaletteIcon,
  SmartButton as ButtonIcon,
  Description as FormIcon,
  Navigation as NavIcon,
  Feedback as FeedbackIcon,
  ViewModule as CardIcon,
  Dashboard as DashboardIcon,
  Assignment as FormPageIcon,
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
} from "@mui/icons-material";
import { useColorMode } from "@/providers/AppThemeProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DRAWER_WIDTH = 280;

interface StoryLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const StoryLayout: React.FC<StoryLayoutProps> = ({
  children,
  title = "SQY PING Theme Stories",
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { mode, toggleColorMode } = useColorMode();
  const pathname = usePathname();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const storyPages = [
    {
      title: "Theme Showcase",
      path: "/stories/theme-showcase",
      icon: <PaletteIcon />,
      description: "Palette de couleurs et typographies",
    },
    {
      title: "Buttons & Chips",
      path: "/stories/buttons-chips",
      icon: <ButtonIcon />,
      description: "Boutons, Chips et Badges",
    },
    {
      title: "Forms",
      path: "/stories/forms",
      icon: <FormIcon />,
      description: "Champs de formulaire et validation",
    },
    {
      title: "Navigation",
      path: "/stories/navigation",
      icon: <NavIcon />,
      description: "AppBar, Drawer, Tabs, Breadcrumbs",
    },
    {
      title: "Feedback",
      path: "/stories/feedback",
      icon: <FeedbackIcon />,
      description: "Alertes, Snackbars, Tooltips, Dialogs",
    },
    {
      title: "Cards & Lists",
      path: "/stories/cards-lists",
      icon: <CardIcon />,
      description: "Cards, Accordions, Listes, Avatars",
    },
    {
      title: "Complex Dashboard",
      path: "/stories/complex-dashboard",
      icon: <DashboardIcon />,
      description: "Tableau de bord avec graphiques",
    },
    {
      title: "Complex Form Page",
      path: "/stories/complex-form-page",
      icon: <FormPageIcon />,
      description: "Formulaire multi-sections avec stepper",
    },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* AppBar - En haut */}
      <AppBar position="static" sx={{ zIndex: 1300 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="ouvrir le menu"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <IconButton color="inherit" onClick={toggleColorMode}>
            {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Contenu principal avec sidebar */}
      <Box sx={{ display: "flex", flex: 1 }}>
        {/* Sidebar - À gauche */}
        <Drawer
          variant={isMobile ? "temporary" : "permanent"}
          open={isMobile ? mobileOpen : true}
          onClose={handleDrawerToggle}
          sx={{
            width: DRAWER_WIDTH,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: DRAWER_WIDTH,
              boxSizing: "border-box",
              position: "relative",
            },
          }}
        >
          <Box sx={{ p: 2, borderBottom: 1, borderColor: "divider" }}>
            <Typography variant="h6" color="primary" fontWeight="bold">
              SQY PING
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Theme Stories
            </Typography>
          </Box>

          <List sx={{ px: 1, py: 2 }}>
            {storyPages.map((page) => (
              <ListItem key={page.path} disablePadding>
                <ListItemButton
                  component={Link}
                  href={page.path}
                  selected={pathname === page.path}
                  sx={{
                    borderRadius: 2,
                    mb: 0.5,
                    "&.Mui-selected": {
                      backgroundColor: "primary.main",
                      color: "primary.contrastText",
                      "&:hover": {
                        backgroundColor: "primary.dark",
                      },
                      "& .MuiListItemIcon-root": {
                        color: "primary.contrastText",
                      },
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 40 }}>{page.icon}</ListItemIcon>
                  <ListItemText
                    primary={page.title}
                    secondary={page.description}
                    primaryTypographyProps={{
                      fontSize: "0.875rem",
                      fontWeight: 500,
                    }}
                    secondaryTypographyProps={{ fontSize: "0.75rem" }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ mx: 2 }} />

          <Box sx={{ p: 2 }}>
            <FormControlLabel
              control={
                <Switch
                  checked={mode === "dark"}
                  onChange={toggleColorMode}
                  sx={{
                    "& .MuiSwitch-thumb": {
                      backgroundColor: mode === "dark" ? "#fff" : "#ffa726",
                    },
                    "& .MuiSwitch-track": {
                      backgroundColor: mode === "dark" ? "#1976d2" : "#ffcc02",
                      opacity: 1,
                    },
                  }}
                />
              }
              label={
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  {mode === "dark" ? (
                    <DarkModeIcon
                      fontSize="small"
                      sx={{ color: "primary.contrastText" }}
                    />
                  ) : (
                    <LightModeIcon
                      fontSize="small"
                      sx={{ color: "warning.dark" }}
                    />
                  )}
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 500,
                      color: "text.primary",
                    }}
                  >
                    {mode === "dark" ? "Mode sombre" : "Mode clair"}
                  </Typography>
                </Box>
              }
            />
          </Box>
        </Drawer>

        {/* Contenu principal - À droite */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            backgroundColor: "background.default",
            p: 3,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default StoryLayout;
