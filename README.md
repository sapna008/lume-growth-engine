## Apeiros AI – Lume Retail Platform

This repository contains the marketing & help website for **Lume**, the retail intelligence platform from **Apeiros AI**.  
The site is designed for Indian retailers who want to move from manual billing to digital tools that actually understand how retail works on the ground.

### What this website covers

- **Home / For Retailers**: Positioning, hero, challenges, and how Lume turns billing into a growth engine.
- **Solutions**: Detailed use-cases like Digital Billing, Customer Capture, Credit (Udhaar) Management, Feedback & Engagement, Analytics & Reports.
- **Products**: Lume product overview, core capabilities, how it fits into existing POS/web billing, who Lume is for, and Lume Shop preview.
- **Resources**:
  - **Guides & FAQs** (Quick Guides, FAQs with accordion UI)
  - **Customer Success Stories / Case Studies**
- **Help Center**:
  - **Getting Started with Lume** (onboarding, installer, mobile app flow)
  - **Billing Guide** (Quick Bill, POS Bill, Image Bill, MPOS, E‑Bill Listing)
- **Company**:
  - **About Us** (Apeiros AI story, Lume philosophy, leadership)
  - **Careers**
- **Legal & Pricing**:
  - Pricing plans + comparison
  - Privacy Policy & Terms & Conditions (Hindi + English content)

Almost all key pages support **bilingual content (English + Hindi)** using a shared `LanguageContext` and `t()` helper.

### Tech stack

- **React + TypeScript** (Vite)
- **React Router** for SPA routing and scroll‑to‑top behavior
- **Tailwind CSS** for styling
- **shadcn/ui + lucide-react** for components & icons
- Custom **LanguageContext** for EN / HI toggle

### Local development

```bash
npm install
npm run dev
```

The dev server will start on the default Vite port (usually `http://localhost:5173`).  
Update the `index.html` meta tags if you change branding, share image, or SEO copy.
