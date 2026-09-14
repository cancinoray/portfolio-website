---
title: "Data Analysis for Engineers"
summary: "A free, open course that takes engineers from Python fundamentals to applied statistics through six self-contained notebooks and six real mini-projects."
publishedAt: "2025-09-02"
readingTime: "4 min read"
tags: ["Python", "Data Analysis", "Education", "pandas", "Statistics", "Open Source"]
githubUrl: "https://github.com/cancinoray/data-analysis-for-engineers"
role: "Course Author & Instructor"
timeline: "Self-directed · 2025"
highlights:
  - "6 self-contained module notebooks"
  - "Worked examples across 6 engineering fields"
  - "Every dataset generated in-notebook"
  - "Dual-licensed: CC BY-SA 4.0 + MIT"
---

## Overview

A practical, project-based course that teaches **data analysis in Python to engineers** — starting at language fundamentals and building through pandas, numerical computing, visualization, and statistics into six applied case studies drawn from Philippine engineering practice. It's written for people who already think like engineers but haven't yet made Python a working tool.

The course is **free and open**. Prose, lessons, exercises, and case-study write-ups are licensed [CC BY-SA 4.0](https://github.com/cancinoray/data-analysis-for-engineers/blob/main/LICENSE-CONTENT) — reuse and adapt with attribution, share adaptations under the same license — while the code cells are [MIT](https://github.com/cancinoray/data-analysis-for-engineers/blob/main/LICENSE-CODE). The notebooks are published for reading online, and this repository exists so anyone can **run and edit** the code behind them.

## The Curriculum

Six module notebooks, each self-contained: lessons build progressively, most close with a Knowledge Check, and every module ends in a Mini-Project — with a capstone in Module 6.

| #   | Notebook                             | Focus                                | Mini-Project                             |
| --- | ------------------------------------ | ------------------------------------ | ---------------------------------------- |
| 1   | `module-1-python-foundations.ipynb`  | Python language fundamentals         | Equipment Energy & Cost Analyzer         |
| 2   | `module-2-pandas.ipynb`              | Tabular data manipulation            | Sector Energy Demand Summary Report      |
| 3   | `module-3-numpy-scipy.ipynb`         | Numerical computing & scientific methods | Extreme Load Analysis (Gumbel Method) |
| 4   | `module-4-data-visualization.ipynb`  | Plotting & charting                  | Multi-Panel Facility Energy Report Figure |
| 5   | `module-5-statistics-ml.ipynb`       | Statistics & intro ML                | Facility Energy Regression Model         |
| 6   | `module-6-philippine-applications.ipynb` | Applied case studies & capstone  | Capstone Project (3 tracks)              |

Modules 1–5 are sequential prerequisites for Module 6, and the worked examples rotate across the six fields the course serves — Civil, Mechanical, Electrical, Computer, Chemical, and Industrial — tagged inline for easy filtering.

## How It Runs

Zero friction by design. Each module opens directly in **Google Colab** with a one-click link, where `numpy`, `pandas`, `matplotlib`, `scipy`, `seaborn`, and `plotly` are preinstalled, so cells run as-is. To run locally, the repo needs Python 3.12+ and [uv](https://docs.astral.sh/uv/): clone, `uv sync`, `uv run jupyter lab`. A plain `pip install` path works too. **Every dataset used is generated inside its notebook — nothing to download.**

## Stack

Python · pandas · NumPy · SciPy · Matplotlib · statsmodels · scikit-learn · Jupyter / Google Colab · uv

## Takeaway

Most "learn Python for data" material stays abstract. The bet here is that engineers learn fastest when the dataset comes from their own world — a facility's energy load, a sector's demand curve, an extreme-load return period — and when the lesson ends in something they built. Open licensing was the other half of that bet: attribution-based reuse means instructors can adapt the course to their own students rather than starting over.

The notebooks, setup instructions, and Colab links live in the [repository README](https://github.com/cancinoray/data-analysis-for-engineers#readme).
