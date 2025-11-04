#!/bin/bash

echo "========================================="
echo "ProofPass Landing Page - Push to GitHub"
echo "========================================="
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}Verificando estado del repositorio...${NC}"
git status

echo ""
echo -e "${BLUE}Commits listos para push:${NC}"
git log --oneline -1

echo ""
echo -e "${YELLOW}Haciendo push al repositorio remoto...${NC}"
echo "Repositorio: https://github.com/PROOFPASS/ProofPassLandingPage.git"
echo ""

# Intentar push
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✅ Push exitoso!${NC}"
    echo ""
    echo "Verifica tu repositorio en:"
    echo "https://github.com/PROOFPASS/ProofPassLandingPage"
else
    echo ""
    echo -e "${YELLOW}⚠️ Si el push falló por autenticación:${NC}"
    echo ""
    echo "1. GitHub ya no permite password authentication"
    echo "2. Necesitas un Personal Access Token"
    echo ""
    echo "Pasos para crear un token:"
    echo "  a) Ve a: https://github.com/settings/tokens"
    echo "  b) Click en 'Generate new token' -> 'Tokens (classic)'"
    echo "  c) Selecciona el scope 'repo'"
    echo "  d) Copia el token generado"
    echo ""
    echo "Luego ejecuta nuevamente:"
    echo "  git push -u origin main"
    echo ""
    echo "Cuando te pida contraseña, pega el token (no tu password)"
fi
