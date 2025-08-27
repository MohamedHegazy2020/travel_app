# Travel App

A modern, responsive travel booking web application built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and TypeScript. This project demonstrates advanced front-end engineering skills, including component-driven development, performance optimization, and best practices for SEO.

## Folder Structure

```
.
├── app/                # Next.js app directory (routing, layout, global styles)
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/         # Reusable UI components
│   ├── Button.tsx
│   ├── Camp.tsx
│   ├── Features.tsx
│   ├── Footer.tsx
│   ├── GetApp.tsx
│   ├── Guide.tsx
│   ├── Hero.tsx
│   └── Navbar.tsx
├── constants/          # Shared constants
│   └── index.ts
├── public/             # Static assets (images, SVGs)
│   ├── apple.svg
│   ├── boat.png
│   └── ...
├── styles/             # Global and component styles (Tailwind)
├── .next/              # Build output (auto-generated)
├── package.json        # Project metadata and scripts
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```

## Features

- **Modern UI:** Built with reusable React components and Tailwind CSS for rapid styling.
- **Responsive Design:** Mobile-first layouts and adaptive components.
- **Type Safety:** TypeScript throughout for robust, maintainable code.
- **SEO Optimization:** Semantic HTML, optimized images, and meta tags for better search engine visibility.
- **Performance:** Fast load times, code splitting, and lazy loading for optimal user experience.

## Performance & SEO Testing

The project was audited using [Lighthouse](https://developers.google.com/web/tools/lighthouse):

- **Performance:** Scores above 90, with optimized images, efficient code splitting, and minimal render-blocking resources.
- **Accessibility:** Follows best practices for accessible navigation and content.
- **Best Practices:** Uses HTTPS, avoids deprecated APIs, and ensures secure dependencies.
- **SEO:** Proper use of meta tags, descriptive titles, and semantic markup for discoverability.

## Getting Started

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Deployment

Deploy easily on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

---

Built with ❤️ by [Mohamed Hegazy]
