"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  FormControl,
  FormLabel,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  Slider,
  Autocomplete,
  Button,
  Stack,
  Grid,
  Card,
  CardContent,
  Divider,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { HighlightH1, HighlightH2 } from "@sqyping/mui-theme";

// Options pour l'autocomplete
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  { label: "The Lord of the Rings: The Return of the King", year: 2003 },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
];

export default function FormsPage() {
  const [formData, setFormData] = useState({
    textField: "",
    email: "",
    password: "",
    multiline: "",
    select: "",
    checkbox: false,
    radio: "",
    switch: false,
    slider: 30,
    autocomplete: null as any,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Validation simple
    if (field === "email" && value && !/\S+@\S+\.\S+/.test(value)) {
      setErrors((prev) => ({ ...prev, [field]: "Email invalide" }));
    } else {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <Box>
      <HighlightH1 sx={{ mb: 4 }}>Formulaires</HighlightH1>

      {/* Champs de texte */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <HighlightH2 sx={{ mb: 3 }}>Champs de texte</HighlightH2>

          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Nom complet"
                  value={formData.textField}
                  onChange={(e) =>
                    handleInputChange("textField", e.target.value)
                  }
                  placeholder="Entrez votre nom"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  error={!!errors.email}
                  helperText={errors.email || "Votre adresse email"}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Mot de passe"
                  type="password"
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  helperText="Minimum 8 caractères"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Pays</InputLabel>
                  <Select
                    value={formData.select}
                    label="Pays"
                    onChange={(e) =>
                      handleInputChange("select", e.target.value)
                    }
                  >
                    <MenuItem value="fr">France</MenuItem>
                    <MenuItem value="be">Belgique</MenuItem>
                    <MenuItem value="ch">Suisse</MenuItem>
                    <MenuItem value="ca">Canada</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  multiline
                  rows={4}
                  value={formData.multiline}
                  onChange={(e) =>
                    handleInputChange("multiline", e.target.value)
                  }
                  placeholder="Votre message..."
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>

      {/* Cases à cocher et boutons radio */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <HighlightH2 sx={{ mb: 3 }}>
            Cases à cocher et boutons radio
          </HighlightH2>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Cases à cocher
              </Typography>
              <Stack spacing={1}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.checkbox}
                      onChange={(e) =>
                        handleInputChange("checkbox", e.target.checked)
                      }
                    />
                  }
                  label="J'accepte les conditions d'utilisation"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Recevoir les newsletters"
                />
                <FormControlLabel
                  control={<Checkbox disabled />}
                  label="Option désactivée"
                />
                <FormControlLabel
                  control={<Checkbox indeterminate />}
                  label="Indéterminé"
                />
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Boutons radio
              </Typography>
              <FormControl>
                <FormLabel>Choisissez votre option</FormLabel>
                <RadioGroup
                  value={formData.radio}
                  onChange={(e) => handleInputChange("radio", e.target.value)}
                >
                  <FormControlLabel
                    value="option1"
                    control={<Radio />}
                    label="Option 1"
                  />
                  <FormControlLabel
                    value="option2"
                    control={<Radio />}
                    label="Option 2"
                  />
                  <FormControlLabel
                    value="option3"
                    control={<Radio />}
                    label="Option 3"
                  />
                  <FormControlLabel
                    value="disabled"
                    control={<Radio disabled />}
                    label="Désactivé"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Switches et sliders */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <HighlightH2 sx={{ mb: 3 }}>Switches et sliders</HighlightH2>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Switches
              </Typography>
              <Stack spacing={2}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={formData.switch}
                      onChange={(e) =>
                        handleInputChange("switch", e.target.checked)
                      }
                    />
                  }
                  label="Activer les notifications"
                />
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Mode sombre"
                />
                <FormControlLabel
                  control={<Switch disabled />}
                  label="Option désactivée"
                />
                <FormControlLabel
                  control={<Switch color="secondary" />}
                  label="Couleur secondaire"
                />
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Sliders
              </Typography>
              <Stack spacing={3}>
                <Box>
                  <Typography gutterBottom>
                    Volume: {formData.slider}%
                  </Typography>
                  <Slider
                    value={formData.slider}
                    onChange={(_, value) => handleInputChange("slider", value)}
                    aria-labelledby="volume-slider"
                  />
                </Box>
                <Box>
                  <Typography gutterBottom>Plage de valeurs</Typography>
                  <Slider
                    defaultValue={[20, 80]}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                  />
                </Box>
                <Box>
                  <Typography gutterBottom>Slider avec marques</Typography>
                  <Slider
                    defaultValue={30}
                    step={10}
                    marks
                    min={10}
                    max={110}
                    valueLabelDisplay="auto"
                  />
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Autocomplete */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <HighlightH2 sx={{ mb: 3 }}>Autocomplete</HighlightH2>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Autocomplete
                options={top100Films}
                value={formData.autocomplete}
                onChange={(_, value) =>
                  handleInputChange("autocomplete", value)
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Rechercher un film"
                    placeholder="Tapez pour rechercher..."
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Autocomplete
                multiple
                options={top100Films}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Films favoris"
                    placeholder="Sélectionnez plusieurs films"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Autocomplete
                freeSolo
                options={["Option 1", "Option 2", "Option 3"]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Saisie libre"
                    placeholder="Tapez ou sélectionnez..."
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Autocomplete
                disabled
                options={top100Films}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Autocomplete désactivé"
                    placeholder="Non disponible"
                  />
                )}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Validation et soumission */}
      <Card>
        <CardContent>
          <HighlightH2 sx={{ mb: 3 }}>Validation et soumission</HighlightH2>

          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  label="Champ obligatoire"
                  error={!formData.textField}
                  helperText={
                    !formData.textField ? "Ce champ est obligatoire" : ""
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email avec validation"
                  type="email"
                  error={!!errors.email}
                  helperText={errors.email || "Format: exemple@domaine.com"}
                />
              </Grid>
              <Grid item xs={12}>
                <Stack direction="row" spacing={2}>
                  <Button type="submit" variant="contained" color="secondary">
                    Soumettre
                  </Button>
                  <Button type="reset" variant="outlined">
                    Réinitialiser
                  </Button>
                  <Button variant="text">Annuler</Button>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
