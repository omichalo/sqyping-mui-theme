"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tabs,
  Tab,
  Breadcrumbs,
  Link,
  Stack,
  Card,
  CardContent,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon,
  AccountCircle as AccountCircleIcon,
  Dashboard as DashboardIcon,
  ShoppingCart as ShoppingCartIcon,
  Favorite as FavoriteIcon,
  NavigateNext as NavigateNextIcon,
} from "@mui/icons-material";
import { HighlightH1, HighlightH2 } from "@omichalo/sqyping-mui-theme";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function NavigationPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Toolbar>
        <Typography variant="h6" color="primary" fontWeight="bold">
          SQY PING
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {[
          { text: "Accueil", icon: <HomeIcon /> },
          { text: "Tableau de bord", icon: <DashboardIcon /> },
          { text: "Profil", icon: <PersonIcon /> },
          { text: "Panier", icon: <ShoppingCartIcon /> },
          { text: "Favoris", icon: <FavoriteIcon /> },
          { text: "Paramètres", icon: <SettingsIcon /> },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <HighlightH1 sx={{ mb: 4 }}>Navigation</HighlightH1>

      {/* AppBar */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <HighlightH2 sx={{ mb: 3 }}>AppBar</HighlightH2>

          <Box sx={{ flexGrow: 1, mb: 2 }}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  SQY PING
                </Typography>
                <IconButton size="large" color="inherit">
                  <SearchIcon />
                </IconButton>
                <IconButton size="large" color="inherit">
                  <NotificationsIcon />
                </IconButton>
                <IconButton size="large" color="inherit">
                  <AccountCircleIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
          </Box>

          <Typography variant="body2" color="text.secondary">
            AppBar avec icônes de navigation et actions utilisateur
          </Typography>
        </CardContent>
      </Card>

      {/* Drawer */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <HighlightH2 sx={{ mb: 3 }}>Drawer</HighlightH2>

          <Box
            sx={{
              display: "flex",
              height: 300,
              border: 1,
              borderColor: "divider",
              borderRadius: 2,
            }}
          >
            <Drawer
              variant="permanent"
              sx={{
                width: 250,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: 250,
                  boxSizing: "border-box",
                  position: "relative",
                },
              }}
            >
              {drawer}
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Contenu principal
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Le contenu principal de l'application s'affiche ici, à côté du
                drawer de navigation.
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <HighlightH2 sx={{ mb: 3 }}>Tabs</HighlightH2>

          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                aria-label="basic tabs example"
              >
                <Tab label="Accueil" />
                <Tab label="Produits" />
                <Tab label="Services" />
                <Tab label="Contact" />
              </Tabs>
            </Box>
            <TabPanel value={tabValue} index={0}>
              <Typography variant="h6" gutterBottom>
                Page d'accueil
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Contenu de la page d'accueil avec informations générales et
                navigation rapide.
              </Typography>
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              <Typography variant="h6" gutterBottom>
                Nos produits
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Catalogue de nos produits avec filtres et options de recherche.
              </Typography>
            </TabPanel>
            <TabPanel value={tabValue} index={2}>
              <Typography variant="h6" gutterBottom>
                Nos services
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description de nos services et solutions personnalisées.
              </Typography>
            </TabPanel>
            <TabPanel value={tabValue} index={3}>
              <Typography variant="h6" gutterBottom>
                Contactez-nous
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Informations de contact et formulaire de demande.
              </Typography>
            </TabPanel>
          </Box>
        </CardContent>
      </Card>

      {/* Breadcrumbs */}
      <Card>
        <CardContent>
          <HighlightH2 sx={{ mb: 3 }}>Breadcrumbs</HighlightH2>

          <Stack spacing={3}>
            <Box>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Breadcrumbs simples
              </Typography>
              <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                  Accueil
                </Link>
                <Link underline="hover" color="inherit" href="/products">
                  Produits
                </Link>
                <Typography color="text.primary">Détails</Typography>
              </Breadcrumbs>
            </Box>

            <Divider />

            <Box>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Breadcrumbs avec icônes
              </Typography>
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
              >
                <Link
                  underline="hover"
                  color="inherit"
                  href="/"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                  Accueil
                </Link>
                <Link
                  underline="hover"
                  color="inherit"
                  href="/products"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <ShoppingCartIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                  Produits
                </Link>
                <Typography
                  sx={{ display: "flex", alignItems: "center" }}
                  color="text.primary"
                >
                  <PersonIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                  Profil
                </Typography>
              </Breadcrumbs>
            </Box>

            <Divider />

            <Box>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Breadcrumbs personnalisés
              </Typography>
              <Breadcrumbs
                separator="›"
                aria-label="breadcrumb"
                sx={{
                  "& .MuiBreadcrumbs-separator": {
                    color: "primary.main",
                    fontWeight: "bold",
                  },
                }}
              >
                <Link underline="hover" color="inherit" href="/">
                  Accueil
                </Link>
                <Link underline="hover" color="inherit" href="/category">
                  Catégorie
                </Link>
                <Link underline="hover" color="inherit" href="/subcategory">
                  Sous-catégorie
                </Link>
                <Typography color="text.primary">Page actuelle</Typography>
              </Breadcrumbs>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
