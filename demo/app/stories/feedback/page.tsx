"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Alert,
  AlertTitle,
  Snackbar,
  Button,
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Stack,
  Grid,
  Card,
  CardContent,
  Divider,
  Chip,
  LinearProgress,
  CircularProgress,
} from "@mui/material";
import {
  Close as CloseIcon,
  Info as InfoIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
  CheckCircle as CheckCircleIcon,
  Help as HelpIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
} from "@mui/icons-material";
import { HighlightH1, HighlightH2 } from "@sqyping/mui-theme";

export default function FeedbackPage() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(true);

  const handleSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  return (
    <Box>
      <HighlightH1 sx={{ mb: 4 }}>Feedback</HighlightH1>

      {/* Alertes */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <HighlightH2 sx={{ mb: 3 }}>Alertes</HighlightH2>

          <Stack spacing={3}>
            {/* Alertes avec icônes */}
            <Box>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Alertes avec icônes
              </Typography>
              <Stack spacing={2}>
                <Alert severity="error" icon={<ErrorIcon />}>
                  <AlertTitle>Erreur</AlertTitle>
                  Une erreur s'est produite lors du traitement de votre demande.
                </Alert>
                <Alert severity="warning" icon={<WarningIcon />}>
                  <AlertTitle>Attention</AlertTitle>
                  Veuillez vérifier les informations saisies avant de continuer.
                </Alert>
                <Alert severity="info" icon={<InfoIcon />}>
                  <AlertTitle>Information</AlertTitle>
                  Cette fonctionnalité sera disponible dans la prochaine
                  version.
                </Alert>
                <Alert severity="success" icon={<CheckCircleIcon />}>
                  <AlertTitle>Succès</AlertTitle>
                  Votre demande a été traitée avec succès.
                </Alert>
              </Stack>
            </Box>

            <Divider />

            {/* Alertes sans icônes */}
            <Box>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Alertes sans icônes
              </Typography>
              <Stack spacing={2}>
                <Alert severity="error">Erreur de connexion au serveur.</Alert>
                <Alert severity="warning">Données non sauvegardées.</Alert>
                <Alert severity="info">Nouvelle mise à jour disponible.</Alert>
                <Alert severity="success">
                  Opération terminée avec succès.
                </Alert>
              </Stack>
            </Box>

            <Divider />

            {/* Alertes avec actions */}
            <Box>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Alertes avec actions
              </Typography>
              <Stack spacing={2}>
                <Alert
                  severity="info"
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => setAlertOpen(false)}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                >
                  Cette alerte peut être fermée.
                </Alert>
                <Alert
                  severity="warning"
                  action={
                    <Button color="inherit" size="small">
                      ANNULER
                    </Button>
                  }
                >
                  Action en cours, vous pouvez l'annuler.
                </Alert>
              </Stack>
            </Box>
          </Stack>
        </CardContent>
      </Card>

      {/* Snackbars */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <HighlightH2 sx={{ mb: 3 }}>Snackbars</HighlightH2>

          <Stack spacing={2}>
            <Button variant="contained" color="secondary" onClick={() => setSnackbarOpen(true)}>
              Ouvrir Snackbar
            </Button>

            <Snackbar
              open={snackbarOpen}
              autoHideDuration={6000}
              onClose={handleSnackbarClose}
              message="Message de notification"
              action={
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={handleSnackbarClose}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              }
            />

            <Typography variant="body2" color="text.secondary">
              Cliquez sur le bouton ci-dessus pour afficher une snackbar de
              notification.
            </Typography>
          </Stack>
        </CardContent>
      </Card>

      {/* Tooltips */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <HighlightH2 sx={{ mb: 3 }}>Tooltips</HighlightH2>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: "center" }}>
                <Tooltip title="Tooltip simple">
                  <Button variant="contained" color="secondary">Hover me</Button>
                </Tooltip>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Tooltip simple
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: "center" }}>
                <Tooltip title="Tooltip avec placement en haut" placement="top">
                  <Button variant="outlined">Top</Button>
                </Tooltip>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Placement top
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: "center" }}>
                <Tooltip
                  title="Tooltip avec placement à droite"
                  placement="right"
                >
                  <Button variant="text">Right</Button>
                </Tooltip>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Placement right
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: "center" }}>
                <Tooltip
                  title="Tooltip avec placement en bas"
                  placement="bottom"
                >
                  <IconButton>
                    <HelpIcon />
                  </IconButton>
                </Tooltip>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Placement bottom
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Dialogs */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <HighlightH2 sx={{ mb: 3 }}>Dialogs</HighlightH2>

          <Stack spacing={2}>
            <Button variant="contained" color="secondary" onClick={handleDialogOpen}>
              Ouvrir Dialog
            </Button>

            <Dialog
              open={dialogOpen}
              onClose={handleDialogClose}
              aria-labelledby="dialog-title"
              aria-describedby="dialog-description"
            >
              <DialogTitle id="dialog-title">Confirmer l'action</DialogTitle>
              <DialogContent>
                <DialogContentText id="dialog-description">
                  Êtes-vous sûr de vouloir supprimer cet élément ? Cette action
                  est irréversible.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleDialogClose}>Annuler</Button>
                <Button onClick={handleDialogClose} autoFocus color="error">
                  Supprimer
                </Button>
              </DialogActions>
            </Dialog>

            <Typography variant="body2" color="text.secondary">
              Cliquez sur le bouton ci-dessus pour ouvrir un dialog de
              confirmation.
            </Typography>
          </Stack>
        </CardContent>
      </Card>

      {/* Progress Indicators */}
      <Card>
        <CardContent>
          <HighlightH2 sx={{ mb: 3 }}>Indicateurs de progression</HighlightH2>

          <Stack spacing={4}>
            {/* Linear Progress */}
            <Box>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Barres de progression linéaires
              </Typography>
              <Stack spacing={2}>
                <Box>
                  <Typography variant="body2" gutterBottom>
                    Progression indéterminée
                  </Typography>
                  <LinearProgress />
                </Box>
                <Box>
                  <Typography variant="body2" gutterBottom>
                    Progression 25%
                  </Typography>
                  <LinearProgress variant="determinate" value={25} />
                </Box>
                <Box>
                  <Typography variant="body2" gutterBottom>
                    Progression 50%
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={50}
                    color="secondary"
                  />
                </Box>
                <Box>
                  <Typography variant="body2" gutterBottom>
                    Progression 75%
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={75}
                    color="success"
                  />
                </Box>
              </Stack>
            </Box>

            <Divider />

            {/* Circular Progress */}
            <Box>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Indicateurs circulaires
              </Typography>
              <Stack direction="row" spacing={4} alignItems="center">
                <Box sx={{ textAlign: "center" }}>
                  <CircularProgress />
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Indéterminé
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <CircularProgress variant="determinate" value={25} />
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    25%
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <CircularProgress
                    variant="determinate"
                    value={50}
                    color="secondary"
                  />
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    50%
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <CircularProgress
                    variant="determinate"
                    value={75}
                    color="success"
                  />
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    75%
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
