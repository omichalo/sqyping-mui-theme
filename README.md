# SQY PING MUI Theme

Un thème MUI (Material-UI) production-ready pour applications React/Next.js, conçu avec une identité visuelle moderne, chaleureuse et inclusive.

## 🎨 Identité visuelle

### Palette de couleurs

- **Navy** `#28306d` - Couleur primaire
- **Orange** `#f1861f` - Couleur secondaire
- **Bleu** `#4267b0` - Couleur info
- **Noir** `#000000` - Texte principal
- **Blanc** `#ffffff` - Arrière-plan

### Typographie

- **Police**: Google Figtree (Thin → Black)
- **Style**: Moderne avec variantes personnalisées
- **Titres**: Très gras avec effet de surlignage

### Design

- **Style**: Moderne, chaleureux, inclusif
- **Coins**: Arrondis (14px pour boutons, 18px pour cards)
- **Ombres**: Douces et subtiles
- **Accessibilité**: Contraste AA

## 🚀 Installation

```bash
# Cloner le projet
git clone <repository-url>
cd sqyping-mui-theme

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

### Dépendances principales

```json
{
  "@mui/material": "^5.14.20",
  "@mui/icons-material": "^5.14.19",
  "@emotion/react": "^11.11.1",
  "@emotion/styled": "^11.11.0",
  "@fontsource-variable/figtree": "^5.0.1",
  "@mui/x-charts": "^6.18.1",
  "@mui/x-data-grid": "^6.18.1"
}
```

## 📁 Structure du projet

```
src/
├── theme/
│   ├── palette.ts          # Configuration des couleurs
│   ├── typography.ts       # Configuration de la typographie
│   ├── shadows.ts          # Configuration des ombres
│   ├── components.ts       # Personnalisation des composants
│   └── index.ts           # Point d'entrée du thème
├── providers/
│   └── AppThemeProvider.tsx # Provider avec gestion dark/light mode
├── components/
│   ├── Highlight.tsx       # Composant pour titres surlignés
│   └── StoryLayout.tsx     # Layout pour les pages de démo
└── app/
    ├── (stories)/          # Pages de démonstration
    │   ├── theme-showcase/
    │   ├── buttons-chips/
    │   ├── forms/
    │   ├── navigation/
    │   ├── feedback/
    │   ├── cards-lists/
    │   ├── complex-dashboard/
    │   └── complex-form-page/
    ├── layout.tsx          # Layout principal
    └── page.tsx           # Page d'accueil
```

## 🎯 Utilisation

### 1. Configuration du thème

```tsx
import { AppThemeProvider } from "@/providers/AppThemeProvider";

function App() {
  return (
    <AppThemeProvider>
      <YourApp />
    </AppThemeProvider>
  );
}
```

### 2. Utilisation du hook useColorMode

```tsx
import { useColorMode } from "@/providers/AppThemeProvider";

function MyComponent() {
  const { mode, toggleColorMode, setColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      {mode === "light" ? "Mode sombre" : "Mode clair"}
    </Button>
  );
}
```

### 3. Utilisation du composant Highlight

```tsx
import { Highlight, HighlightH1, HighlightTitle } from "@/components/Highlight";

function MyPage() {
  return (
    <div>
      <HighlightH1>Mon titre principal surligné</HighlightH1>

      <Highlight variant="h2" highlightColor="#f1861f">
        Titre personnalisé
      </Highlight>

      <HighlightTitle>Titre avec surlignage par défaut</HighlightTitle>
    </div>
  );
}
```

### 4. Variantes de typographie personnalisées

```tsx
import { Typography } from "@mui/material";

function MyComponent() {
  return (
    <div>
      <Typography variant="display1">Titre très grand (Display 1)</Typography>

      <Typography variant="eyebrow">Texte d'introduction (Eyebrow)</Typography>

      <Typography variant="highlightTitle">
        Titre avec surlignage automatique
      </Typography>
    </div>
  );
}
```

## 📖 Pages de démonstration

Le projet inclut 8 pages de démonstration complètes :

### 1. Theme Showcase (`/stories/theme-showcase`)

- Palette de couleurs complète
- Toutes les variantes de typographie
- Ombres et couleurs d'état
- Exemples d'utilisation

### 2. Buttons & Chips (`/stories/buttons-chips`)

- Tous les types de boutons (contained, outlined, text)
- Boutons avec icônes et groupes
- Chips avec différentes variantes
- Badges et indicateurs

### 3. Forms (`/stories/forms`)

- Champs de texte et sélection
- Cases à cocher et boutons radio
- Switches et sliders
- Autocomplete avec validation

### 4. Navigation (`/stories/navigation`)

- AppBar avec actions
- Drawer responsive
- Tabs avec indicateurs
- Breadcrumbs personnalisés

### 5. Feedback (`/stories/feedback`)

- Alertes avec icônes et actions
- Snackbars de notification
- Tooltips avec placement
- Dialogs de confirmation

### 6. Cards & Lists (`/stories/cards-lists`)

- Cards avec différents layouts
- Listes avec avatars et icônes
- Accordions interactifs
- Composants d'organisation

### 7. Complex Dashboard (`/stories/complex-dashboard`)

- Tableau de bord complet
- Statistiques avec graphiques
- Tableaux de données
- Navigation par onglets

### 8. Complex Form Page (`/stories/complex-form-page`)

- Formulaire multi-étapes
- Validation en temps réel
- Upload de fichiers
- Récapitulatif final

## 🛠️ Personnalisation

### Ajouter une nouvelle story page

1. Créer le dossier dans `src/app/(stories)/`
2. Ajouter la page dans `src/components/StoryLayout.tsx`
3. Mettre à jour la navigation

```tsx
// Dans StoryLayout.tsx
const storyPages = [
  // ... pages existantes
  {
    title: "Ma nouvelle page",
    path: "/stories/ma-nouvelle-page",
    icon: <MonIcon />,
    description: "Description de ma page",
  },
];
```

### Modifier les couleurs du thème

```tsx
// Dans src/theme/palette.ts
const colors = {
  navy: "#28306d", // Modifier la couleur primaire
  orange: "#f1861f", // Modifier la couleur secondaire
  blue: "#4267b0", // Modifier la couleur info
  // ... autres couleurs
};
```

### Personnaliser les composants

```tsx
// Dans src/theme/components.ts
export const createComponents = (theme: Theme): Components<Theme> => ({
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: "14px", // Modifier le rayon des boutons
        // ... autres styles
      },
    },
  },
  // ... autres composants
});
```

## 🎨 Variantes de typographie

Le thème inclut des variantes personnalisées :

- `display1`: Titre très grand (72px)
- `eyebrow`: Texte d'introduction (14px, uppercase)
- `highlightTitle`: Titre avec surlignage automatique

## 🌙 Mode sombre/clair

Le thème supporte automatiquement les modes sombre et clair :

- **Mode clair**: Couleurs vives et contrastes élevés
- **Mode sombre**: Couleurs adaptées pour la lisibilité nocturne
- **Persistance**: Le choix est sauvegardé dans localStorage
- **Hook**: `useColorMode()` pour contrôler le mode

## ♿ Accessibilité

- **Contraste AA**: Toutes les couleurs respectent les standards WCAG
- **Focus visible**: Indicateurs de focus clairs
- **Navigation clavier**: Support complet du clavier
- **Screen readers**: Labels et descriptions appropriés

## 📱 Responsive Design

- **Breakpoints**: xs, sm, md, lg, xl
- **Mobile-first**: Design adaptatif
- **Touch-friendly**: Zones de clic optimisées
- **Performance**: Chargement optimisé

## 🔧 Scripts disponibles

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Linting ESLint
npm run type-check   # Vérification TypeScript
```

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📞 Support

Pour toute question ou problème :

- Ouvrir une issue sur GitHub
- Consulter la documentation MUI
- Vérifier les exemples dans les pages de démonstration

---

**SQY PING Theme** - Un thème MUI moderne et professionnel pour vos applications React/Next.js.
