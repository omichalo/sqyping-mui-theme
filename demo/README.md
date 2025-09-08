# SQY PING MUI Theme - Demo

Application de démonstration pour le thème MUI SQY PING.

## 🌐 Déploiement

L'application de démo est déployée sur Firebase Hosting :

**🔗 [Voir la démo en ligne](https://sqyping-mui-demo.web.app)**

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
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

## 🔧 Scripts disponibles

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Linting ESLint
npm run type-check   # Vérification TypeScript
npm run export       # Export statique pour déploiement
npm run deploy       # Déploiement sur Firebase
```

## 📁 Structure

```
demo/
├── app/                    # Pages Next.js
│   ├── stories/           # Pages de démonstration
│   ├── layout.tsx         # Layout principal
│   └── page.tsx          # Page d'accueil
├── public/               # Assets statiques
│   ├── images/           # Images et logos
│   └── favicon.png       # Favicon
├── package.json          # Dépendances de la démo
├── next.config.js        # Configuration Next.js
└── tsconfig.json         # Configuration TypeScript
```

## 🎨 Fonctionnalités

- **Thème complet** : Utilisation du package @sqyping/mui-theme
- **Mode sombre/clair** : Switch fonctionnel
- **Navigation** : Sidebar avec toutes les pages
- **Responsive** : Design adaptatif
- **TypeScript** : Typage strict
- **Performance** : Optimisé pour la production

## 📄 Licence

Ce projet est sous licence MIT.
