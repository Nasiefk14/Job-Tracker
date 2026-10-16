# Job Tracker

Personal job application tracker for managing a job search pipeline — stages, notes, follow-ups, kanban and list views.

## Stack

| Layer | Tech |
|-------|------|
| Backend | Node.js, TypeScript, Express, Zod |
| Frontend | React, TypeScript, Tailwind CSS, Vite |
| Database | SQLite (`data/job-tracker.db`) |
| Monorepo | `packages/server`, `packages/client`, `packages/shared` |

## Features (V1)

- Applications CRUD with company, role, job URL, salary range
- Stage pipeline: `applied` → `screening` → `interview` → `offer` → `rejected`
- Notes and follow-up reminders
- Kanban (drag-and-drop) and list views
- Dashboard for overdue / upcoming follow-ups

## Project structure

```
job-tracker/
├── packages/
│   ├── server/          # Express API (:3001)
│   ├── client/          # React + Vite SPA (:5173)
│   └── shared/          # Zod schemas, types, constants
└── data/
    └── job-tracker.db   # SQLite (gitignored)
```

## Getting started

> Scaffolding in progress — fill in once Task 1.1 / 1.2 are done.

```bash
# Install
pnpm install   # or npm install

# Copy env templates
cp packages/server/.env.example packages/server/.env
cp packages/client/.env.example packages/client/.env

# Run migrations (creates data/job-tracker.db)
# TODO

# Dev (API + client)
pnpm dev
```

| Service | URL |
|---------|-----|
| Client | http://localhost:5173 |
| API | http://localhost:3001 (`/api/v1`) |

### Environment

| Variable | Where | Default / notes |
|----------|-------|-----------------|
| `DATABASE_PATH` | server | `./data/job-tracker.db` |
| `PORT` | server | `3001` |
| `CORS_ORIGIN` | server | `http://localhost:5173` |
| `VITE_API_URL` | client | API base URL for the SPA |

### Backup

```bash
cp data/job-tracker.db data/job-tracker.backup.db
```

## Decisions

Document stack choices here as they are locked in (ORM, monorepo tool, React Query vs SWR, dnd library, etc.).

| Decision | Choice |
|----------|--------|
| Monorepo tool | TBD |
| ORM | TBD |
| Server state | TBD |
| Kanban DnD | TBD |

## License

TBD
