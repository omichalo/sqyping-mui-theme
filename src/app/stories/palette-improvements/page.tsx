"use client";

import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  Stack,
  Alert,
  AlertTitle,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { HighlightH1, HighlightTitle } from "@/components/Highlight";

export default function PaletteImprovementsPage() {
  const theme = useTheme();

  return (
    <Box>
      <HighlightH1 sx={{ mb: 4 }}>Améliorations de la Palette SQY PING</HighlightH1>

      <Alert severity="success" sx={{ mb: 4 }}>
        <AlertTitle>Palette optimisée</AlertTitle>
        Les couleurs ont été améliorées pour une meilleure cohérence et accessibilité.
      </Alert>

      {/* Couleurs système personnalisées */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <HighlightTitle sx={{ mb: 3 }}>Couleurs Système Personnalisées</HighlightTitle>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Les couleurs error, warning et success ont été personnalisées pour s'harmoniser avec la palette SQY PING.
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <Chip 
                  label="Error" 
                  color="error" 
                  sx={{ mb: 2, fontSize: "1rem", height: 40 }}
                />
                <Typography variant="body2" color="error.main">
                  Rouge chaleureux inspiré de l'orange SQY PING
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <Chip 
                  label="Warning" 
                  color="warning" 
                  sx={{ mb: 2, fontSize: "1rem", height: 40 }}
                />
                <Typography variant="body2" color="warning.main">
                  Utilise directement l'orange SQY PING
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <Chip 
                  label="Success" 
                  color="success" 
                  sx={{ mb: 2, fontSize: "1rem", height: 40 }}
                />
                <Typography variant="body2" color="success.main">
                  Vert moderne harmonieux avec la palette
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Palette Grey personnalisée */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <HighlightTitle sx={{ mb: 3 }}>Palette Grey Optimisée</HighlightTitle>
          <Typography variant="body1" sx={{ mb: 3 }}>
            La palette grey a été personnalisée avec des nuances qui s'harmonisent avec navy et bleu.
          </Typography>
          
          <Grid container spacing={2}>
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
              <Grid item xs={6} sm={4} md={2.4} key={shade}>
                <Box
                  sx={{
                    height: 60,
                    backgroundColor: theme.palette.grey[shade as keyof typeof theme.palette.grey],
                    borderRadius: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 1,
                    border: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: shade > 500 ? "white" : "black",
                      fontWeight: 600,
                    }}
                  >
                    {shade}
                  </Typography>
                </Box>
                <Typography variant="caption" display="block" textAlign="center">
                  {theme.palette.grey[shade as keyof typeof theme.palette.grey]}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      {/* Couleurs personnalisées */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <HighlightTitle sx={{ mb: 3 }}>Couleurs Personnalisées</HighlightTitle>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Nouvelles couleurs personnalisées pour éviter les problèmes de contraste.
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <Box>
                  <Typography variant="h6" sx={{ mb: 1 }}>Accent Light</Typography>
                  <Box
                    sx={{
                      height: 40,
                      backgroundColor: theme.palette.custom.accentLight,
                      borderRadius: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontWeight: 600,
                    }}
                  >
                    {theme.palette.custom.accentLight}
                  </Box>
                  <Typography variant="caption" color="text.secondary">
                    Bleu plus clair pour éviter le contraste faible avec navy
                  </Typography>
                </Box>
                
                <Box>
                  <Typography variant="h6" sx={{ mb: 1 }}>Navy Light</Typography>
                  <Box
                    sx={{
                      height: 40,
                      backgroundColor: theme.palette.custom.navyLight,
                      borderRadius: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontWeight: 600,
                    }}
                  >
                    {theme.palette.custom.navyLight}
                  </Box>
                  <Typography variant="caption" color="text.secondary">
                    Navy clair pour les textes sur fond clair
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <Box>
                  <Typography variant="h6" sx={{ mb: 1 }}>Navy Text</Typography>
                  <Box
                    sx={{
                      height: 40,
                      backgroundColor: theme.palette.custom.navyText,
                      borderRadius: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontWeight: 600,
                    }}
                  >
                    {theme.palette.custom.navyText}
                  </Box>
                  <Typography variant="caption" color="text.secondary">
                    Navy foncé pour les textes sur fond clair
                  </Typography>
                </Box>
                
                <Box>
                  <Typography variant="h6" sx={{ mb: 1 }}>Surface</Typography>
                  <Box
                    sx={{
                      height: 40,
                      backgroundColor: theme.palette.custom.surface,
                      borderRadius: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "black",
                      fontWeight: 600,
                      border: "1px solid",
                      borderColor: "divider",
                    }}
                  >
                    {theme.palette.custom.surface}
                  </Box>
                  <Typography variant="caption" color="text.secondary">
                    Surface de fond personnalisée
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Exemples d'utilisation */}
      <Card>
        <CardContent>
          <HighlightTitle sx={{ mb: 3 }}>Exemples d'Utilisation</HighlightTitle>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ mb: 2 }}>✅ Bonnes Combinaisons</Typography>
              <Stack spacing={1}>
                <Box sx={{ p: 2, bgcolor: "primary.main", color: "white", borderRadius: 1 }}>
                  <Typography>Navy sur blanc (contraste excellent)</Typography>
                </Box>
                <Box sx={{ p: 2, bgcolor: "custom.accentLight", color: "white", borderRadius: 1 }}>
                  <Typography>Bleu clair sur blanc (contraste bon)</Typography>
                </Box>
                <Box sx={{ p: 2, bgcolor: "secondary.main", color: "white", borderRadius: 1 }}>
                  <Typography>Orange sur blanc (contraste bon)</Typography>
                </Box>
              </Stack>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ mb: 2 }}>⚠️ Combinaisons à Éviter</Typography>
              <Stack spacing={1}>
                <Box sx={{ p: 2, bgcolor: "primary.main", color: "info.main", borderRadius: 1, opacity: 0.7 }}>
                  <Typography>Bleu sur navy (contraste faible - 2.1:1)</Typography>
                </Box>
                <Box sx={{ p: 2, bgcolor: "grey.800", color: "grey.600", borderRadius: 1, opacity: 0.7 }}>
                  <Typography>Gris clair sur gris foncé (contraste insuffisant)</Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
