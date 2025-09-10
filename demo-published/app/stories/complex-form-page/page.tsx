"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  Switch,
  Slider,
  Autocomplete,
  Card,
  CardContent,
  CardActions,
  Grid,
  Stack,
  Divider,
  Alert,
  Chip,
  Avatar,
  IconButton,
  LinearProgress,
} from "@mui/material";
import {
  CloudUpload as CloudUploadIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
  Check as CheckIcon,
} from "@mui/icons-material";
import { HighlightH1, HighlightH2 } from "@omichalo/sqyping-mui-theme";

const steps = [
  "Informations personnelles",
  "Préférences",
  "Documents",
  "Validation",
];

const countries = [
  { code: "FR", label: "France" },
  { code: "BE", label: "Belgique" },
  { code: "CH", label: "Suisse" },
  { code: "CA", label: "Canada" },
  { code: "US", label: "États-Unis" },
];

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Python",
  "Java",
  "C#",
  "PHP",
  "Vue.js",
  "Angular",
];

export default function ComplexFormPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    // Étape 1: Informations personnelles
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    birthDate: "",

    // Étape 2: Préférences
    newsletter: false,
    notifications: true,
    theme: "light",
    language: "fr",
    experience: 5,
    skills: [] as string[],

    // Étape 3: Documents
    resume: null as File | null,
    coverLetter: null as File | null,
    portfolio: "",

    // Étape 4: Validation
    terms: false,
    privacy: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Validation en temps réel
    if (field === "email" && value && !/\S+@\S+\.\S+/.test(value)) {
      setErrors((prev) => ({ ...prev, [field]: "Email invalide" }));
    } else {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleFileUpload = (field: string, file: File | null) => {
    setFormData((prev) => ({ ...prev, [field]: file }));
  };

  const handleNext = () => {
    if (validateStep(activeStep)) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 0:
        if (!formData.firstName)
          newErrors.firstName = "Le prénom est obligatoire";
        if (!formData.lastName) newErrors.lastName = "Le nom est obligatoire";
        if (!formData.email) newErrors.email = "L'email est obligatoire";
        if (!formData.country) newErrors.country = "Le pays est obligatoire";
        break;
      case 1:
        if (formData.skills.length === 0)
          newErrors.skills = "Au moins une compétence est requise";
        break;
      case 2:
        if (!formData.resume) newErrors.resume = "Le CV est obligatoire";
        break;
      case 3:
        if (!formData.terms)
          newErrors.terms = "Vous devez accepter les conditions";
        if (!formData.privacy)
          newErrors.privacy =
            "Vous devez accepter la politique de confidentialité";
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateStep(3)) return;

    setIsSubmitting(true);

    // Simulation d'envoi
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    console.log("Form submitted:", formData);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Prénom *"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                error={!!errors.firstName}
                helperText={errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Nom *"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                error={!!errors.lastName}
                helperText={errors.lastName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email *"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Téléphone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth error={!!errors.country}>
                <InputLabel>Pays *</InputLabel>
                <Select
                  value={formData.country}
                  label="Pays *"
                  onChange={(e) => handleInputChange("country", e.target.value)}
                >
                  {countries.map((country) => (
                    <MenuItem key={country.code} value={country.code}>
                      {country.label}
                    </MenuItem>
                  ))}
                </Select>
                {errors.country && (
                  <Typography
                    variant="caption"
                    color="error"
                    sx={{ mt: 1, ml: 2 }}
                  >
                    {errors.country}
                  </Typography>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Date de naissance"
                type="date"
                value={formData.birthDate}
                onChange={(e) => handleInputChange("birthDate", e.target.value)}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>
        );

      case 1:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Préférences de communication
              </Typography>
              <Stack spacing={2}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={formData.newsletter}
                      onChange={(e) =>
                        handleInputChange("newsletter", e.target.checked)
                      }
                    />
                  }
                  label="Recevoir la newsletter"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={formData.notifications}
                      onChange={(e) =>
                        handleInputChange("notifications", e.target.checked)
                      }
                    />
                  }
                  label="Notifications push"
                />
              </Stack>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Thème préféré</InputLabel>
                <Select
                  value={formData.theme}
                  label="Thème préféré"
                  onChange={(e) => handleInputChange("theme", e.target.value)}
                >
                  <MenuItem value="light">Clair</MenuItem>
                  <MenuItem value="dark">Sombre</MenuItem>
                  <MenuItem value="auto">Automatique</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Langue</InputLabel>
                <Select
                  value={formData.language}
                  label="Langue"
                  onChange={(e) =>
                    handleInputChange("language", e.target.value)
                  }
                >
                  <MenuItem value="fr">Français</MenuItem>
                  <MenuItem value="en">English</MenuItem>
                  <MenuItem value="es">Español</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Niveau d'expérience: {formData.experience} ans
              </Typography>
              <Slider
                value={formData.experience}
                onChange={(_, value) => handleInputChange("experience", value)}
                min={0}
                max={20}
                step={1}
                marks
                valueLabelDisplay="auto"
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Compétences *
              </Typography>
              <Autocomplete
                multiple
                options={skills}
                value={formData.skills}
                onChange={(_, value) => handleInputChange("skills", value)}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip
                      variant="outlined"
                      label={option}
                      {...getTagProps({ index })}
                      key={option}
                    />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Sélectionnez vos compétences"
                    error={!!errors.skills}
                    helperText={errors.skills}
                  />
                )}
              />
            </Grid>
          </Grid>
        );

      case 2:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Documents à télécharger
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="subtitle1" gutterBottom>
                    CV *
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Button
                      variant="outlined"
                      component="label"
                      startIcon={<CloudUploadIcon />}
                    >
                      Télécharger CV
                      <input
                        type="file"
                        hidden
                        accept=".pdf,.doc,.docx"
                        onChange={(e) =>
                          handleFileUpload(
                            "resume",
                            e.target.files?.[0] || null
                          )
                        }
                      />
                    </Button>
                    {formData.resume && (
                      <Chip
                        label={formData.resume.name}
                        onDelete={() => handleFileUpload("resume", null)}
                        deleteIcon={<DeleteIcon />}
                        color="success"
                      />
                    )}
                  </Box>
                  {errors.resume && (
                    <Alert severity="error" sx={{ mt: 1 }}>
                      {errors.resume}
                    </Alert>
                  )}
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="subtitle1" gutterBottom>
                    Lettre de motivation
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Button
                      variant="outlined"
                      component="label"
                      startIcon={<CloudUploadIcon />}
                    >
                      Télécharger lettre
                      <input
                        type="file"
                        hidden
                        accept=".pdf,.doc,.docx"
                        onChange={(e) =>
                          handleFileUpload(
                            "coverLetter",
                            e.target.files?.[0] || null
                          )
                        }
                      />
                    </Button>
                    {formData.coverLetter && (
                      <Chip
                        label={formData.coverLetter.name}
                        onDelete={() => handleFileUpload("coverLetter", null)}
                        deleteIcon={<DeleteIcon />}
                        color="success"
                      />
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Portfolio / Site web"
                value={formData.portfolio}
                onChange={(e) => handleInputChange("portfolio", e.target.value)}
                placeholder="https://votre-portfolio.com"
              />
            </Grid>
          </Grid>
        );

      case 3:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Récapitulatif
              </Typography>
              <Alert severity="info" sx={{ mb: 3 }}>
                Veuillez vérifier vos informations avant de soumettre votre
                candidature.
              </Alert>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="subtitle1" gutterBottom>
                    Informations personnelles
                  </Typography>
                  <Stack spacing={1}>
                    <Typography variant="body2">
                      <strong>Nom:</strong> {formData.firstName}{" "}
                      {formData.lastName}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Email:</strong> {formData.email}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Pays:</strong>{" "}
                      {
                        countries.find((c) => c.code === formData.country)
                          ?.label
                      }
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="subtitle1" gutterBottom>
                    Préférences
                  </Typography>
                  <Stack spacing={1}>
                    <Typography variant="body2">
                      <strong>Expérience:</strong> {formData.experience} ans
                    </Typography>
                    <Typography variant="body2">
                      <strong>Compétences:</strong> {formData.skills.join(", ")}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Newsletter:</strong>{" "}
                      {formData.newsletter ? "Oui" : "Non"}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
              <Stack spacing={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.terms}
                      onChange={(e) =>
                        handleInputChange("terms", e.target.checked)
                      }
                    />
                  }
                  label="J'accepte les conditions d'utilisation *"
                />
                {errors.terms && <Alert severity="error">{errors.terms}</Alert>}

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.privacy}
                      onChange={(e) =>
                        handleInputChange("privacy", e.target.checked)
                      }
                    />
                  }
                  label="J'accepte la politique de confidentialité *"
                />
                {errors.privacy && (
                  <Alert severity="error">{errors.privacy}</Alert>
                )}
              </Stack>
            </Grid>
          </Grid>
        );

      default:
        return "Étape inconnue";
    }
  };

  return (
    <Box>
      <HighlightH1 sx={{ mb: 4 }}>Complex Form Page</HighlightH1>

      <Paper sx={{ p: 3 }}>
        <Stepper activeStep={activeStep} orientation="horizontal">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box sx={{ mt: 4 }}>{getStepContent(activeStep)}</Box>

        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Retour
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />

          {activeStep === steps.length - 1 ? (
            <Button
              variant="contained"
              onClick={handleSubmit}
              disabled={isSubmitting}
              startIcon={isSubmitting ? <LinearProgress /> : <CheckIcon />}
            >
              {isSubmitting ? "Envoi en cours..." : "Soumettre"}
            </Button>
          ) : (
            <Button variant="contained" color="secondary" onClick={handleNext}>
              Suivant
            </Button>
          )}
        </Box>

        {isSubmitting && (
          <Box sx={{ mt: 2 }}>
            <LinearProgress />
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Traitement de votre candidature...
            </Typography>
          </Box>
        )}
      </Paper>
    </Box>
  );
}
