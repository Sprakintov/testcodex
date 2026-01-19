# MediSupply - Site e-commerce de matériel médical

Ce dépôt contient un exemple complet d’un site e-commerce pour la vente de matériel médical :

- **Front-end** : Next.js (React) pour la vitrine commerciale.
- **Back-end** : Express pour exposer une API REST.
- **Base de données** : PostgreSQL pour stocker les produits.

## Pré-requis

- Node.js 18+
- Docker (optionnel, pour lancer PostgreSQL rapidement)

## Lancer PostgreSQL

```bash
docker compose up -d
```

La base est créée avec l’utilisateur `postgres` et le mot de passe `postgres`.

## Initialiser la base

```bash
psql postgresql://postgres:postgres@localhost:5432/medisupply -f backend/sql/schema.sql
```

## Backend (Express)

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

L’API est accessible sur `http://localhost:4000`.

- `GET /health` : statut du serveur.
- `GET /api/products` : liste des produits.
- `POST /api/products` : création d’un produit.

## Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

La vitrine est accessible sur `http://localhost:3000`.

## Exemple de payload produit

```json
{
  "name": "Tensiomètre connecté ProCare",
  "description": "Mesures précises avec synchronisation mobile",
  "price": 129.00,
  "stock": 15
}
```
