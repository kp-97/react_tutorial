# React with TypeScript From Scratch

This repository is a practical React and TypeScript curriculum with a Vite playground. Work through
the folders in `my-react-app/lessons/` in number order, then edit `my-react-app/src/App.tsx` to
try each idea in the running app.

## Prerequisites

- Docker Desktop (recommended), or Node.js 22 and npm
- A code editor such as VS Code
- Basic HTML, CSS, and JavaScript; TypeScript is taught as it appears

## Start with Docker

From the repository root:

```bash
docker compose up --build
```

Open <http://localhost:5173>. Vite watches the mounted `my-react-app` directory,
so saved edits appear immediately. Stop with `Ctrl+C`; remove the stopped container
with `docker compose down`. Dependencies live in a Docker volume rather than on the
host.

Useful checks:

```bash
docker compose config
docker compose logs -f web
docker compose exec web npm run lint
docker compose exec web npm run typecheck
docker compose exec web npm run build
```

## Start without Docker

```bash
cd my-react-app
npm ci
npm run dev
```

Then open <http://localhost:5173>. Use `npm run lint` to find common mistakes and
`npm run build` to verify a production build.

## How a Vite React project fits together

- `index.html` contains the browser mount point, `<div id="root">`.
- `src/main.tsx` creates the typed React root and renders the top-level component.
- `src/App.tsx` composes the page from smaller components.
- `src/index.css` contains global styles; component CSS can be imported nearby.
- `public/` holds files copied as-is. Imported assets belong under `src/`.
- `package.json` defines dependencies and the `dev`, `build`, `lint`, and `preview` commands.
- `tsconfig.app.json` enables strict checks for the app and lessons.
- `vite.config.ts` configures Vite and its React plugin.

Create a component in a `.tsx` file, type its props, export it, import it where it is needed, and
render it with `<ComponentName />`. Keep component names capitalized. Browser code
updates through Vite hot module replacement; changes to dependencies require a
container restart/rebuild.

## Core React concepts and lessons

| # | Concept | What it teaches |
|---|---|---|
| 01 | JSX and TSX | Expressions, inferred types, attributes, fragments, and TSX rules |
| 02 | Components | Typed reusable UI functions, imports, exports, composition |
| 03 | Props | Prop types, unions, optional values, defaults, `ReactNode` children |
| 04 | Conditional rendering | Branches, ternaries, `&&`, empty UI |
| 05 | Lists and keys | `map`, stable identity, immutable arrays |
| 06 | Events | Typed handlers, React event types, passing arguments |
| 07 | State | `useState` inference and generics, updates, derived values, immutability |
| 08 | Forms | Controlled inputs, validation, submission |
| 09 | Effects | Synchronizing external systems and cleanup |
| 10 | Refs | Typed DOM refs and mutable values without rendering |
| 11 | State design | State/action types, lifting state, reducers, discriminated unions |
| 12 | Context | Sharing cross-cutting data without prop drilling |
| 13 | Custom hooks | Typed parameters and return tuples for reusable behavior |
| 14 | Data fetching | Loading, errors, cancellation, API boundaries |
| 15 | Routing | URL-driven pages and nested layouts |
| 16 | Styling and assets | CSS strategies, responsive UI, imported files |
| 17 | Performance | Measuring first, memoization, lazy loading |
| 18 | Testing and accessibility | User-focused tests, semantics, keyboard support |

Every lesson has a `README.md` and an `Example.tsx`. Import an example into `src/App.tsx`,
complete the exercise, and run typecheck/lint/build before moving
on. The examples intentionally use only React itself; lesson 15 explains where a
routing library fits without forcing an extra dependency on beginners.

## Editing an unfamiliar React project

1. Read `package.json` and run the documented install command.
2. Find the entry module (`src/main.tsx`) and follow imports to the page you see.
3. Search for a visible label or component name rather than guessing filenames.
4. Make one small edit, inspect the browser and console, then run lint and build.
5. Trace data downward through props and events upward through callbacks.
6. Check effects for dependencies and cleanup before changing asynchronous code.
7. Preserve established conventions for files, styling, tests, and state management.

## Capstone

Build a small task tracker with routes for tasks and settings, controlled forms,
filterable lists, persisted preferences, an API loading/error state, and accessible
keyboard interactions. Extract at least one custom hook and reducer, then add tests
for the main user flow. A finished capstone uses every lesson rather than merely
copying the examples.
