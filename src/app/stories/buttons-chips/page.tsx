"use client";

import React from "react";
import {
  Box,
  Typography,
  Button,
  ButtonGroup,
  IconButton,
  Chip,
  Badge,
  Stack,
  Grid,
  Card,
  CardContent,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Save as SaveIcon,
  Send as SendIcon,
  Notifications as NotificationsIcon,
  ShoppingCart as ShoppingCartIcon,
} from "@mui/icons-material";
import { HighlightH1, HighlightH2 } from "@/components/Highlight";

export default function ButtonsAndChipsPage() {
  const [alignment, setAlignment] = React.useState<string | null>("left");

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <Box>
      <HighlightH1 sx={{ mb: 4 }}>Buttons & Chips</HighlightH1>

      {/* Boutons */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <HighlightH2 sx={{ mb: 3 }}>Boutons</HighlightH2>

          <Stack spacing={4}>
            {/* Boutons contenus */}
            <Box>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Boutons Contained
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                <Button variant="contained">Primary</Button>
                <Button variant="contained" color="secondary">
                  Secondary
                </Button>
                <Button variant="contained" color="info">
                  Info
                </Button>
                <Button variant="contained" color="success">
                  Success
                </Button>
                <Button variant="contained" color="warning">
                  Warning
                </Button>
                <Button variant="contained" color="error">
                  Error
                </Button>
                <Button variant="contained" disabled>
                  Disabled
                </Button>
              </Stack>
            </Box>

            <Divider />

            {/* Boutons outlined */}
            <Box>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Boutons Outlined
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                <Button variant="outlined">Primary</Button>
                <Button variant="outlined" color="secondary">
                  Secondary
                </Button>
                <Button variant="outlined" color="info">
                  Info
                </Button>
                <Button variant="outlined" color="success">
                  Success
                </Button>
                <Button variant="outlined" color="warning">
                  Warning
                </Button>
                <Button variant="outlined" color="error">
                  Error
                </Button>
                <Button variant="outlined" disabled>
                  Disabled
                </Button>
              </Stack>
            </Box>

            <Divider />

            {/* Boutons text */}
            <Box>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Boutons Text
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                <Button variant="text">Primary</Button>
                <Button variant="text" color="secondary">
                  Secondary
                </Button>
                <Button variant="text" color="info">
                  Info
                </Button>
                <Button variant="text" color="success">
                  Success
                </Button>
                <Button variant="text" color="warning">
                  Warning
                </Button>
                <Button variant="text" color="error">
                  Error
                </Button>
                <Button variant="text" disabled>
                  Disabled
                </Button>
              </Stack>
            </Box>

            <Divider />

            {/* Boutons avec icônes */}
            <Box>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Boutons avec icônes
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                <Button variant="contained" startIcon={<AddIcon />}>
                  Ajouter
                </Button>
                <Button variant="outlined" startIcon={<EditIcon />}>
                  Modifier
                </Button>
                <Button variant="contained" endIcon={<SendIcon />}>
                  Envoyer
                </Button>
                <Button variant="outlined" endIcon={<SaveIcon />}>
                  Sauvegarder
                </Button>
              </Stack>
            </Box>

            <Divider />

            {/* Boutons icônes */}
            <Box>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Boutons icônes
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                <IconButton color="primary">
                  <AddIcon />
                </IconButton>
                <IconButton color="secondary">
                  <EditIcon />
                </IconButton>
                <IconButton color="error">
                  <DeleteIcon />
                </IconButton>
                <IconButton color="info">
                  <SaveIcon />
                </IconButton>
                <IconButton disabled>
                  <SendIcon />
                </IconButton>
              </Stack>
            </Box>

            <Divider />

            {/* Groupes de boutons */}
            <Box>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Groupes de boutons
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                <ButtonGroup variant="contained">
                  <Button>Gauche</Button>
                  <Button>Centre</Button>
                  <Button>Droite</Button>
                </ButtonGroup>
                <ButtonGroup variant="outlined">
                  <Button>Un</Button>
                  <Button>Deux</Button>
                  <Button>Trois</Button>
                </ButtonGroup>
                <ButtonGroup variant="text">
                  <Button>Alpha</Button>
                  <Button>Beta</Button>
                  <Button>Gamma</Button>
                </ButtonGroup>
              </Stack>
            </Box>

            <Divider />

            {/* Toggle Buttons */}
            <Box>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Toggle Buttons
              </Typography>
              <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
              >
                <ToggleButton value="left" aria-label="left aligned">
                  <EditIcon />
                </ToggleButton>
                <ToggleButton value="center" aria-label="centered">
                  <SaveIcon />
                </ToggleButton>
                <ToggleButton value="right" aria-label="right aligned">
                  <SendIcon />
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>
          </Stack>
        </CardContent>
      </Card>

      {/* Chips */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <HighlightH2 sx={{ mb: 3 }}>Chips</HighlightH2>

          <Stack spacing={4}>
            {/* Chips basiques */}
            <Box>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Chips basiques
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Chip label="Default" />
                <Chip label="Primary" color="primary" />
                <Chip label="Secondary" color="secondary" />
                <Chip label="Info" color="info" />
                <Chip label="Success" color="success" />
                <Chip label="Warning" color="warning" />
                <Chip label="Error" color="error" />
              </Stack>
            </Box>

            <Divider />

            {/* Chips avec icônes */}
            <Box>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Chips avec icônes
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Chip icon={<AddIcon />} label="Ajouter" />
                <Chip icon={<EditIcon />} label="Modifier" color="primary" />
                <Chip icon={<DeleteIcon />} label="Supprimer" color="error" />
                <Chip icon={<SaveIcon />} label="Sauvegarder" color="success" />
              </Stack>
            </Box>

            <Divider />

            {/* Chips supprimables */}
            <Box>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Chips supprimables
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Chip
                  label="Supprimable"
                  onDelete={() => {}}
                  deleteIcon={<DeleteIcon />}
                />
                <Chip
                  label="Primary"
                  color="primary"
                  onDelete={() => {}}
                  deleteIcon={<DeleteIcon />}
                />
                <Chip
                  label="Secondary"
                  color="secondary"
                  onDelete={() => {}}
                  deleteIcon={<DeleteIcon />}
                />
              </Stack>
            </Box>

            <Divider />

            {/* Chips cliquables */}
            <Box>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Chips cliquables
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Chip label="Cliquable" clickable />
                <Chip label="Primary" color="primary" clickable />
                <Chip label="Secondary" color="secondary" clickable />
                <Chip label="Désactivé" disabled />
              </Stack>
            </Box>
          </Stack>
        </CardContent>
      </Card>

      {/* Badges */}
      <Card>
        <CardContent>
          <HighlightH2 sx={{ mb: 3 }}>Badges</HighlightH2>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: "center" }}>
                <Badge badgeContent={4} color="primary">
                  <NotificationsIcon />
                </Badge>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Badge simple
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: "center" }}>
                <Badge badgeContent={99} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Badge avec nombre
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: "center" }}>
                <Badge badgeContent={1000} color="error" max={999}>
                  <NotificationsIcon />
                </Badge>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Badge avec max
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: "center" }}>
                <Badge variant="dot" color="success">
                  <NotificationsIcon />
                </Badge>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Badge dot
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
