# Connexis — 3D Relationship-First CRM (Landing + Background Animation)

**Elevator Pitch**  
Connexis transforms your network from spreadsheets and siloed tools into a living, interactive 3D graph of relationships. Whether you're a founder or investor, Connexis helps you **visualize**, **grow**, and **nurture** connections—with AI-powered insights and seamless collaboration. The landing page is enhanced with an immersive background: an interactive globe that transitions into a field of nodes, staying alive behind your content and reflecting your network’s dynamism.

**Stack**  
- **Frontend / UI**: Next.js (App Router)  
- **3D & Animation**: Three.js + GSAP (ScrollTrigger)  
- **Styling & Motion**: TailwindCSS, Framer Motion (for UI overlays)  
- **Deployment / Hosting**: Vercel  
- **CI/CD**: GitHub Actions → automatic deploys to Vercel  
- **Analytics / Insights**: GA4, Amplitude (optional)  

**Live Demo / Deploy**  
View the landing + interactive background in action:  
[https://connexis-network-canvas.vercel.app/](https://connexis-network-canvas.vercel.app/)  

---

## 📁 Project Structure (example)  
```
/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── utils/
└── package.json
```

---

## 🛠️ Usage & Local Dev

1. Clone the repo  
   ```bash
   git clone https://github.com/your-org/connexis.git
   cd connexis
   ```

2. Install dependencies  
   ```bash
   npm install
   ```

3. Run locally  
   ```bash
   npm run dev
   ```

4. Build & preview  
   ```bash
   npm run build
   npm run start
   ```

---

## 🚀 Deployment

This project is connected to Vercel via GitHub. Merging into `main` (or your production branch) triggers an auto-deploy to:  
**https://connexis-network-canvas.vercel.app/**

---

## 🧩 Notes & Next Steps

- The background animation is built into the landing page and persists behind all content.  
- You can fine-tune scroll trigger breakpoints (`30% / 50%`) to match the content layout.  
- Consider adding performance fallback (e.g. lower-detail geometry, disables animation) for low-power devices.  
- Extend this scaffold to the full Connexis product (dashboard, graph interactions, AI suggestions).  
- Add SEO metadata, error pages, analytics tracking, and accessibility enhancements.  

---

## 📝 Credits & Resources  

- Three.js for 3D rendering  
- GSAP ScrollTrigger for scroll-based animation  
- TailwindCSS & Framer Motion for UI  
- Vercel for deployment  
