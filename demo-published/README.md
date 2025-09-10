# 🎨 SQY PING MUI Theme - Demo Published

Cette démo utilise le package **publié** `@omichalo/sqyping-mui-theme@0.1.3` au lieu de la référence locale.

## 🚀 Démarrage rapide

```bash
# Installation des dépendances
npm install

# Démarrage du serveur de développement
npm run dev

# Build pour la production
npm run build

# Export statique
npm run export
```

## 📦 Package utilisé

Cette démo utilise le package npm publié :

- **Package** : `@omichalo/sqyping-mui-theme@0.1.3`
- **Source** : [npmjs.com](https://www.npmjs.com/package/@omichalo/sqyping-mui-theme)
- **GitHub** : [omichalo/sqyping-mui-theme](https://github.com/omichalo/sqyping-mui-theme)

## 🎯 Objectif

Cette démo démontre que le package `@omichalo/sqyping-mui-theme` fonctionne correctement :

- ✅ Installation depuis npm
- ✅ Import des composants
- ✅ Fonctionnement du thème
- ✅ Mode sombre/clair
- ✅ Compatibilité SSR

## 🔄 Différences avec la démo locale

| Aspect      | Demo locale   | Demo publiée |
| ----------- | ------------- | ------------ |
| Package     | `file:..`     | `^0.1.3`     |
| Source      | Développement | npm registry |
| Mise à jour | Automatique   | `npm update` |
| Usage       | Tests         | Production   |

## 🌐 Déploiement

Cette démo peut être déployée sur :

- **Vercel** : `vercel --prod`
- **Netlify** : `npm run export && netlify deploy`
- **Firebase** : `npm run deploy`

## 📱 Fonctionnalités

- **Thème complet** : Utilisation du package @omichalo/sqyping-mui-theme publié
- **Mode sombre/clair** : Switch fonctionnel
- **Navigation** : Sidebar avec toutes les pages
- **Responsive** : Design adaptatif
- **TypeScript** : Typage strict
- **Performance** : Optimisé pour la production

## 🛠️ Structure

```
demo-published/
├── app/                    # Pages Next.js
│   ├── (stories)/         # Pages de démonstration
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Page d'accueil
├── components/            # Composants de démo
├── public/               # Assets statiques
├── package.json          # Dépendances (package publié)
├── next.config.js        # Configuration Next.js
└── tsconfig.json         # Configuration TypeScript
```

## 🔧 Développement

Pour tester avec une nouvelle version du package :

```bash
# Mettre à jour vers la dernière version
npm update @omichalo/sqyping-mui-theme

# Ou installer une version spécifique
npm install @omichalo/sqyping-mui-theme@0.1.4
```

## 📊 Statut

- ✅ Package installé : `@omichalo/sqyping-mui-theme@0.1.3`
- ✅ Imports fonctionnels
- ✅ Thème appliqué
- ✅ Mode sombre/clair opérationnel
- ✅ Compatibilité SSR
