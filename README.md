# Pasindu Bhanuka Portfolio

A responsive portfolio starter using Next.js 16.3, TypeScript and Tailwind CSS.

## Main behaviour

- Fixed responsive navbar.
- Desktop home cover carousel converts vertical scroll into horizontal movement.
- Desktop About section keeps the page visually pinned while the right-side text changes.
- Desktop Projects section keeps the "My Work" heading fixed while project cards move vertically.
- Desktop Education section keeps the large left heading fixed while education/certification groups move vertically.
- Mobile/tablet layouts use normal document scrolling to avoid trapping touch users.
- Left and right columns animate into view from their corresponding directions.
- `prefers-reduced-motion` is respected.

## Colors

- Navbar: `#0d1321`
- Odd sections: `#1d2d44`
- Even sections: `#3e5c76`
- Muted / placeholder / hover: `#748cab`
- Main font: `#f0ebd8`

## Run

```bash
npm install
npm run dev
```

## Customize

Update `data/portfolio.ts` first. Replace the placeholder SVG files in `public/images` with your actual project, education, certification and cover images.

The Contact form is UI-only in this starter. Connect it to your preferred email/API/server-action workflow when you are ready.
