---
title: "Stockroom"
summary: "Order and inventory management for a small distributor: all-or-nothing stock reservation, an append-only ledger that explains every count, and an on-call agent that investigates the app's own alerts. The AI Dev Tools Zoomcamp final project."
publishedAt: "2026-11-09"
readingTime: "7 min read"
tags: ["FastAPI", "React", "PostgreSQL", "OpenTelemetry", "AI Engineering"]
githubUrl: "https://github.com/cancinoray/stockroom"
coverImage: "/assets/projects/cards/stockroom.jpg"
ogImage: "/assets/projects/cards/stockroom.jpg"
role: "Software Engineer"
timeline: "AI Dev Tools Zoomcamp final project · 2026"
highlights:
  - "20 concurrent orders · 1 succeeds"
  - "Append-only stock ledger"
  - "One container, React + API"
  - "Agent opens the fix PR"
---

## Overview

A distributor with one warehouse and a few dozen SKUs sells from a spreadsheet and a chat thread. Two people sell the same last unit, because availability is a number someone typed yesterday. The warehouse finds out at pick time, after the customer was promised a delivery date. And when the physical count disagrees with the sheet, nobody can say which sale, return, or damaged box caused the difference.

Stockroom replaces the sheet with a system where availability is computed from the same rows orders write to, an order reserves every line or reserves nothing, and every quantity change is an append-only entry with a reason, an actor, and a timestamp. A count can be explained instead of trusted.

It is the final project for [DataTalksClub's AI Dev Tools Zoomcamp](https://github.com/DataTalksClub/ai-dev-tools-zoomcamp), so the application was only half the brief. The course rubric also scores the problem description, product spec, agent team and process, context management, tests, containerization, deployment, CI/CD, observability and alerting, and an on-call responder. Stockroom is one app taken through all of it.

## The App

Three screens over one API, all reading live data:

| Screen           | What you do                                                                                                                                                                            |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Inventory**    | On-hand, reserved, and available per SKU, a stock position chart and low-stock badges. Receive a delivery or adjust a count with a required reason note, and open a SKU's movement history. |
| **Place order**  | Add SKUs from live availability to an order ticket, then reserve. If any line is short, nothing is reserved and each short line is named.                                                  |
| **Orders**       | Filter by status, open an order for its lines and movement timeline, then cancel (releases the hold) or fulfil (moves stock off the shelf).                                               |

![Inventory: eight seeded SKUs with on-hand, reserved, and available counts, the stock position chart, and low-stock badges](/assets/projects/stockroom/inventory.png)

![Place order: the live availability list beside an order ticket with two lines, quantities, and prices](/assets/projects/stockroom/place-order.png)

![Orders: the order drawer with its lines, reservations, and the movement timeline](/assets/projects/stockroom/orders.png)

A silent [app walkthrough](https://github.com/cancinoray/stockroom/blob/main/_docs/demo/stockroom-app-demo.mp4) covers inventory, a short-line `409`, a successful reservation, and fulfilment.

## The Correctness Core

This is the part that is not CRUD. Four rules the system enforces, each with tests behind it:

1. **All-or-nothing reservation.** An order with three lines reserves all three or returns `409` naming every short line. There are no partial holds and no cleanup job for half-reserved orders.
2. **No oversell under concurrency.** Twenty simultaneous orders for the last unit produce one `201` and nineteen `409`. One transaction locks stock rows in ascending SKU order before validating, so the reservation cannot deadlock itself.
3. **Append-only ledger.** `on_hand` and `reserved` are caches, not the truth: `on_hand == Σ delta_on_hand` and `reserved == Σ delta_reserved`. Drift is detectable, reported by `/api/invariants`, and alerted on.
4. **Explainable counts.** Every movement carries a reason (`receive`, `adjust`, `reserve`, `release`, `ship`), an actor, and a note. No endpoint updates or deletes a movement, not even for an admin.

## Architecture

| Layer        | Choice                                                                                         |
| ------------ | ---------------------------------------------------------------------------------------------- |
| Frontend     | React 19, TypeScript, Vite, TanStack Query, Tailwind                                           |
| API contract | `openapi.yaml` is the source of truth; the typed frontend client is generated from it and checked in CI |
| Backend      | FastAPI, SQLAlchemy 2, Alembic, Pydantic v2                                                    |
| Database     | PostgreSQL 16                                                                                  |
| Tests        | pytest unit and integration against real Postgres, vitest, Playwright                          |
| CI/CD        | GitHub Actions: lint, tests, contract check, container build, immutable image tags             |
| Telemetry    | OpenTelemetry to a local Collector, Prometheus, Loki, Tempo, Alloy, and Grafana stack          |

Production is one container. The frontend is compiled in a Node build stage and the static files are served by FastAPI, so there is one origin, no CORS, and no second service to deploy or health-check. Postgres is the second container, and the same `compose.yaml` runs on a laptop and on a host. The container's own command runs migrations, the idempotent seed, and then uvicorn, so starting it is the migration step.

## Built With an Agent Team

The AI Dev Tools workflow is visible in the repository, not just in the commit history.

- **Roles.** `.agents/agents/` defines a PM, a software engineer, a QA engineer, and an on-call engineer. `_docs/team/` spells out what each one owns, and `_docs/process.md` covers grooming, the work loop, the orchestrator, and the definition of done.
- **Context.** `AGENTS.md` is the entry point and routes to modular docs: domain, design system, deployment, release process, testing guidelines, runbooks. Project skills such as `add-migration`, `investigate-alert`, and `record-demo` live in `.agents/skills/`.
- **Spec first.** `product-spec.md` defines the problem, users, stories, acceptance criteria, and non-goals. Every issue carries its acceptance criteria, and QA independently verifies each change and owns the merge.
- **Evidence over output.** `_docs/ai-usage-report.md` logs each working session with what was verified and what was overruled. "Generated a Dockerfile" is not an entry; "built it, ran the app from it, and removed the build-only layer that leaked a token" is.

## Operations: Telemetry, Alerts, and an On-Call Agent

- **Telemetry.** A key user journey is instrumented with metrics, traces, and structured JSON logs that share a trace ID. The local stack collects them into Prometheus, Tempo, Loki, and Grafana, with a provisioned order-journey dashboard.
- **Alerts on user impact.** Three rules watch order error rate, p95 latency, and inventory invariant drift. Each has a runbook.
- **On-call responder.** An alert poller writes a bounded evidence packet: the rule, the deployed version, failing trace IDs, error samples, and the health and invariants snapshots. The responder then works the incident to a decision inside a 600-second budget. It is read-only on everything deployed, and the only write it may make is a branch and a pull request with a proposed fix.
- **Policy-gated autonomy.** `autonomy-policy.yaml` decides allow, deny, or escalate before every consequential action, and each decision is recorded with the rule that produced it. A drill reproduces a real 500, drives traffic until the alert fires, and verifies recovery after the fix PR.

## Shipping It

The test claims are split by suite: unit tests for domain invariants and the autonomy policy, integration tests against a disposable Postgres for transactions and the API contract, concurrency tests for the reservation path, and Playwright end-to-end journeys for the three screens. `make test`, `make test-integration`, and `make e2e` run them.

CI runs lint, the suites, the OpenAPI contract check, and the container build on every pull request, and publishes an immutable `ghcr.io/cancinoray/stockroom:<timestamp>-<sha>` image on merge to `main`. Deployment is a manual self-hosted compose step with a documented tag, migrate, swap, smoke, and rollback procedure.

## Non-Goals

Authentication and multi-tenancy, payments, purchase orders, multiple warehouses, returns and refunds, currency conversion, barcode scanning, and mobile apps. Each is listed with a reason in the spec. The deployment is a self-hosted demo with seeded, non-sensitive data.

## Stack

Python · FastAPI · SQLAlchemy · Alembic · PostgreSQL 16 · React 19 · TypeScript · Vite · TanStack Query · Tailwind · pytest · vitest · Playwright · Docker Compose · GitHub Actions · OpenTelemetry · Prometheus · Grafana · Tempo · Loki.

## Takeaway

The product is the invariants: availability computed from the ledger, one transaction that cannot oversell, and movements that explain every count. The AI Dev Tools half is the discipline around it. Specs and acceptance criteria came before code, the agent team had defined roles and a shared context, a QA step verified each change, and the on-call responder runs inside a policy that says what it may not touch. That is what made agent-written code reviewable instead of merely fast.
