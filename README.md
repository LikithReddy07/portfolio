# Likith Reddy — Portfolio

Personal portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

**Live:** [likithreddy07.github.io/portfolio](https://likithreddy07.github.io/portfolio/)

## Stack

- **React 18** + TypeScript
- **Vite** — build tooling
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — scroll-triggered animations, parallax, role cycling
- **Canvas API** — interactive particle constellation background

## Features

- Interactive particle field that responds to mouse/touch and scroll
- Parallax hero with cycling role text
- Marquee tech stack with 3 rows at different speeds
- Editorial timeline layout for experience
- Configurable CV download (toggle via `data.ts`)
- Film grain texture overlay
- Reduced motion support
- Mobile-responsive with smooth anchor navigation

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Configuration

All content lives in `src/config/data.ts`:

- **personalInfo** — name, contact, socials
- **heroData** — rotating roles, tagline
- **aboutData** — bio, stats
- **experienceData** — jobs, achievements, tech chips
- **educationData** — degrees, institutions
- **techStackData** — technologies with SVG logos
- **cvConfig** — toggle CV download button and set the file URL

```ts
export const cvConfig = {
  enabled: true,
  url: "https://raw.githubusercontent.com/LikithReddy07/portfolio/main/public/resume.pdf",
};
```

## Project Structure

```
src/
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── CursorGlow.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── GrainOverlay.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── ParticleField.tsx
│   └── TechStack.tsx
├── config/
│   └── data.ts
├── assets/
│   └── vectors/        # Tech stack SVG logos
├── styles/
│   └── index.css       # Design tokens + animations
└── main.tsx
```

## Deployment

Deploys to GitHub Pages via GitHub Actions on push to `main`. The workflow is at `.github/workflows/deploy.yaml`.

## Design Decisions

- **Warm dark palette** (#0c0c0c) with a single gold accent (#e8c574)
- **Typography-driven** — Space Grotesk for display, IBM Plex Sans for body
- **One signature interaction** (particle field) instead of many competing effects
- **Subtle scroll reveals** (8-16px offset, 300-600ms) that support content
- **No glassmorphism, no neon, no emojis as icons**
