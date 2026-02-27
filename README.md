# Aven Business Consulting - Next.js App

This is a Next.js application with the converted header from the original HTML/CSS website.

## Features

- ✅ Modern Next.js 15 with TypeScript
- ✅ Responsive header navigation with mobile menu
- ✅ Original Aven design system (colors, fonts, spacing)
- ✅ Smooth animations and transitions
- ✅ Professional gradient buttons
- ✅ Hero section with stats

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
aven-nextjs/
├── app/
│   ├── layout.tsx       # Root layout with Header
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles (header CSS included)
├── components/
│   └── Header.tsx       # Header navigation component
└── public/
    └── Aven-SVG.svg     # Logo
```

## Header Component

The header includes:
- Fixed position with backdrop blur effect
- Responsive navigation menu
- Active link highlighting
- Mobile hamburger menu
- "Book Consultation" CTA button

## Styling

All the original CSS from your HTML file has been converted to work with Next.js:
- CSS custom properties (variables) for colors and spacing
- Google Fonts: Playfair Display & Manrope
- Font Awesome icons
- Responsive breakpoints

## Next Steps

You can now:
1. Add more pages (About, Services, Industries, Contact, Appointment)
2. Connect the navigation links to actual routes
3. Add more sections from your original HTML
4. Integrate backend functionality

## Notes

- The header is now a reusable React component
- Navigation is handled with Next.js Link component for optimal performance
- Mobile menu state managed with React hooks
- All styles use CSS custom properties for easy theming

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
