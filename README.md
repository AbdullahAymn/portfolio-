# Abdullah Ayman — Personal Portfolio

This repository is the source for the personal portfolio website of Abdullah Ayman. It's a modern, fast, and responsive portfolio built with Next.js and Tailwind CSS to showcase projects, experience, and contact information.

## Key Features

- Clean, responsive UI with glassmorphism and motion effects
- Built with Next.js (App Router) and React + TypeScript
- Styled with Tailwind CSS and custom global styles
- Modular components in `components/` for easy reuse
- Projects stored under `app/portfolio` and `public/projects/`
- Contact form API at `app/api/contact/route.js`

## Tech Stack

- Next.js (React)
- TypeScript
- Tailwind CSS
- Lucide / react-icons for icons
- PostCSS (project includes `postcss.config.mjs`)

## Project Structure (important paths)

- `app/` — Next.js App Router pages and layout
	- `app/page.tsx` — Home page
	- `app/about/page.tsx` — About page
	- `app/portfolio/` — Portfolio listing + JSON data
	- `app/contact/page.tsx` — Contact page
	- `app/api/contact/route.js` — Contact form API route
- `components/` — Reusable UI components (Header, Footer, Cards, etc.)
- `components/layout/Header.tsx` — Main site navigation and social links
- `assets/`, `public/projects/` — Images and project assets
- `interfaces/` — TypeScript interfaces (e.g., `portfolio.ts`)
- `lib/` — Utility helpers

## Getting Started

Prerequisites:

- Node.js 18+ (recommended)
- npm, pnpm, or yarn

Install dependencies:

```powershell
npm install
```

Run the development server:

```powershell
npm run dev
```

Open your browser at `http://localhost:3000`.

Build for production:

```powershell
npm run build
npm run start
```

Linting (if configured):

```powershell
npm run lint
```

## Adding / Editing Projects

- Project data is stored in `app/portfolio/portfolio.json` (used to render the portfolio list).
- Images for projects live in `public/projects/<project-folder>/` — add images there and update `portfolio.json` accordingly.

## Contact Form

- The contact form posts to `app/api/contact/route.js`. 

## Author & Contact

- Abdullah Ayman — Front-End Developer
- LinkedIn: [https://www.linkedin.com/in/aabdullah-ayyman/](https://www.linkedin.com/in/aabdullah-ayyman/)

