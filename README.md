# throne8 — Jobs Page

A production-grade jobs page built with **Next.js 14 App Router**, **Redux Toolkit**, and **TypeScript**.

## Features

- **Search** — Debounced real-time search across title, company, tags, location
- **Filter Sidebar** — Work mode, job type, experience level, category filters with active count badge
- **Preferences Nav** — Recommended / Recent / Saved / Applied sections in sidebar
- **Job Sections** — Dynamic sections: Recommended (featured), Recent, by Category; collapses to search results when filtering
- **Job Detail Page** — Full description, responsibilities, requirements, benefits, sticky apply + save sidebar
- **Application Modal** — Multi-field form with validation, loading state, animated success screen
- **Save & Apply** — Persisted in Redux store, reflected across all views

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14 App Router |
| State | Redux Toolkit + custom hooks |
| Styling | Tailwind CSS |
| Language | TypeScript (strict) |
| Fonts | Inter via next/font |

## Folder Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with ReduxProvider
│   ├── page.tsx            # Redirects to /jobs
│   └── jobs/
│       ├── page.tsx        # Main jobs listing page
│       └── [id]/
│           └── page.tsx    # Job detail page
├── components/
│   └── jobs/
│       ├── JobCard.tsx         # Reusable job card (default/compact/featured)
│       ├── JobSections.tsx     # Recommended, Recent, Saved, Applied sections
│       ├── FilterSidebar.tsx   # Left sidebar with filters + preferences nav
│       ├── SearchBar.tsx       # Debounced search + location input
│       └── ApplicationModal.tsx # Apply form + success state
├── store/
│   ├── index.ts            # Store config + typed hooks
│   ├── Provider.tsx        # Client-side Redux Provider
│   └── slices/
│       └── jobsSlice.ts    # All jobs state, filters, saved, applied + selectors
├── hooks/
│   ├── useJobs.ts          # Unified hook for all job interactions
│   └── useDebounce.ts      # Generic debounce hook
├── types/
│   └── jobs.ts             # All TypeScript interfaces
└── lib/
    └── mockData.ts         # 8 mock jobs + constants
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects to `/jobs`.

## Key Design Decisions

- **`useJobs` hook** centralizes all dispatch + selector access so pages/components stay clean
- **`createSelector`** memoizes derived data (featured, recent, saved objects, applied objects)
- **Filter logic** runs client-side via `applyFilters()` called on every slice action — no useEffect needed
- **`'use client'`** only on interactive components; layout and data components are RSC-compatible
- **Debounced search** — 300ms delay via `useDebounce` to avoid flooding Redux on every keystroke
