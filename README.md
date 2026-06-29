# Nikita Bhandari — Portfolio

A premium, production-ready portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## ✦ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Geist (by Vercel)

## 📁 Folder Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata, fonts
│   ├── page.tsx            # Main page assembling all sections
│   └── globals.css         # Global styles, utilities, animations
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── StatisticsSection.tsx
│   │   ├── TimelineSection.tsx
│   │   ├── ResumeSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       └── motion.tsx      # Reusable Framer Motion primitives
├── hooks/
│   └── useScrollReveal.ts
├── lib/
│   ├── data.ts             # All portfolio data (edit this)
│   └── utils.ts
└── types/
    └── index.ts
public/
├── nikita.png              # Your portrait (already placed)
└── resume.pdf              # ← Add your resume here
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ 
- npm / yarn / pnpm

### Installation

```bash
# Clone or unzip the project
cd nikita-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

## ✏️ Customization

### 1. Update your data
Edit `src/lib/data.ts`:
- `projects` — your project details, GitHub links, tech stacks
- `skillCategories` — skills and proficiency levels
- `timelineItems` — work history and education
- `stats` — your headline statistics

### 2. Update contact info
- Edit `src/components/sections/ContactSection.tsx` → update `contactLinks` with your real email, GitHub, LinkedIn URLs
- Edit `src/components/layout/Navbar.tsx` → update "Hire Me" link
- Edit `src/components/layout/Footer.tsx` → update social links
- Edit `src/components/sections/HeroSection.tsx` → update social link hrefs

### 3. Add your resume
Place your resume PDF at `public/resume.pdf`

### 4. Update metadata
Edit `src/app/layout.tsx` → update `metadata` object with your real info

### 5. Contact form
The contact form currently simulates a send. To make it real:
- **Resend** (recommended): Add `resend` package, create `/api/contact/route.ts`
- **Formspree**: Replace form action with your Formspree endpoint
- **EmailJS**: Use their client-side SDK

## 🌐 Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: GitHub Integration
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Click Deploy — Vercel auto-detects Next.js

### Option 3: Vercel Dashboard
1. Zip the project folder
2. Drag and drop at [vercel.com/new](https://vercel.com/new)

## 🎨 Design System

**Colors**
- Background: `#050505`
- Accent Blue: `#3b82f6`
- Accent Purple: `#8b5cf6`  
- Accent Cyan: `#06b6d4`

**Effects used**
- Glassmorphism (backdrop blur + low-opacity background)
- Gradient borders (CSS mask technique)
- Radial gradient mesh backgrounds
- Floating animation on portrait
- Scroll-triggered reveals via Framer Motion

## 📝 License
Personal use. All rights reserved — Nikita Bhandari.
