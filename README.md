# Jan-Niti

> Transparency is democracy. Accountability is justice.

[![License: MIT](https://img.shields.io/badge/License-MIT-gold.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org)
[![Part of](https://img.shields.io/badge/FCRI-Governance-gold)](https://fcri.science)

**Jan-Niti** (जन-नीति — *People's Policy*) is an open-access civic transparency platform — empowering citizens with transparent data, performance tracking, and objective sentiment analysis of public representatives.

Democracy needs data. Jan-Niti provides it.

---

## What It Does

```
Track representatives → Measure promises vs. actions
    → Aggregate citizen sentiment
    → Publish open data → Hold power accountable
```

---

## Architecture

```
jan-niti/
├── src/app/
│   ├── page.tsx              Representative directory
│   ├── rep/[id]/             Representative profile + voting record
│   ├── dashboard/            National / regional overview
│   ├── submit/               Citizen issue submission
│   └── methodology/          Scoring methodology
├── agents/
│   └── tracker.py            Parliamentary data scraping agent
├── lib/
│   ├── sentiment.ts          Citizen sentiment aggregation
│   └── score.ts              Performance scoring engine
└── tests/
```

---

## Scoring Model

| Dimension | Weight | Data Source |
|-----------|--------|-------------|
| Attendance | 20% | Parliamentary records |
| Voting consistency | 25% | Voting records vs. stated positions |
| Promise fulfillment | 30% | Manifesto vs. legislative record |
| Citizen sentiment | 25% | Platform aggregated feedback |

---

## Principles

- **Open data** — all scores and methodology are public
- **No affiliation** — no party endorsements, ever
- **Verifiable** — every score links to its source data
- **Accessible** — available in local languages

---

## Stack

Next.js 16 · TypeScript · Tailwind CSS 4 · Python tracker agent · PostgreSQL

---

## Quick Start

```bash
git clone https://github.com/Davidcarmelalex/jan-niti
cd jan-niti && npm install && cp .env.example .env.local && npm run dev
```
