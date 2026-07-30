# Japan Food Price Tracker

A simple app for tracking food prices in Japan with a React frontend and a Node.js backend.

## Structure

- `frontend/` - Vite + React user interface
- `backend/` - Express API for sample price data

## Local development

Install dependencies:

```bash
npm install
```

Run frontend and backend together:

```bash
npm run dev
```

The frontend runs on `http://localhost:5173` and the backend API runs on `http://localhost:4000`.

## API

- `GET /api/prices` - returns sample food price items and last update timestamp

## Notes

This scaffold includes sample data and UI for tracking Japanese food prices. Extend it with real data sources, authentication, or price history tracking.
