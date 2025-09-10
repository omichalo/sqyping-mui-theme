"use client";

import React from "react";
import {
  Box,
  Typography,
  Button,
  Chip,
  Badge,
  Stack,
  Grid,
  Paper,
} from "@mui/material";
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
} from "@mui/icons-material";

export default function ButtonsChipsPage() {
  return (
    <Box>
      <Typography variant="h1" sx={{ mb: 4 }}>
        Buttons & Chips
      </Typography>

      {/* Boutons */}
      <Paper sx={{ mb: 4, p: 3 }}>
        <Typography variant="h2" sx={{ mb: 3 }}>
          Boutons
        </Typography>

        <Grid container spacing={3}>
          {/* Boutons Contained */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Contained
            </Typography>
            <Stack spacing={2}>
              <Button variant="contained" size="small">
                Small
              </Button>
              <Button variant="contained" size="medium">
                Medium
              </Button>
              <Button variant="contained" size="large">
                Large
              </Button>
              <Button variant="contained" startIcon={<AddIcon />}>
                Avec icône
              </Button>
            </Stack>
          </Grid>

          {/* Boutons Outlined */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Outlined
            </Typography>
            <Stack spacing={2}>
              <Button variant="outlined" size="small">
                Small
              </Button>
              <Button variant="outlined" size="medium">
                Medium
              </Button>
              <Button variant="outlined" size="large">
                Large
              </Button>
              <Button variant="outlined" startIcon={<EditIcon />}>
                Avec icône
              </Button>
            </Stack>
          </Grid>

          {/* Boutons Text */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Text
            </Typography>
            <Stack spacing={2}>
              <Button variant="text" size="small">
                Small
              </Button>
              <Button variant="text" size="medium">
                Medium
              </Button>
              <Button variant="text" size="large">
                Large
              </Button>
              <Button variant="text" startIcon={<DeleteIcon />}>
                Avec icône
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Paper>

      {/* Chips */}
      <Paper sx={{ mb: 4, p: 3 }}>
        <Typography variant="h2" sx={{ mb: 3 }}>
          Chips
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Couleurs
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <Chip label="Default" />
              <Chip label="Primary" color="primary" />
              <Chip label="Secondary" color="secondary" />
              <Chip label="Success" color="success" />
              <Chip label="Warning" color="warning" />
              <Chip label="Error" color="error" />
              <Chip label="Info" color="info" />
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Variantes
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <Chip label="Filled" variant="filled" />
              <Chip label="Outlined" variant="outlined" />
              <Chip label="Deletable" onDelete={() => {}} />
              <Chip label="Clickable" onClick={() => {}} />
            </Stack>
          </Grid>
        </Grid>
      </Paper>

      {/* Badges */}
      <Paper sx={{ p: 3 }}>
        <Typography variant="h2" sx={{ mb: 3 }}>
          Badges
        </Typography>

        <Stack direction="row" spacing={4} alignItems="center">
          <Badge badgeContent={4} color="primary">
            <Button variant="contained">Messages</Button>
          </Badge>
          <Badge badgeContent={99} color="secondary">
            <Button variant="outlined">Notifications</Button>
          </Badge>
          <Badge badgeContent={1000} color="error">
            <Button variant="text">Erreurs</Button>
          </Badge>
          <Badge variant="dot" color="success">
            <Button variant="contained">En ligne</Button>
          </Badge>
        </Stack>
      </Paper>
    </Box>
  );
}
