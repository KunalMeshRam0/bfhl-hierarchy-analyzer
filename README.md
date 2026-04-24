# Hierarchy Analyzer

A full-stack web application that processes node relationships and visualizes hierarchical structures while detecting cycles.

This project was built as part of the SRM Full Stack Engineering Challenge.

---

## Live Demo

Frontend: https://bfhl-hierarchy-analyzer-gamma.vercel.app/
Backend: https://bfhl-hierarchy-analyzer-v4fj.onrender.com/bfhl

---

## Overview

The application accepts a list of node relationships in the format:

["A->B", "B->C", "X->Y"]

It then:

- Constructs hierarchical trees
- Detects cycles in graphs
- Identifies invalid inputs and duplicate edges
- Returns a structured response
- Visualizes the result in an interactive UI

---

## Tech Stack

Frontend

- React.js
- CSS (custom styling, no UI frameworks)

Backend

- Node.js
- Express.js

Hosting

- Frontend: Vercel
- Backend: Render

---

## Features

- Input validation (strict format: X->Y)
- Duplicate edge handling
- Multi-tree support
- Cycle detection using DFS
- Depth calculation for trees
- Clean tree visualization
- Dark mode support
- Responsive UI

---

## API Specification

Endpoint
POST /bfhl

### Request Body

```json
{
  "data": ["A->B", "B->C"]
}
```

### Response

```
{
  "user_id": "kunalmeshram_ddmmyyyy",
  "email_id": "your_email@srmist.edu.in",
  "college_roll_number": "your_roll_number",
  "hierarchies": [],
  "invalid_entries": [],
  "duplicate_edges": [],
  "summary": {}
}
```


## Project Structure

<pre class="overflow-visible! px-0!" data-start="1625" data-end="1926"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="relative"><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>bfhl-project/</span><br/><span>│</span><br/><span>├── backend/</span><br/><span>│   ├── index.js</span><br/><span>│   ├── utils/</span><br/><span>│   │   ├── validator.js</span><br/><span>│   │   ├── graphBuilder.js</span><br/><span>│   │   ├── treeBuilder.js</span><br/><span>│   │   └── summary.js</span><br/><span>│</span><br/><span>├── frontend/</span><br/><span>│   ├── src/</span><br/><span>│   │   ├── components/</span><br/><span>│   │   ├── services/</span><br/><span>│   │   ├── App.js</span><br/><span>│   │   └── App.css</span><br/><span>│</span><br/><span>└── README.md</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

## Running Locally

### Backend

<pre class="overflow-visible! px-0!" data-start="1966" data-end="2010"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="relative"><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>cd backend</span><br/><span>npm install</span><br/><span>node index.js</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Runs on:

[http://localhost:5000](http://localhost:5000)

---

### Frontend

<pre class="overflow-visible! px-0!" data-start="2065" data-end="2106"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="relative"><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>cd frontend</span><br/><span>npm install</span><br/><span>npm start</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Runs on:

[http://localhost:3000](http://localhost:3000)

---

## Deployment

Backend (Render)

[https://bfhl-hierarchy-analyzer-v4fj.onrender.com/bfhl](https://bfhl-hierarchy-analyzer-v4fj.onrender.com/bfhl)

Frontend (Vercel)

[https://bfhl-hierarchy-analyzer-gamma.vercel.app/](https://bfhl-hierarchy-analyzer-gamma.vercel.app/)

---

## Key Implementation Details

* Graph is built using adjacency lists
* DFS is used for tree construction and cycle detection
* A recursion stack is used to detect cycles
* First valid parent is preserved in multi-parent scenarios
* Duplicate edges are ignored after first occurrence

---

## Edge Cases Handled

* Invalid formats (e.g. "hello", "A->", "1->2")
* Self loops (A->A)
* Duplicate edges
* Multiple independent trees
* Pure cycle graphs
* Mixed valid and invalid inputs

---

## Notes

* API responses are generated dynamically (no hardcoding)
* CORS is enabled for cross-origin requests
* Handles inputs efficiently (up to ~50 nodes)

---

## Author

Kunal Meshram

SRM Institute of Science and Technology

<pre class="overflow-visible! px-0!" data-start="3036" data-end="3142"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="relative"><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"></div></div></div></div></div></div></div></div></div></div></div></div></div></p
