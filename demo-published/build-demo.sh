#!/bin/bash

echo "🏗️  Build de la démo SQY PING MUI Theme (Package publié)"
echo "========================================================"
echo ""
echo "📦 Package utilisé: @omichalo/sqyping-mui-theme@0.1.3"
echo ""

echo "🔍 Vérification du package installé..."
npm list @omichalo/sqyping-mui-theme

echo ""
echo "🏗️  Build en cours..."
npm run build

echo ""
echo "✅ Build terminé !"
echo "📁 Dossier de sortie: .next/"
echo ""
echo "🚀 Pour démarrer en production:"
echo "   npm run start"
echo ""
echo "📦 Pour exporter en statique:"
echo "   npm run export"


