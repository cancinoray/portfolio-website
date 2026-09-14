---
title: "2025 COMELEC National and Local Election Data Analytics Platform"
summary: "An end-to-end data platform that scrapes, lands, and transforms the entire 2025 Philippine national and local election (92K+ raw files and ~8M candidate votes) into analytics-ready marts on GCP."
publishedAt: "2025-05-17"
readingTime: "4 min read"
tags: ["Data Engineering", "dbt", "BigQuery", "Terraform", "GCP", "Python"]
githubUrl: "https://github.com/cancinoray/2025-comelec-national-and-local-election"
role: "Data Engineer"
timeline: "Self-directed · 2025"
highlights:
  - "92K+ raw JSON files scraped"
  - "~8M candidate votes (2.4GB)"
  - "~110K precincts analyzed"
  - "Terraform-managed GCP infrastructure"
---

## Overview

A complete data engineering platform for the 2025 Philippines COMELEC national and local elections. Rather than analyzing a tidy public dataset, this project starts at the source: asynchronously scraping election results from the COMELEC website, landing the raw JSON, converting it to structured CSVs, and running it through dbt on BigQuery to produce analytics-ready marts, with the whole GCP environment provisioned as code.

## The Problem

Election data at national scale arrives messy, fragmented, and enormous. Results are published per precinct across every region, province, and municipality, plus overseas voting, and need to be deduplicated, standardized, and joined against precinct, turnout, and contest metadata before any question can be answered. The goal was a reproducible pipeline where the path from raw scrape to a trustworthy ranking table is fully automated and tested, not a pile of one-off scripts.

## How It Works

| Stage              | What happens                                                                                                    |
| ------------------ | --------------------------------------------------------------------------------------------------------------- |
| **Collection**     | Async scraping with `asyncio` / `aiohttp`, full geographic coverage plus overseas precincts, dedup and retries. |
| **Processing**     | JSON → CSV conversion for 10 structured datasets, validation and schema standardization.                        |
| **Landing**        | CSVs uploaded to BigQuery raw tables; GCP datasets, buckets, and IAM provisioned via Terraform.                 |
| **Transformation** | dbt models across staging → intermediate → marts, with data-quality tests at every boundary.                    |
| **Analytics**      | Pre-aggregated marts ready for dashboards, mapping, and time-series use. No business logic in the BI layer.     |

The dbt layer follows a clean lineage: **staging** (`stg_election_results`, `stg_precincts`) cleans and derives fields; **intermediate** (`int_candidate_performance`, `int_geographic_analysis`) encodes rankings and turnout logic; **marts** (`mart_senate_results`, `mart_turnout_analysis`) expose the tables analysts actually query.

## Key Results

- **92K+ raw JSON files** scraped and deduplicated across all Philippine regions and overseas precincts.
- **~8M individual candidate votes (2.4GB)** processed into `election_results.csv`, joined against ~3M municipal/barangay tallies and ~110K precinct records.
- **10 structured datasets** including contest stats (~500K records), barangay summaries (~42K), and overseas results (~50K).
- **Analytics marts** answer candidate performance, vote-share ranking, regional turnout, and winner determination for every contest.

## Stack

Python (`asyncio`/`aiohttp`, pandas) · dbt (staging/intermediate/marts) · BigQuery · Google Cloud Storage · Terraform (BigQuery, IaC, IAM, scheduling, monitoring) · Great Expectations · pytest, infrastructure as code so the entire environment is version-controlled and reproducible with a single `deploy.sh`.

## Takeaway

At this scale the hard part isn't the analysis. It's making an unreliable, high-volume scrape trustworthy. Modeling the pipeline as explicit, tested layers (raw → staging → intermediate → marts) with Terraform-managed infrastructure turned a fragile collection problem into an analytics platform where every number traces back to a validated source. Full setup, models, and SQL examples live in the [repository README](https://github.com/cancinoray/2025-comelec-national-and-local-election#readme).
