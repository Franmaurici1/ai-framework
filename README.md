# UATP AI Adoption Framework

A single-page informative website presenting UATP's 3-stage AI adoption framework. Built with React, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.

## Overview

This website presents a structured approach to AI adoption for UATP, covering:

1. **Stage 1 - Market Tools with Governance**: Foundation stage focusing on best-in-class AI tools and governance
2. **Stage 2 - Quick-Win Automations**: Acceleration stage with simple automations and micro-apps
3. **Stage 3 - Tailored AI Systems**: Transformation stage with custom enterprise AI solutions

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - UI component library
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   └── Header.tsx           # Sticky navigation header
│   ├── sections/
│   │   ├── Hero.tsx             # Hero section with gradient background
│   │   ├── Challenge.tsx        # Challenge cards section
│   │   ├── StagesOverview.tsx   # 3-stage overview cards
│   │   ├── Stage1.tsx           # Stage 1 detailed section
│   │   ├── Stage2.tsx           # Stage 2 detailed section
│   │   ├── Stage3.tsx           # Stage 3 detailed section
│   │   ├── ToolsPricing.tsx     # Tools & pricing summary table
│   │   └── NextSteps.tsx        # Next steps CTA section
│   └── ui/
│       ├── button.tsx           # Button component
│       ├── card.tsx             # Card components
│       └── table.tsx            # Table components
├── data/
│   └── stages.ts                # Mocked data for all sections
├── lib/
│   └── utils.ts                 # Utility functions (cn helper)
├── App.tsx                      # Main app component
├── main.tsx                     # Entry point
└── index.css                    # Global styles and Tailwind directives
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd uatp-ai-framework
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Create a production build:
```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Features

### Design & Branding
- UATP-inspired color scheme (navy blue, teal, green)
- Responsive design (desktop-first, mobile-optimized)
- Modern "enterprise fintech" aesthetic
- Generous whitespace and clean layouts

### Animations
- Framer Motion animations throughout
- Fade-in and slide-up effects on scroll
- Hover effects on cards and buttons
- Smooth scroll navigation

### Navigation
- Sticky header with semi-transparent backdrop
- Smooth scroll to section anchors
- Mobile-responsive navigation

### Sections
1. **Hero**: Gradient background, stage badges, CTAs, video placeholder
2. **Challenge**: 3 challenge cards with icons
3. **Stages Overview**: Horizontal timeline with 3 stage cards
4. **Stage 1**: Objectives, department tool matrix, pricing strip
5. **Stage 2**: Automation examples, micro-app UI placeholder, pricing
6. **Stage 3**: Dark background, 3 feature cards, enterprise pricing
7. **Tools & Pricing**: Responsive table/card grid with pricing summary
8. **Next Steps**: CTA section with discovery workshop details

## Customization

### Colors
The UATP brand colors are defined in `tailwind.config.js`:
- Navy: `#0A2540`
- Teal: `#00B8A9`
- Green: `#00D9A5`

### Content
All content is mocked data stored in `src/data/stages.ts`. Update this file to change:
- Challenge descriptions
- Stage details and objectives
- Tool names and pricing
- Department-specific tool recommendations

### Components
All components are modular and reusable. Modify individual section components in `src/components/sections/` to customize layouts and content.

## Notes

- This is a **frontend-only** project with **no backend** or API calls
- All data is **mocked** and stored in TypeScript files
- Designed for **live presentations** (under 5 minutes)
- Placeholders are included for images and videos that can be replaced later

## Browser Support

Modern browsers with ES6+ support:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

Proprietary - UATP Internal Use
