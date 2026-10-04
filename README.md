# Sidhil Sivadas Manoli — Portfolio

Personal portfolio of a Senior Technical Lead (Full Stack) with 12+ years of experience in Node.js, React, PHP/Laravel, Python and AWS.

Built with **Next.js**, **TypeScript** and **Tailwind CSS**, with a hand-written CSS motion system:

- Scroll-driven progress bar (`animation-timeline: scroll()`), no JavaScript
- Animated counters using CSS `@property`
- Scroll-reveal driven by a single IntersectionObserver; all motion lives in CSS
- Compositor-only animations (`transform` / `opacity`) and full `prefers-reduced-motion` support
- Fully responsive, mobile-first layout

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production build

```bash
npm run build
npm start
```

## Editing content

All content (profile, experience, projects, skills, contact) lives in [`src/data/data.tsx`](src/data/data.tsx).
Animations are in [`src/styles/motion.scss`](src/styles/motion.scss).

## Credits

Based on the MIT-licensed [react-resume-template](https://github.com/tbakerx/react-resume-template) by Tim Baker.
