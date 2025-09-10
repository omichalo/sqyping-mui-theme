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
  Card,
  CardContent,
} from "@mui/material";
import {
  Highlight,
  HighlightH1,
  HighlightH2,
  HighlightTitle,
} from "@/components/Highlight";
import { useTheme } from "@mui/material/styles";
import { colors } from "@/theme/palette";

function ThemeShowcasePage() {
  const theme = useTheme();

  return (
    <Box>
      <HighlightH1 sx={{ mb: 4 }}>SQY PING Theme Showcase</HighlightH1>

      {/* Palette de couleurs */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <HighlightH2 sx={{ mb: 3 }}>Palette de couleurs</HighlightH2>

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
        </CardContent>
      </Card>

      {/* Typographie */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <HighlightH2 sx={{ mb: 3 }}>Typographie</HighlightH2>

          <Stack spacing={3}>
            {/* Variantes personnalisées */}
            <Box>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Variantes personnalisées
              </Typography>
              <Stack spacing={2}>
                <Typography variant="display1">
                  Display 1 - Très grand titre
                </Typography>
                <Typography variant="eyebrow">
                  Eyebrow - Texte d'introduction
                </Typography>
                <HighlightTitle>
                  Highlight Title - Titre surligné
                </HighlightTitle>
              </Stack>
            </Box>

            <Divider />

            {/* Titres standards */}
            <Box>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Titres standards
              </Typography>
              <Stack spacing={1}>
                <Typography variant="h1">
                  Heading 1 - Titre principal
                </Typography>
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
                  consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </Typography>
                <Typography variant="body2">
                  Body 2 - Texte secondaire. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
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
        </CardContent>
      </Card>

      {/* Ombres */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <HighlightH2 sx={{ mb: 3 }}>Ombres</HighlightH2>

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
        </CardContent>
      </Card>

      {/* Couleurs d'état */}
      <Card>
        <CardContent>
          <HighlightH2 sx={{ mb: 3 }}>Couleurs d'état</HighlightH2>

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
        </CardContent>
      </Card>
    </Box>
  );
}

export default ThemeShowcasePage;
