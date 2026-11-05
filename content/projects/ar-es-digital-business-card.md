---
title: "Ar-Es Digital Business Card"
summary: "A digital business card system for Ar-Es Gift Shop: each printed card carries a QR code that opens a shareable profile with contact details, shop links, and one-tap vCard saving."
publishedAt: "2026-11-06"
readingTime: "3 min read"
tags: ["Next.js", "Tailwind CSS", "REST API", "Railway"]
liveUrl: "https://digital-profile.ares-ph.com"
coverImage: "/assets/projects/cards/ar-es-digital-business-card.jpg"
ogImage: "/assets/projects/cards/ar-es-digital-business-card.jpg"
role: "Designer & Developer"
timeline: "2026 · Ar-Es Gift Shop"
highlights:
  - "QR card to profile to saved contact"
  - "Public directory of shared cards"
  - "Self-serve submission flow"
  - "Separate API service on Railway"
---

## Overview

Ar-Es Gift Shop hands out physical cards. Each one now carries a QR code that opens a small digital profile: contact details, the shops where the business sells, a short description, and a button that saves the person straight into the phone's address book. It runs live at [digital-profile.ares-ph.com](https://digital-profile.ares-ph.com).

## The Problem

A printed card carries a phone number and, if you are lucky, a Facebook page. It cannot be updated when a number changes, it does not come back if the card is lost, and it gives the customer no way to act later except to retype the number. The shop also had no way to see, in one place, the cards it had put into the world.

The constraint that shaped everything: whatever opens from that QR has to be usable in the five seconds someone is holding a phone over a card.

## How It Works

| Piece | What it does |
| --- | --- |
| **The card** | Carries a QR code pointing at that person's profile URL. |
| **The profile** | Contact details, shops, company, services, and address, with a one-tap contact save. |
| **The directory** | Every profile its owner has made public appears in a browsable list, so people can be found again without the physical card. |
| **New cards** | A submission flow collects the details for a new profile. |

## What I Built

- **The profile pages**: server-rendered pages per person, served under a strict content security policy with a per-request nonce.
- **The vCard route**: a download endpoint that turns a profile into a contact card a phone will import.
- **The directory and the submission flow**: public browsing of shared cards, plus the form path that collects a new one.
- **The deployment split**: the web app and its API are separate services on Railway, so the profile front end can ship without touching the data layer.

## Status

Live, with the shop's cards published and the directory open.

## Stack

Next.js and Tailwind CSS on the front end, a separate API service behind it, both running on Railway.

## Takeaway

This is a small product where the hard part is not the page, it is the handoff between a physical object and a phone. Working backward from "someone scans this at a market stall" settled the design: one column, large text, nothing to scroll past before the contact buttons.
