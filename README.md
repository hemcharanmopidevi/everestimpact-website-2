# Everest Impact

A Next.js + Tailwind site for Everest Impact, SSC coaching in Hyderabad.

## Home page

1. Hero: what Everest Impact offers, plus "Your path to a government job" in six plain steps
2. Browse categories: course types along a dashed path, free options first
3. Latest announcements (banners)
4. Everything you need in one place: Learn, Practise, Get guidance
5. Courses open for enrolment
6. Our results, Our faculty, What students say, Free lessons, Contact us

The look is navy blue and white with dashed paths and faculty avatars. Colours live as CSS variables at the top of `src/app/globals.css`, with a dark mode.

## Stack

- Next.js 14 (App Router), React 18, TypeScript
- Tailwind CSS, Outfit (via `next/font`)
- next-themes (dark mode), lucide-react icons, qrcode

## Pages

Home, courses (with filters and search), course detail, test series, YouTube playlist, saved courses, AI doubt solver (demo answers), study planner, result dashboard (demo data), sign in and sign up (demo), app download, legal pages, and a 404.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Notes

- Course images and banners load from the ClassX CDN.
- Auth, payments and the contact form are UI demos. Wire up a real provider before launch.
- Legal pages contain placeholder text.
