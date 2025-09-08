# @sqyping/mui-theme

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
npm install @sqyping/mui-theme
```

> **Note** : Version actuelle : `0.1.0` - Premier release du package npm

### Dépendances requises

```json
{
  "@mui/material": "^5.14.0",
  "@mui/icons-material": "^5.14.0",
  "@emotion/react": "^11.11.0",
  "@emotion/styled": "^11.11.0",
  "react": "^18.0.0",
  "react-dom": "^18.0.0"
}
```

## 📁 Structure du projet

```
sqyping-mui-theme/
├── src/                          # Package npm du thème
│   ├── theme/                    # Fichiers du thème MUI
│   │   ├── palette.ts           # Palette de couleurs
│   │   ├── typography.ts        # Typographie et variantes
│   │   ├── shadows.ts           # Système d'ombres
│   │   ├── components.ts        # Styles des composants MUI
│   │   └── index.ts             # Export du thème
│   ├── providers/                # Providers React
│   │   └── AppThemeProvider.tsx # Provider avec gestion des modes
│   ├── components/               # Composants personnalisés
│   │   ├── Highlight.tsx        # Composant de surlignage
│   │   └── StoryLayout.tsx      # Layout pour démonstrations
│   └── index.ts                  # Export principal du package
├── demo/                         # Application de démonstration
│   ├── app/                      # Pages Next.js
│   ├── components/               # Composants spécifiques à la démo
│   ├── public/                   # Assets statiques
│   └── package.json              # Dépendances de la démo
├── dist/                         # Build du package (généré)
├── package.json                  # Configuration du package npm
└── README.md                     # Documentation
```

## 📖 Utilisation

### 1. Configuration du thème

```tsx
import { AppThemeProvider } from "@sqyping/mui-theme";

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
import { useColorMode } from "@sqyping/mui-theme";

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
import { Highlight, HighlightH1, HighlightTitle } from "@sqyping/mui-theme";

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

### 5. Utilisation du thème directement

```tsx
import { getTheme, ThemeProvider, CssBaseline } from "@sqyping/mui-theme";

function App() {
  const theme = getTheme("light"); // ou 'dark'

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <YourApp />
    </ThemeProvider>
  );
}
```

## 🎨 Fonctionnalités

### Mode sombre/clair

- **Mode clair**: Couleurs vives et contrastes élevés
- **Mode sombre**: Couleurs adaptées pour la lisibilité nocturne
- **Persistance**: Le choix est sauvegardé dans localStorage
- **Hook**: `useColorMode()` pour contrôler le mode
- **Switch visuel**: Interface intuitive pour basculer entre les modes

### Composants personnalisés

- **Highlight**: Composant pour titres surlignés
- **StoryLayout**: Layout pour pages de démonstration
- **AppThemeProvider**: Provider avec gestion des modes

### Thème MUI complet

- **Palette**: Couleurs cohérentes clair/sombre
- **Typographie**: Variantes personnalisées
- **Composants**: Styles personnalisés pour tous les composants MUI
- **Ombres**: Système d'ombres cohérent

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

## 🎨 Démonstration

Une application de démonstration complète est disponible dans le dossier `demo/` :

- **8 pages de démonstration** : Theme Showcase, Buttons & Chips, Forms, Navigation, Feedback, Cards & Lists, Complex Dashboard, Complex Form Page
- **Mode sombre/clair** : Switch fonctionnel avec persistance
- **Navigation** : Sidebar avec toutes les pages
- **Assets intégrés** : Logo et favicon du club SQY PING
- **Déployé sur Firebase** : [https://sqyping-mui-demo.web.app](https://sqyping-mui-demo.web.app)

### Lancer la démo localement

```bash
cd demo
npm install
npm run dev
```

## 🔧 Scripts de développement

```bash
npm run build          # Build du package
npm run dev            # Build en mode watch
npm run demo:dev       # Lancer la démo en développement
npm run demo:build     # Build de la démo
npm run demo:deploy    # Déployer la démo sur Firebase
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
- Voir la démo en ligne : [https://sqyping-mui-demo.web.app](https://sqyping-mui-demo.web.app)

---

**SQY PING Theme** - Un thème MUI moderne et professionnel pour vos applications React/Next.js.
