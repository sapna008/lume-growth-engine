# Content Management API

## Run

1. Copy `backend/.env.example` to `backend/.env`
2. Fill Cloudinary and Firebase Admin credentials
3. Start API:

```bash
pnpm api:dev
```

Base URL: `http://localhost:4000`

## Endpoints

- `GET /api/health`
- `GET /api/content`
- `POST /api/content` (`multipart/form-data`)

`POST /api/content` form fields:

- `heading` (string)
- `subheading` (string)
- `colorTheme` (string)
- `template` (string)
- `heroImage` (file)
- `heroVideo` (file)

## Firestore document

- Collection: `content-management`
- Document: `hero`
