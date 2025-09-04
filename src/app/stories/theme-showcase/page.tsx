"use client";

import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Chip,
  Stack,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { colors } from "@/theme/palette";

export default function ThemeShowcasePage() {
  const theme = useTheme();

  return (
    <Box sx={{ maxWidth: "100%", overflow: "hidden" }}>
      <Typography variant="h1" sx={{ mb: 4 }}>
        SQY PING Theme Showcase
      </Typography>

      {/* Palette de couleurs */}
      <Box
        sx={{ mb: 4, p: 3, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Typography variant="h2" sx={{ mb: 3 }}>
          Palette de couleurs
        </Typography>

        <Grid container spacing={3}>
          {/* Couleurs principales */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Couleurs principales
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    backgroundColor: colors.navy,
                    borderRadius: 2,
                    border: 1,
                    borderColor: "divider",
                  }}
                />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Navy (Primary)
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {colors.navy}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    backgroundColor: colors.orange,
                    borderRadius: 2,
                    border: 1,
                    borderColor: "divider",
                  }}
                />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Orange (Secondary)
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {colors.orange}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    backgroundColor: colors.blue,
                    borderRadius: 2,
                    border: 1,
                    borderColor: "divider",
                  }}
                />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Blue (Info)
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {colors.blue}
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>

          {/* Couleurs du thème */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Couleurs du thème
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 2,
                    border: 1,
                    borderColor: "divider",
                  }}
                />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Primary
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {theme.palette.primary.main}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    backgroundColor: theme.palette.secondary.main,
                    borderRadius: 2,
                    border: 1,
                    borderColor: "divider",
                  }}
                />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Secondary
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {theme.palette.secondary.main}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    backgroundColor: theme.palette.info.main,
                    borderRadius: 2,
                    border: 1,
                    borderColor: "divider",
                  }}
                />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Info
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {theme.palette.info.main}
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>

      {/* Typographie */}
      <Box
        sx={{ mb: 4, p: 3, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Typography variant="h2" sx={{ mb: 3 }}>
          Typographie
        </Typography>

        <Stack spacing={3}>
          {/* Titres standards */}
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Titres standards
            </Typography>
            <Stack spacing={1}>
              <Typography variant="h1">Heading 1 - Titre principal</Typography>
              <Typography variant="h2">Heading 2 - Sous-titre</Typography>
              <Typography variant="h3">Heading 3 - Section</Typography>
              <Typography variant="h4">Heading 4 - Sous-section</Typography>
              <Typography variant="h5">Heading 5 - Groupe</Typography>
              <Typography variant="h6">Heading 6 - Élément</Typography>
            </Stack>
          </Box>

          <Divider />

          {/* Corps de texte */}
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Corps de texte
            </Typography>
            <Stack spacing={1}>
              <Typography variant="subtitle1">
                Subtitle 1 - Texte d'introduction important
              </Typography>
              <Typography variant="subtitle2">
                Subtitle 2 - Texte d'introduction secondaire
              </Typography>
              <Typography variant="body1">
                Body 1 - Texte principal. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </Typography>
              <Typography variant="body2">
                Body 2 - Texte secondaire. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </Typography>
              <Typography variant="caption">
                Caption - Texte de légende ou d'information
              </Typography>
              <Typography variant="overline">
                Overline - Texte de catégorie
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Box>

      {/* Ombres */}
      <Box
        sx={{ mb: 4, p: 3, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Typography variant="h2" sx={{ mb: 3 }}>
          Ombres
        </Typography>

        <Grid container spacing={2}>
          {[1, 2, 4, 8, 12, 16].map((elevation) => (
            <Grid item xs={12} sm={6} md={4} key={elevation}>
              <Paper
                elevation={elevation}
                sx={{
                  p: 2,
                  textAlign: "center",
                  minHeight: 80,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="body2">Elevation {elevation}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Couleurs d'état */}
      <Box
        sx={{ mb: 4, p: 3, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Typography variant="h2" sx={{ mb: 3 }}>
          Couleurs d'état
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: "center" }}>
              <Chip label="Success" color="success" sx={{ mb: 1 }} />
              <Typography variant="body2" color="success.main">
                {theme.palette.success.main}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: "center" }}>
              <Chip label="Warning" color="warning" sx={{ mb: 1 }} />
              <Typography variant="body2" color="warning.main">
                {theme.palette.warning.main}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: "center" }}>
              <Chip label="Error" color="error" sx={{ mb: 1 }} />
              <Typography variant="body2" color="error.main">
                {theme.palette.error.main}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: "center" }}>
              <Chip label="Info" color="info" sx={{ mb: 1 }} />
              <Typography variant="body2" color="info.main">
                {theme.palette.info.main}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
