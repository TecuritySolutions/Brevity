# Brevity — Next.js Website

Your personal AI intelligence officer. Built with Next.js 14, TypeScript, and App Router.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
  app/
    layout.tsx      # Root layout with metadata & Google Fonts
    page.tsx        # Main page (assembles all sections)
    globals.css     # All CSS styles & design tokens
  components/
    Nav.tsx         # Sticky navigation with mobile menu
    Hero.tsx        # Hero section with live IST clock
    Clock.tsx       # IST clock + BriefPreview (client components)
    Ticker.tsx      # Animated news ticker
    SampleBrief.tsx # Interactive persona selector + brief preview
    Engine.tsx      # Four-layer engine section
    USP.tsx         # Six reasons grid
    Who.tsx         # Persona cards
    Voice.tsx       # Editorial voice comparison
    Invite.tsx      # Invitation code + waitlist form
    Pricing.tsx     # Three-tier pricing
    FAQ.tsx         # Accordion FAQ
    Footer.tsx      # Site footer
    LogoMark.tsx    # SVG logo variants
  lib/
    data.ts         # Brief content and persona data
```

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript**
- **CSS Modules** (global CSS with CSS custom properties)
- Google Fonts: Fraunces, Inter, JetBrains Mono, Libre Baskerville

## Deployment

Deploy to Vercel with zero config:

```bash
npx vercel
```

Or build for production:

```bash
npm run build
npm start
```
