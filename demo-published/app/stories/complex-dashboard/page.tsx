"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Avatar,
  IconButton,
  Button,
  Tabs,
  Tab,
  Stack,
  LinearProgress,
  Divider,
} from "@mui/material";
import {
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  People as PeopleIcon,
  ShoppingCart as ShoppingCartIcon,
  AttachMoney as AttachMoneyIcon,
  MoreVert as MoreVertIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { HighlightH1, HighlightH2 } from "@omichalo/sqyping-mui-theme";

// Données mock pour le dashboard
const statsData = [
  {
    title: "Utilisateurs actifs",
    value: "2,345",
    change: "+12%",
    trend: "up",
    icon: <PeopleIcon />,
    color: "primary",
  },
  {
    title: "Commandes",
    value: "1,234",
    change: "+8%",
    trend: "up",
    icon: <ShoppingCartIcon />,
    color: "secondary",
  },
  {
    title: "Revenus",
    value: "€45,678",
    change: "-3%",
    trend: "down",
    icon: <AttachMoneyIcon />,
    color: "success",
  },
  {
    title: "Conversion",
    value: "3.2%",
    change: "+15%",
    trend: "up",
    icon: <TrendingUpIcon />,
    color: "info",
  },
];

const tableData = [
  {
    id: 1,
    name: "Jean Dupont",
    email: "jean.dupont@example.com",
    status: "Actif",
    role: "Admin",
    lastLogin: "2024-01-15",
  },
  {
    id: 2,
    name: "Marie Martin",
    email: "marie.martin@example.com",
    status: "Actif",
    role: "Utilisateur",
    lastLogin: "2024-01-14",
  },
  {
    id: 3,
    name: "Pierre Durand",
    email: "pierre.durand@example.com",
    status: "Inactif",
    role: "Modérateur",
    lastLogin: "2024-01-10",
  },
  {
    id: 4,
    name: "Sophie Bernard",
    email: "sophie.bernard@example.com",
    status: "Actif",
    role: "Utilisateur",
    lastLogin: "2024-01-15",
  },
  {
    id: 5,
    name: "Lucas Petit",
    email: "lucas.petit@example.com",
    status: "En attente",
    role: "Utilisateur",
    lastLogin: "2024-01-13",
  },
];

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
      id={`dashboard-tabpanel-${index}`}
      aria-labelledby={`dashboard-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function ComplexDashboardPage() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Actif":
        return "success";
      case "Inactif":
        return "error";
      case "En attente":
        return "warning";
      default:
        return "default";
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Admin":
        return "primary";
      case "Modérateur":
        return "secondary";
      case "Utilisateur":
        return "info";
      default:
        return "default";
    }
  };

  return (
    <Box>
      <HighlightH1 sx={{ mb: 4 }}>Complex Dashboard</HighlightH1>

      {/* Statistiques */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {statsData.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      color="text.secondary"
                      gutterBottom
                      variant="body2"
                    >
                      {stat.title}
                    </Typography>
                    <Typography variant="h4" component="div" fontWeight="bold">
                      {stat.value}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                      {stat.trend === "up" ? (
                        <TrendingUpIcon color="success" fontSize="small" />
                      ) : (
                        <TrendingDownIcon color="error" fontSize="small" />
                      )}
                      <Typography
                        variant="body2"
                        color={
                          stat.trend === "up" ? "success.main" : "error.main"
                        }
                        sx={{ ml: 0.5 }}
                      >
                        {stat.change}
                      </Typography>
                    </Box>
                  </Box>
                  <Avatar
                    sx={{
                      bgcolor: `${stat.color}.main`,
                      width: 56,
                      height: 56,
                    }}
                  >
                    {stat.icon}
                  </Avatar>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Tabs pour différentes vues */}
      <Card sx={{ mb: 4 }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="dashboard tabs"
          >
            <Tab label="Vue d'ensemble" />
            <Tab label="Utilisateurs" />
            <Tab label="Analytics" />
            <Tab label="Rapports" />
          </Tabs>
        </Box>

        <TabPanel value={tabValue} index={0}>
          <Grid container spacing={3}>
            {/* Graphique placeholder */}
            <Grid item xs={12} md={8}>
              <Card>
                <CardHeader title="Évolution des ventes" />
                <CardContent>
                  <Box
                    sx={{
                      height: 300,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "grey.50",
                      borderRadius: 2,
                      border: 1,
                      borderColor: "divider",
                    }}
                  >
                    <Typography variant="h6" color="text.secondary">
                      Graphique des ventes
                      <br />
                      (Intégration @mui/x-charts)
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Activité récente */}
            <Grid item xs={12} md={4}>
              <Card>
                <CardHeader title="Activité récente" />
                <CardContent>
                  <Stack spacing={2}>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Nouvelle commande #1234
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Il y a 5 minutes
                      </Typography>
                    </Box>
                    <Divider />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Utilisateur inscrit: Marie Martin
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Il y a 15 minutes
                      </Typography>
                    </Box>
                    <Divider />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Paiement reçu: €299.99
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Il y a 1 heure
                      </Typography>
                    </Box>
                    <Divider />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Nouveau produit ajouté
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Il y a 2 heures
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Card>
            <CardHeader
              title="Gestion des utilisateurs"
              action={
                <Button variant="contained" color="secondary" size="small">
                  Ajouter un utilisateur
                </Button>
              }
            />
            <CardContent>
              <TableContainer component={Paper} variant="outlined">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Utilisateur</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Statut</TableCell>
                      <TableCell>Rôle</TableCell>
                      <TableCell>Dernière connexion</TableCell>
                      <TableCell align="right">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tableData.map((row) => (
                      <TableRow key={row.id} hover>
                        <TableCell>
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Avatar sx={{ mr: 2, width: 32, height: 32 }}>
                              {row.name.charAt(0)}
                            </Avatar>
                            {row.name}
                          </Box>
                        </TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>
                          <Chip
                            label={row.status}
                            color={getStatusColor(row.status) as any}
                            size="small"
                          />
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={row.role}
                            color={getRoleColor(row.role) as any}
                            size="small"
                            variant="outlined"
                          />
                        </TableCell>
                        <TableCell>{row.lastLogin}</TableCell>
                        <TableCell align="right">
                          <IconButton size="small">
                            <EditIcon />
                          </IconButton>
                          <IconButton size="small" color="error">
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader title="Performance" />
                <CardContent>
                  <Stack spacing={3}>
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 1,
                        }}
                      >
                        <Typography variant="body2">
                          Temps de chargement
                        </Typography>
                        <Typography variant="body2">2.3s</Typography>
                      </Box>
                      <LinearProgress variant="determinate" value={75} />
                    </Box>
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 1,
                        }}
                      >
                        <Typography variant="body2">
                          Taux de conversion
                        </Typography>
                        <Typography variant="body2">3.2%</Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={32}
                        color="secondary"
                      />
                    </Box>
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 1,
                        }}
                      >
                        <Typography variant="body2">
                          Satisfaction client
                        </Typography>
                        <Typography variant="body2">4.8/5</Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={96}
                        color="success"
                      />
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader title="Répartition des revenus" />
                <CardContent>
                  <Box
                    sx={{
                      height: 200,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "grey.50",
                      borderRadius: 2,
                      border: 1,
                      borderColor: "divider",
                    }}
                  >
                    <Typography variant="body1" color="text.secondary">
                      Graphique en secteurs
                      <br />
                      (Intégration @mui/x-charts)
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={tabValue} index={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardHeader title="Rapport mensuel" />
                <CardContent>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Rapport complet des performances du mois de janvier 2024.
                  </Typography>
                  <Button variant="outlined" fullWidth>
                    Télécharger PDF
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardHeader title="Rapport trimestriel" />
                <CardContent>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Analyse des tendances du dernier trimestre.
                  </Typography>
                  <Button variant="outlined" fullWidth>
                    Télécharger PDF
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardHeader title="Rapport annuel" />
                <CardContent>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Bilan complet de l'année 2023.
                  </Typography>
                  <Button variant="outlined" fullWidth>
                    Télécharger PDF
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>
      </Card>
    </Box>
  );
}
