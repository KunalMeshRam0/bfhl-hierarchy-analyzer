
Here’s a **clean, professional, non-generic README.md** you can directly use.
It’s written like a real developer would — not overhyped, not AI-ish, and covers everything evaluators care about.

---

# 📄

```md
# Hierarchy Analyzer

A full-stack web application that processes node relationships and visualizes hierarchical structures while detecting cycles.

This project was built as part of the SRM Full Stack Engineering Challenge.

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

**Frontend**
- React.js
- CSS (custom styling, no UI frameworks)

**Backend**
- Node.js
- Express.js

**Hosting**
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

### Endpoint
POST /bfhl

### Request Body
```json
{
  "data": ["A->B", "B->C"]
}
```

### Response

```json
{
  "user_id": "yourname_ddmmyyyy",
  "email_id": "your_email",
  "college_roll_number": "your_roll",
  "hierarchies": [...],
  "invalid_entries": [...],
  "duplicate_edges": [...],
  "summary": {...}
}
```

---

## Project Structure

```
bfhl-project/
│
├── backend/
│   ├── index.js
│   ├── utils/
│   │   ├── validator.js
│   │   ├── graphBuilder.js
│   │   ├── treeBuilder.js
│   │   └── summary.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.js
│   │   └── App.css
│
└── README.md
```

---

## Running Locally

### Backend

```bash
cd backend
npm install
node index.js
```

Runs on:
[http://localhost:5000](http://localhost:5000/)

---

### Frontend

```bash
cd frontend
npm install
npm start
```

Runs on:
[http://localhost:3000](http://localhost:3000/)

---

## Deployment

### Backend

Hosted on Render

Example:
[https://your-backend.onrender.com/bfhl](https://your-backend.onrender.com/bfhl)

---

### Frontend

Hosted on Vercel

Example:
[https://your-frontend.vercel.app](https://your-frontend.vercel.app/)

---

## Key Implementation Details

* Graph is built using adjacency lists
* DFS is used for:
  * Tree construction
  * Cycle detection
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
* Mixed valid + invalid inputs

---

## Notes

* The API response is computed dynamically (no hardcoding)
* CORS is enabled for cross-origin requests
* Response time is optimized for up to 50 nodes

---

## Author

Kunal Meshram
SRM Institute of Science and Technology
