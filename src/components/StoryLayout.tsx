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
import Image from "next/image";

// Configuration des pages de démonstration
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

  const drawer = (
    <Box sx={{ width: 280, height: "100%" }}>
      <Box sx={{ p: 2, borderBottom: 1, borderColor: "divider" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
          <Image
            src={mode === "light" ? "/favicon.png" : "/images/sqyping-logo-dark.svg"}
            alt="SQY PING Logo"
            width={60}
            height={30}
            style={{ 
              margin: "0 auto"
            }}
          />
          <Typography variant="h6" color="primary" fontWeight="bold">
            SQY PING
          </Typography>
        </Box>
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
              icon={<LightModeIcon />}
              checkedIcon={<DarkModeIcon />}
            />
          }
          label={
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {mode === "dark" ? (
                <DarkModeIcon fontSize="small" />
              ) : (
                <LightModeIcon fontSize="small" />
              )}
              <Typography variant="body2">
                {mode === "dark" ? "Mode sombre" : "Mode clair"}
              </Typography>
            </Box>
          }
        />
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - 280px)` },
          ml: { md: "280px" },
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
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

      {/* Drawer */}
      <Box component="nav" sx={{ width: { md: 280 }, flexShrink: { md: 0 } }}>
        {/* Mobile drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Améliore les performances sur mobile
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 280,
            },
          }}
        >
          {drawer}
        </Drawer>

        {/* Desktop drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 280,
              position: "relative",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Contenu principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: `calc(100% - 280px)` },
          minHeight: "100vh",
          backgroundColor: "background.default",
        }}
      >
        <Toolbar />
        <Box sx={{ p: 3 }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default StoryLayout;
