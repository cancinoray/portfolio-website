---
title: "Machine Learning Zoomcamp Coursework"
summary: "My completed coursework from the Machine Learning Zoomcamp: regression, classification, and neural networks, taken all the way through to deployed models on Kubernetes."
publishedAt: "2024-11-06"
readingTime: "3 min read"
tags: ["Python", "scikit-learn", "TensorFlow", "Docker", "Kubernetes"]
githubUrl: "https://github.com/cancinoray/ml-zoomcamp-2024"
role: "Learner"
timeline: "Self-directed · 2024"
highlights:
  - "9 modules completed"
  - "Regression → deep learning"
  - "Deployed models with Flask & Kubernetes"
  - "Notebooks organized by module"
---

## Overview

The [Machine Learning Zoomcamp](https://github.com/DataTalksClub/machine-learning-zoomcamp) is a free, project-based course from DataTalksClub that walks through the full lifecycle of a machine learning project, from framing a problem and training a first model to shipping it as a running service. This repository is my completed coursework: the notebooks, scripts, and deployment work I built while working through the camp end to end.

It isn't a single polished application so much as a record of the progression: each module builds on the last, and the repo is organized into `module-1` through `module-6` directories that group the work as the course moved from fundamentals into deployment and serving.

## What's Covered

| Module | Topic                               |
| ------ | ----------------------------------- |
| 1      | Introduction to Machine Learning    |
| 2      | Machine Learning for Regression     |
| 3      | Machine Learning for Classification |
| 4      | Evaluation Metrics                  |
| 5      | Deploying ML Models                 |
| 6      | Decision Trees & Ensemble Learning  |
| 7      | Neural Networks & Deep Learning     |
| 8      | Serverless Deep Learning            |
| 9      | Kubernetes & TensorFlow Serving     |

The arc is deliberate: start with the framing and a linear regression model, move into classification and the metrics that tell you whether a model is actually good, then take a trained model and put it behind a real interface. The later modules push deployment further: containers, serverless functions, and finally Kubernetes with TensorFlow Serving.

## Stack

Python · scikit-learn · TensorFlow · Flask · Docker · Kubernetes, the same tools the course uses, kept close to how each module teaches them.

## Takeaway

The part that stuck with me wasn't any single model. It was seeing a trained notebook become a service. Going from regression to deep learning and then deploying that work with Flask, Docker, and Kubernetes is what turned the coursework into a working understanding of how an ML project actually ships.
