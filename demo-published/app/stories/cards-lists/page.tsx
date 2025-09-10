"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  CardHeader,
  Avatar,
  IconButton,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemSecondaryAction,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Grid,
  Divider,
  Chip,
  Badge,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  MoreVert as MoreVertIcon,
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Star as StarIcon,
  ShoppingCart as ShoppingCartIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { HighlightH1, HighlightH2 } from "@omichalo/sqyping-mui-theme";

export default function CardsAndListsPage() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box>
      <HighlightH1 sx={{ mb: 4 }}>Cards & Lists</HighlightH1>

      {/* Cards */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <HighlightH2 sx={{ mb: 3 }}>Cards</HighlightH2>

          <Grid container spacing={3}>
            {/* Card simple */}
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="div">
                    Card simple
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Contenu de base d'une card avec titre et description.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Action</Button>
                  <Button size="small">Autre</Button>
                </CardActions>
              </Card>
            </Grid>

            {/* Card avec header */}
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: "primary.main" }}>
                      <PersonIcon />
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Card avec header"
                  subheader="Sous-titre"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Card avec header personnalisé, avatar et actions.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>

            {/* Card avec image */}
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://via.placeholder.com/300x140/28306d/ffffff?text=Image"
                  alt="Image placeholder"
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    Card avec image
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Card avec image en en-tête et contenu en dessous.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" startIcon={<ShoppingCartIcon />}>
                    Ajouter
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Lists */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <HighlightH2 sx={{ mb: 3 }}>Lists</HighlightH2>

          <Grid container spacing={3}>
            {/* Liste simple */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Liste simple
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Élément 1"
                    secondary="Description de l'élément 1"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Élément 2"
                    secondary="Description de l'élément 2"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Élément 3"
                    secondary="Description de l'élément 3"
                  />
                </ListItem>
              </List>
            </Grid>

            {/* Liste avec avatars */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Liste avec avatars
              </Typography>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Jean Dupont" secondary="Développeur" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Marie Martin" secondary="Designer" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Pierre Durand" secondary="Manager" />
                </ListItem>
              </List>
            </Grid>

            {/* Liste avec icônes */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Liste avec icônes
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <EmailIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Email"
                    secondary="contact@example.com"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PhoneIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Téléphone"
                    secondary="+33 1 23 45 67 89"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocationIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Adresse"
                    secondary="123 Rue Example, Paris"
                  />
                </ListItem>
              </List>
            </Grid>

            {/* Liste cliquable */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Liste cliquable
              </Typography>
              <List>
                <ListItemButton>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary="Favoris" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <NotificationsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Notifications" />
                  <ListItemSecondaryAction>
                    <Badge badgeContent={3} color="error">
                      <NotificationsIcon />
                    </Badge>
                  </ListItemSecondaryAction>
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <ShoppingCartIcon />
                  </ListItemIcon>
                  <ListItemText primary="Panier" />
                  <ListItemSecondaryAction>
                    <Chip label="3" size="small" color="primary" />
                  </ListItemSecondaryAction>
                </ListItemButton>
              </List>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Accordions */}
      <Card>
        <CardContent>
          <HighlightH2 sx={{ mb: 3 }}>Accordions</HighlightH2>

          <Stack spacing={2}>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Section 1
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Description de la première section
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Contenu détaillé de la première section. Ici vous pouvez
                  ajouter du texte, des images, des formulaires ou tout autre
                  contenu.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Section 2
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Description de la deuxième section
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Contenu détaillé de la deuxième section. Les accordions
                  permettent d'organiser l'information de manière hiérarchique
                  et compacte.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Section 3
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Description de la troisième section
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Contenu détaillé de la troisième section. Par défaut, un seul
                  accordion peut être ouvert à la fois, mais ce comportement
                  peut être modifié.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
