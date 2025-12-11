# AI Nexus Project Structure

## Overview

This document outlines the complete file structure and organization of the AI Nexus project.

## Root Directory

```
ai-nexus/
├── .gitignore
├── CONTINUING_DEVELOPMENT.md
├── DEVELOPMENT_BRIEF.md
├── PROJECT_STRUCTURE.md
├── PROJECT_SUMMARY.md
├── README.md
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── public/
└── src/
```

## Public Directory

```
public/
├── favicon.ico
├── file.svg
├── globe.svg
├── next.svg
├── vercel.svg
└── window.svg
```

## Source Directory

```
src/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── collections/
│   │   └── page.tsx
│   ├── insights/
│   │   └── page.tsx
│   ├── playbooks/
│   │   └── page.tsx
│   ├── pro/
│   │   └── page.tsx
│   └── tools/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── search/
│   │   └── SearchProvider.tsx
│   ├── tools/
│   │   └── ToolCard.tsx
│   └── ui/
├── lib/
│   └── supabaseClient.ts
```

## Detailed Component Descriptions

### App Directory (`src/app/`)

#### Root Files
- `layout.tsx`: Main layout component with navigation and footer
- `page.tsx`: Homepage with animated particle background and featured tools
- `globals.css`: Global styles and Tailwind configuration

#### Collections (`src/app/collections/`)
- `page.tsx`: Curated collections of AI tools with staff picks section

#### Insights (`src/app/insights/`)
- `page.tsx`: Blog and industry insights with newsletter signup

#### Playbooks (`src/app/playbooks/`)
- `page.tsx`: Workflow guides for integrating AI tools into processes

#### Pro (`src/app/pro/`)
- `page.tsx`: Nexus Pro membership landing page with features and pricing

#### Tools (`src/app/tools/`)
- `page.tsx`: Main tools directory with search and filtering capabilities

### Components Directory (`src/components/`)

#### Layout Components (`src/components/layout/`)
- `Footer.tsx`: Comprehensive footer with navigation links and social media
- `Navigation.tsx`: Responsive navigation bar with mobile menu

#### Search Components (`src/components/search/`)
- `SearchProvider.tsx`: Search context provider (placeholder for Algolia)

#### Tool Components (`src/components/tools/`)
- `ToolCard.tsx`: Reusable component for displaying tool information

#### UI Components (`src/components/ui/`)
- Reserved for generic UI components like buttons, forms, modals, etc.

### Library Directory (`src/lib/`)
- `supabaseClient.ts`: Supabase client configuration (placeholder)

## Asset Organization

### Images and Icons
Stored in the `public/` directory for direct serving:
- SVG icons for UI elements
- Placeholder images for tools and collections
- Favicons and touch icons

### Styles
- `globals.css`: Global styles using Tailwind CSS
- Component-specific styles within component files using Tailwind classes

## Configuration Files

### Package Management
- `package.json`: Project dependencies and scripts
- `package-lock.json`: Locked dependency versions

### TypeScript
- `tsconfig.json`: TypeScript compiler configuration
- `next-env.d.ts`: Next.js type definitions

### Next.js
- `next.config.ts`: Next.js configuration
- `postcss.config.mjs`: PostCSS configuration for Tailwind

### Environment
- `.env.local`: Local environment variables (gitignored)
- `.env.production`: Production environment variables (gitignored)

## Documentation Files

### Project Overview
- `README.md`: Main project documentation
- `PROJECT_SUMMARY.md`: High-level project summary
- `PROJECT_STRUCTURE.md`: This file

### Development Guidance
- `DEVELOPMENT_BRIEF.md`: Phase-by-phase development plan
- `CONTINUING_DEVELOPMENT.md`: Guide for ongoing development

## Build and Deployment

### Output Directories
- `.next/`: Next.js build output (gitignored)
- `node_modules/`: Installed dependencies (gitignored)
- `out/`: Static export directory (if used)

### CI/CD Configuration
- `.github/workflows/`: GitHub Actions workflows (to be added)
- `vercel.json`: Vercel deployment configuration (to be added)

## Testing

### Test Directories
- `__tests__/`: Unit and integration tests
- `__mocks__/`: Mock data for testing

## Scripts

Defined in `package.json`:
- `dev`: Run development server
- `build`: Create production build
- `start`: Start production server
- `lint`: Run ESLint

## Best Practices

### File Naming
- Use PascalCase for React components
- Use camelCase for utility functions
- Use kebab-case for CSS classes and file names

### Component Organization
- Each component in its own directory when it has related files
- Export components as default exports
- Use TypeScript interfaces for props

### Styling
- Use Tailwind CSS utility classes
- Minimize custom CSS
- Follow mobile-first responsive design

This structure provides a scalable foundation for the AI Nexus platform, allowing for easy expansion as new features are added in subsequent development phases.