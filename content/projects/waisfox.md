---
title: "WaisFox"
summary: "A publishing platform for study notes, poetry, and journal entries: a React front end over its own JSON API, with topics, categories, tags, search, and an author workspace."
publishedAt: "2026-11-06"
readingTime: "3 min read"
tags: ["React", "Vite", "JSON API", "Vercel"]
liveUrl: "https://www.waisfox.com"
coverImage: "/assets/projects/cards/waisfox.jpg"
ogImage: "/assets/projects/cards/waisfox.jpg"
role: "Designer & Developer"
timeline: "2026 · Personal"
highlights:
  - "Topics, categories, and tags for every note"
  - "Search across published writing"
  - "Author workspace with drafts and image uploads"
  - "Newsletter signup and RSS"
---

## Overview

WaisFox is where I keep notes as I learn: educational write-ups, poetry, a journal, short thoughts, and a Tagalog corner. The premise is in the tagline, "Learn slowly. Think wais." It runs live at [waisfox.com](https://www.waisfox.com).

## The Problem

Off-the-shelf blogging tools assume every entry is the same kind of thing. One chronological feed, one category per post, and a publishing model built for dated articles. Notes, poems, and journal entries are not the same kind of thing, and a poem does not belong in the same list as a health explainer.

I wanted the opposite: a structure where topics hold categories, tags cut across both, and the front door shows the shape of the writing instead of a single stream.

## What I Built

- **The reading side**: a topic and category tree, tag pages, full-text search, and an RSS feed. Reader preferences (including the light and dark palette) are remembered between visits.
- **The author side**: an authenticated workspace for drafts and publishing, image uploads, and session management, including revoking sessions signed in elsewhere.
- **The API**: a JSON API for posts, topics, categories, tags, search, and newsletter signups, so the front end stays a thin rendering layer over the content.
- **The design**: Bricolage Grotesque for headings, Newsreader for long-form text, and IBM Plex Mono for labels, with theme selection applied before first paint so the page never flashes the wrong palette.

## Status

The platform is live and publishing, starting with the Poetry Corner. Content builds up as I write.

## Stack

React and Vite on the front end, a JSON API behind it, deployed on Vercel. The reading experience is deliberately light: no client-side app shell between the reader and the text.

## Takeaway

The taxonomy turned out to be the real work. A note, a poem, and a journal entry want different lengths, different metadata, and different reading surfaces, and the platform only feels coherent because those differences are modeled rather than flattened into a generic post.
