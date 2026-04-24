<pre class="overflow-visible! px-0!" data-start="147" data-end="1184"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span># Hierarchy Analyzer</span><br/><br/><span>A full-stack web application that processes node relationships and visualizes hierarchical structures while detecting cycles.</span><br/><br/><span>This project was built as part of the SRM Full Stack Engineering Challenge.</span><br/><br/><span>---</span><br/><br/><span>## Overview</span><br/><br/><span>The application accepts a list of node relationships in the format:</span><br/><br/><span>["A->B", "B->C", "X->Y"]</span><br/><br/><span>It then:</span><br/><span>- Constructs hierarchical trees</span><br/><span>- Detects cycles in graphs</span><br/><span>- Identifies invalid inputs and duplicate edges</span><br/><span>- Returns a structured response</span><br/><span>- Visualizes the result in an interactive UI</span><br/><br/><span>---</span><br/><br/><span>## Tech Stack</span><br/><br/><span>Frontend</span><br/><span>- React.js</span><br/><span>- CSS (custom styling, no UI frameworks)</span><br/><br/><span>Backend</span><br/><span>- Node.js</span><br/><span>- Express.js</span><br/><br/><span>Hosting</span><br/><span>- Frontend: Vercel</span><br/><span>- Backend: Render</span><br/><br/><span>---</span><br/><br/><span>## Features</span><br/><br/><span>- Input validation (strict format: X->Y)</span><br/><span>- Duplicate edge handling</span><br/><span>- Multi-tree support</span><br/><span>- Cycle detection using DFS</span><br/><span>- Depth calculation for trees</span><br/><span>- Clean tree visualization</span><br/><span>- Dark mode support</span><br/><span>- Responsive UI</span><br/><br/><span>---</span><br/><br/><span>## API Specification</span><br/><br/><span>Endpoint  </span><br/><span>POST /bfhl</span><br/><br/><span>### Request Body</span><br/><br/><span>```json</span><br/><span>{</span><br/><span>  "data": ["A->B", "B->C"]</span><br/><span>}</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

### Response

<pre class="overflow-visible! px-0!" data-start="1200" data-end="1402"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>{</span><br/><span>  "user_id": </span><span class="ͼr">"yourname_ddmmyyyy"</span><span>,</span><br/><span>  "email_id": </span><span class="ͼr">"your_email"</span><span>,</span><br/><span>  "college_roll_number": </span><span class="ͼr">"your_roll"</span><span>,</span><br/><span>  "hierarchies": [],</span><br/><span>  "invalid_entries": [],</span><br/><span>  "duplicate_edges": [],</span><br/><span>  "summary": {}</span><br/><span>}</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

## Project Structure

<pre class="overflow-visible! px-0!" data-start="1431" data-end="1732"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="relative"><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>bfhl-project/</span><br/><span>│</span><br/><span>├── backend/</span><br/><span>│   ├── index.js</span><br/><span>│   ├── utils/</span><br/><span>│   │   ├── validator.js</span><br/><span>│   │   ├── graphBuilder.js</span><br/><span>│   │   ├── treeBuilder.js</span><br/><span>│   │   └── summary.js</span><br/><span>│</span><br/><span>├── frontend/</span><br/><span>│   ├── src/</span><br/><span>│   │   ├── components/</span><br/><span>│   │   ├── services/</span><br/><span>│   │   ├── App.js</span><br/><span>│   │   └── App.css</span><br/><span>│</span><br/><span>└── README.md</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

## Running Locally

### Backend

<pre class="overflow-visible! px-0!" data-start="1772" data-end="1820"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼs">cd</span><span> backend</span><br/><span class="ͼs">npm</span><span> install</span><br/><span class="ͼs">node</span><span> index.js</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Runs on:

[http://localhost:5000](http://localhost:5000)

---

### Frontend

<pre class="overflow-visible! px-0!" data-start="1875" data-end="1920"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼs">cd</span><span> frontend</span><br/><span class="ͼs">npm</span><span> install</span><br/><span class="ͼs">npm</span><span></span><span class="ͼs">start</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Runs on:

[http://localhost:3000](http://localhost:3000)

---

## Deployment

### Backend (Render)

Example:

[https://your-backend.onrender.com/bfhl]()

---

### Frontend (Vercel)

Example:

[https://your-frontend.vercel.app]()

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

<pre class="overflow-visible! px-0!" data-start="2842" data-end="2891"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="relative"><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><br/><span>---</span><br/><br/><span># ✅ What to do now</span><br/><br/><span>1. Create file:</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

README.md

<pre class="overflow-visible! px-0!" data-start="2902" data-end="3005"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="relative"><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><br/><span>2. Paste this</span><br/><br/><span>3. Commit + push:</span><br/><span>```bash</span><br/><span>git add README.md</span><br/><span>git commit -m "Add README"</span><br/><span>git push</span></div></div></div></div></div></div></div></div></div></div></div></div></div></pre>
