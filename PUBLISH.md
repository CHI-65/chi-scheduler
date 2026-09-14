# Publish 📅 v1.21

Replace repo files:
- index.html
- sw.js
- calendar-jobs.example.json (schema seed; optional on Pages)

Features: Open Jobs tab shows reference (`ref` or `id`) above title on every card (collapsed too); needs-you chip; empty state; version v1.21 / chi-scheduler-1.21

CoS writes live data to Dropbox path: `/Grok Central/calendar-jobs.json` (alongside `calendar-board.json`). App does not edit this file. Prefer `ref` like `📋-0003` so Cal can say "work on 📋-0003".
