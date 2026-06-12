# ClearDump SEO Image & Metadata Guide

> **Goal**: Rank #1 for "trash bin cleaning Atlanta" and related keywords.  
> **Last updated**: June 2026

---

## 📸 Images Inventory (`/public/images/`)

| File | Alt Text Standard | Used In | OG/Twitter Use |
|------|------------------|---------|----------------|
| `clear-dump-atlanta-trash-bin-cleaning-logo.png` | `Clear Dump – Atlanta Trash Bin Cleaning Service Logo` | Navbar, Footer, Root OG, Book, Privacy, Terms, Cookie | Primary brand OG image |
| `colorful-recycling-bins-atlanta-cleaning-service.png` | `Colorful recycling bins – Atlanta professional bin cleaning service by Clear Dump` | Blog OG: Marketing, Health, Environment | Blog & category OG |
| `residential-trash-bins-curbside-cleaning-atlanta.png` | `Residential trash bins at curbside ready for professional cleaning service in Atlanta GA` | Blog OG: Sanitation, Pest Control, Tips; Contact OG | Service-focused OG |

### Image Naming Convention
All images are named using the **keyword-first** pattern:
```
[primary-keyword]-[secondary-keyword]-[location]-[context].png
```
Example: `residential-trash-bins-curbside-cleaning-atlanta.png`

---

## ✅ Metadata Checklist (per page)

Every page MUST have:
- [ ] `title` — keyword-rich, under 60 characters
- [ ] `description` — compelling, 150-160 characters, includes CTA or benefit
- [ ] `keywords` — 5-8 specific long-tail keywords
- [ ] `alternates.canonical` — full absolute URL
- [ ] `openGraph.images[].url` — use a real image from `/public/images/`
- [ ] `openGraph.images[].alt` — descriptive, keyword-rich alt text (max 125 chars)
- [ ] `openGraph.images[].width` — `1200`
- [ ] `openGraph.images[].height` — `630`
- [ ] `twitter.card` — `"summary_large_image"`
- [ ] `twitter.images[].url` — same as OG
- [ ] `twitter.images[].alt` — same as OG alt

### For legal/utility pages (Privacy, Terms, Cookie, Shop-Coming Soon):
- [ ] `robots: { index: false, follow: true }` ← prevents them diluting SEO

---

## 📄 Page-by-Page Status

| Page | Title | OG Image | Twitter Card | Canonical | Keywords | robots |
|------|-------|----------|-------------|-----------|----------|--------|
| `/` (home) | ✅ | ✅ logo | ✅ | ✅ | ✅ | index/follow ✅ |
| `/blog` | ✅ | ✅ colorful bins | ✅ | ✅ | ✅ | index/follow ✅ |
| `/blog/[slug]` | ✅ dynamic | ✅ per-post | ✅ | ✅ dynamic | ✅ per-post | index/follow ✅ |
| `/book` | ✅ | ✅ logo | ✅ | ✅ | ✅ | index/follow ✅ |
| `/contact` | ✅ | ✅ residential bins | ✅ | ✅ | ✅ | index/follow ✅ |
| `/shop` | ✅ | ✅ colorful bins | ✅ | ✅ | ✅ | **noindex** ✅ |
| `/privacy-policy` | ✅ | ✅ logo | ✅ | ✅ | — | **noindex** ✅ |
| `/terms-of-service` | ✅ | ✅ logo | ✅ | ✅ | — | **noindex** ✅ |
| `/cookie-policy` | ✅ | ✅ logo | ✅ | ✅ | — | **noindex** ✅ |

---

## 🖼️ Rules for Adding New Images

When adding any new image to the project:

### 1. Name it with keywords
```
[what-it-shows]-[location]-[service].png
```
Bad:  `IMG_3421.jpg`, `photo.png`, `hero.jpg`  
Good: `atlanta-trash-bin-cleaning-technician.png`

### 2. Always add `alt` when using `<Image />`
```tsx
<Image
  src="/images/your-image.png"
  alt="Descriptive keyword-rich alt text here – location and service"
  width={1200}
  height={630}
/>
```

### 3. Add to blog post data (`src/data/blog.ts`)
```ts
{
  slug: "your-post-slug",
  title: "Your Post Title",
  ogImage: "/images/your-relevant-image.png",
  ogImageAlt: "Descriptive alt text for the image including keywords Atlanta GA",
  keywords: ["primary keyword", "secondary keyword", "local keyword Atlanta"],
  // ...
}
```

### 4. Add to page metadata
```ts
openGraph: {
  images: [
    {
      url: "/images/your-image.png",
      width: 1200,
      height: 630,
      alt: "Descriptive keyword-rich alt text",
    },
  ],
},
twitter: {
  images: [{ url: "/images/your-image.png", alt: "Same descriptive alt text" }],
},
```

---

## 🔑 Primary Target Keywords

| Priority | Keyword | Page |
|----------|---------|------|
| #1 | trash bin cleaning Atlanta | `/` |
| #2 | garbage can cleaning Atlanta | `/` |
| #3 | recycling bin cleaning Atlanta | `/` |
| #4 | bin cleaning near me | `/` |
| #5 | Atlanta bin cleaning service | `/` |
| #6 | professional trash can cleaning | `/`, `/blog/*` |
| #7 | book trash bin cleaning Atlanta | `/book` |
| #8 | pest prevention trash bins | `/blog/*` |

---

## 🧠 Image SEO Best Practices

1. **File names = keyword phrases** (hyphens, not underscores)
2. **Alt text** = describe the image naturally, include primary keyword + location
3. **OG images** = always 1200×630px for best social sharing
4. **Lazy loading** — Next.js `<Image>` handles this automatically
5. **Priority prop** — use `priority` on hero/above-the-fold images (logo in Navbar ✅)
6. **WebP/AVIF** — Next.js automatically converts PNGs to WebP in production
7. **Never use empty alt=""** on meaningful images (decorative SVGs are fine)

---

## 📊 Schema.org ImageObject (Already Implemented)

The root `layout.tsx` includes a `LocalBusiness` JSON-LD schema with:
```json
{
  "@type": "LocalBusiness",
  "image": "https://cleardump.com/images/clear-dump-atlanta-trash-bin-cleaning-logo.png"
}
```

For blog posts, consider adding `Article` schema with `image` property in the future.
