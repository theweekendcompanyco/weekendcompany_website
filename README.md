# The WeekEnd Company Website

**Built after hours.** ☕

A modern, personal freelance digital studio website for The WeekEnd Company.

## 🎯 Overview

This is the official website for **The WeekEnd Company**, a personal freelance initiative offering:
- **BUILD** — Websites and landing pages
- **CLEAN** — Data cleanup and spreadsheet organization
- **DESIGN** — Canva designs and visual content
- **HELP** — Digital tasks and practical work

## 🚀 Tech Stack

- **React 18** — UI library
- **Vite** — Build tool (fast refresh, optimized builds)
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first styling
- **Responsive Design** — Mobile-first approach

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

```bash
# Clone or download the project
cd WeekEndCo

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Process.tsx
│   ├── Portfolio.tsx
│   ├── WhyUs.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── SEO.tsx
│   └── ui/              # Reusable UI components
│       ├── Button.tsx
│       └── FormInput.tsx
├── hooks/               # Custom React hooks
│   └── useInView.ts
├── data/               # Configuration & data
│   └── services.ts
├── App.tsx            # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles

public/
├── robots.txt         # Search engine indexing
└── sitemap.xml        # XML sitemap for SEO

index.html            # HTML template with meta tags
vite.config.ts        # Vite configuration
tailwind.config.js    # Tailwind theme & design tokens
tsconfig.json         # TypeScript configuration
package.json          # Dependencies & scripts
```

## 📝 Scripts

```bash
# Development
npm run dev          # Start dev server with hot reload

# Production
npm run build        # Build optimized production version
npm run preview      # Preview production build locally

# Linting (when configured)
npm run lint         # Check code style
```

## 🎨 Customization

### Services
Edit [src/data/services.ts](src/data/services.ts) to add or update services.

### Projects/Portfolio
The portfolio section is ready for projects. Uncomment and modify the project grid in [src/components/Portfolio.tsx](src/components/Portfolio.tsx).

### Colors & Branding
Modify the color scheme in [tailwind.config.js](tailwind.config.js):
- `primary` — Primary color (default: black)
- `accent` — Accent color (default: blue)

### Contact Form
Currently uses `mailto:` fallback. To integrate a backend:

1. Set up a form service (Netlify Forms, Formspree, Supabase, etc.)
2. Update [src/components/Contact.tsx](src/components/Contact.tsx) with your service endpoint
3. Add form submission handling

## 🌐 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Click "Deploy"
   - (Vercel detects Vite automatically)

3. **Custom Domain**
   - Go to project settings on Vercel
   - Add your domain under "Domains"
   - Update DNS records as instructed

### Other Platforms

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

**GitHub Pages:**
Update `vite.config.ts` and follow [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html).

## ♿ Accessibility

This project includes:
- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Focus states for all interactive elements
- `prefers-reduced-motion` support
- Proper color contrast
- Form accessibility

## 🔍 SEO

- ✅ Meta tags (title, description, OG)
- ✅ Structured data (JSON-LD)
- ✅ Sitemap (`/sitemap.xml`)
- ✅ Robots.txt (`/robots.txt`)
- ✅ Semantic HTML
- ✅ Mobile-responsive

## 📱 Responsive Design

Optimized for:
- Mobile (320px and up)
- Tablet (768px and up)
- Desktop (1024px and up)

## 🎯 Performance

- Vite's fast HMR (Hot Module Replacement)
- Optimized production bundle (~156KB JS, 12KB CSS gzipped)
- Image optimization ready
- No unnecessary dependencies

## 🔧 Environment Variables

Currently, no environment variables are required for local development. When integrating a contact form backend, add an `.env.local` file:

```env
VITE_FORM_ENDPOINT=https://your-api.com/contact
VITE_API_KEY=your_api_key_here
```

**Note:** Only variables prefixed with `VITE_` are exposed to the client.

## 📋 Checklist for Going Live

- [ ] Update domain in `index.html` meta tags
- [ ] Set up contact form backend
- [ ] Add real projects to portfolio (or keep empty state)
- [ ] Update social media links
- [ ] Test on all devices
- [ ] Run Lighthouse audit
- [ ] Set up Google Analytics (optional)
- [ ] Submit sitemap to Google Search Console
- [ ] Test form submission end-to-end
- [ ] Review accessibility with screen reader
- [ ] Check performance scores

## 📄 License

This website is a personal project. Feel free to use as a reference or template.

## 🤝 Contributing

This is a personal project, but pull requests and suggestions are welcome!

## 📞 Support

For issues or questions about The WeekEnd Company, contact:
📧 [theweekendcompany.co@gmail.com](mailto:theweekendcompany.co@gmail.com)

---

**Built with React, Vite & Tailwind CSS**
