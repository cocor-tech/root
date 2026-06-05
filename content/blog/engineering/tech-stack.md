---
title: Our Tech Stack: Next.js, Go, Rust, and Stellar
description: The engineering stack behind Cocor Tech — why we chose each technology and how they work together across our products.
category: engineering
author: Nekwachukwu Ucheokoye
published: 2026-06-04
order: 5
---

# Our Tech Stack: Next.js, Go, Rust, and Stellar

Every technology we use is chosen deliberately. Here is our stack and why.

## Smart Contracts: Rust on Soroban

Stellar's Soroban platform uses Rust — a language built for safety and performance. Smart contracts handle circle creation, member management, contribution tracking, payout distribution, and reputation scoring.

**Why Rust?** Memory safety without garbage collection. Deterministic execution. Strong type system. Excellent tooling.

## Backend: Go

The Moistello backend is written in Go using the Gin framework. Go provides:

- Fast compilation and deployment
- Excellent concurrency for handling multiple circles
- Simple, readable codebase
- Strong standard library

The backend manages 47 API endpoints across 11 domains including authentication, circles, contributions, payouts, reputation, and notifications.

## Frontend: Next.js + TypeScript

Both Moistello and Cocor Tech use Next.js. TypeScript provides type safety across the entire frontend codebase.

- Server-side rendering for SEO-critical pages
- Static generation for documentation and content
- Tailwind CSS for rapid, consistent styling

## Infrastructure: PostgreSQL, Redis, Docker

- **PostgreSQL** — Relational data for users, circles, contributions, and reputation
- **Redis** — Caching, rate limiting, and session management
- **Docker** — Containerized deployment across services
- **Vercel** — Frontend hosting with global CDN

## Why This Stack Works

Each layer is independently maintainable. Smart contracts can be updated without touching the backend. The frontend can be redeployed without affecting APIs. This separation allows us to move fast while maintaining reliability.
