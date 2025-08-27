# KrowdKraft Website

> A modern, responsive website for KrowdKraft - bridging brands to Gen Z culture through authentic community experiences.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/KrowdKraft.git
cd KrowdKraft

# Install dependencies
npm install

# Copy environment template
copy env.template .env.local
# Fill in your actual values in .env.local

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the website.

## 📁 Project Structure

```
KrowdKraft/
├── public/                          # Static assets
│   ├── images/                      # All images organized by section
│   │   ├── partners/               # Partner/collaboration logos (PNG/SVG)
│   │   ├── events/                 # Event photos and backgrounds
│   │   └── team/                   # Team member photos (if needed)
│   ├── KrowdKraft_Logo.png        # Main logo (used throughout site)
│   └── favicon.ico                 # Website favicon
├── src/
│   ├── app/                        # Next.js 14 App Router pages
│   │   ├── about/                  # About page
│   │   ├── api/                    # API routes for forms and integrations
│   │   │   ├── newsletter/         # Newsletter subscription (→ Google Sheets)
│   │   │   ├── partner-request/    # Partnership forms (→ Google Sheets)
│   │   │   └── send-email/         # Email sending (proposals, quotes → Gmail)
│   │   ├── community/              # Community page with events and partnerships
│   │   ├── contact/                # Contact form page
│   │   ├── events/                 # Events listing and individual event pages
│   │   ├── join-community/         # Linktree-style social media page
│   │   ├── services/               # Services page with detailed descriptions
│   │   ├── work/                   # Portfolio/case studies page
│   │   └── layout.tsx              # Root layout with Google Analytics
│   ├── components/                 # Reusable React components
│   │   ├── common/                 # Shared utility components
│   │   │   ├── animated-button.tsx # Reusable animated button component
│   │   │   ├── dynamic-grid.tsx    # Auto-adjusting grid layout component
│   │   │   └── section-header.tsx  # Standardized section headers
│   │   ├── sections/               # Page section components
│   │   │   ├── community/          # Community page specific sections
│   │   │   │   ├── hero.tsx        # Community hero with stats
│   │   │   │   ├── past-events.tsx # Exhibition-style events gallery
│   │   │   │   ├── upcoming-events.tsx # Future events and notifications
│   │   │   │   ├── event-proposal.tsx  # Event proposal form
│   │   │   │   └── past-collaborations.tsx # Partner cards with logos
│   │   │   ├── about.tsx           # About section
│   │   │   ├── hero.tsx            # Main hero section
│   │   │   ├── services-preview.tsx # Services preview with 2x2 grid
│   │   │   ├── team.tsx            # Team carousel
│   │   │   └── footer.tsx          # Website footer
│   │   ├── ui/                     # UI components (shadcn/ui)
│   │   ├── navigation.tsx          # Main navigation bar
│   │   └── quote-modal.tsx         # Custom quote request modal
│   ├── data/                       # Static data and content
│   │   ├── services.ts             # Services data and descriptions
│   │   ├── events.ts               # Events data for listings
│   │   └── case-studies.ts         # Portfolio case studies
│   ├── lib/                        # Utility functions
│   ├── store/                      # State management (Zustand)
│   ├── styles/                     # Global CSS and Tailwind config
│   └── types/                      # TypeScript type definitions
├── google-apps-scripts/            # Google Apps Script code for sheets integration
│   ├── newsletter-webhook.js       # Newsletter → Google Sheets
│   └── partnership-webhook.js      # Partnerships → Google Sheets
├── SECURITY.md                     # Security guidelines and checklist
└── package.json                   # Dependencies and scripts
```

## 🖼️ Image Guidelines

### Adding Images to Sections

#### **Partner Logos** (`public/images/partners/`)
- **Format**: PNG or SVG preferred
- **Size**: 200x200px minimum, transparent background
- **Naming**: Use descriptive names with hyphens (e.g., `reva-university.png`)

**Current Required Logos:**
- `reva-university.png` - REVA University logo
- `ms-ramaiah.png` - MS Ramaiah Institute of Technology logo  
- `harsha-institute.png` - Harsha Institute of Management Studies logo
- `t-john-institute.png` - T John Institute of Technology logo

- **Usage**: Update `src/components/sections/community/past-collaborations.tsx`

```tsx
// Example: Current partner format
{ 
  name: "REVA University", 
  category: "Higher Education", 
  logo: "RU", 
  logoImage: "/images/partners/reva-university.png" 
}
```

#### **Event Photos** (`public/images/events/`)
- **Format**: JPG/PNG
- **Size**: 1200x800px recommended
- **Naming**: `EventName_DDMMYYYY_##.jpg`
- **Usage**: Update `src/components/sections/community/past-events.tsx`

```tsx
// Example: Adding event background
{ 
  title: "Event Name",
  backgroundImage: "/images/events/eventname_01012024_01.jpg"
}
```

#### **Team Photos** (`public/images/team/`)
- **Format**: JPG/PNG, square ratio
- **Size**: 400x400px
- **Naming**: `firstname-lastname.jpg`
- **Usage**: Update `src/components/sections/team.tsx`

### **Service Icons**
- Uses Lucide React icons
- No images needed, configured in `src/data/services.ts`

## 🔧 Configuration & Customization

### Environment Variables
Copy `env.template` to `.env.local` and configure:

```env
# Email (for proposals & quotes)
EMAIL_USER=krowdkraft.official@gmail.com
EMAIL_PASS=your_gmail_app_password

# Google Sheets (for newsletter & partnerships)
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_ID/exec
GOOGLE_SHEETS_PARTNERSHIP_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_ID/exec

# Social Media Links
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/company/krowdkraft/
NEXT_PUBLIC_TWITTER_URL=https://x.com/KrowdKraft_
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/krowdkraft_/
NEXT_PUBLIC_WHATSAPP_COMMUNITY_URL=https://chat.whatsapp.com/YOUR_LINK
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/krowdkraft-official/30min
```

### Adding New Services
1. Update `src/data/services.ts`
2. Add icon mapping in `src/components/sections/services-preview.tsx`
3. Update `src/app/services/page.tsx` for detailed descriptions

### Adding New Team Members
1. Add photo to `public/images/team/`
2. Update `src/components/sections/team.tsx`
3. Include social media links

### Adding New Events
1. Add photos to `public/images/events/`
2. Update `src/data/events.ts` for upcoming events
3. Update `src/components/sections/community/past-events.tsx` for past events

## 📊 Form Handling Strategy

| Form Type | API Route | Destination | Configuration |
|-----------|-----------|-------------|---------------|
| Newsletter Subscription | `/api/newsletter` | Google Sheets | `GOOGLE_SHEETS_WEBHOOK_URL` |
| Partner With Us | `/api/partner-request` | Google Sheets | `GOOGLE_SHEETS_PARTNERSHIP_WEBHOOK_URL` |
| Submit Proposal | `/api/send-email` | Gmail | `EMAIL_USER` + `EMAIL_PASS` |
| Quote Request | `/api/send-email` | Gmail | `EMAIL_USER` + `EMAIL_PASS` |

### Google Sheets Setup
See `DEPLOYMENT_INSTRUCTIONS.md` for complete setup guide.

## 🚀 Deployment

### Production Environment Variables
**Never use `.env` files in production.** Set environment variables in your hosting platform:

- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site Settings → Environment Variables
- **Other platforms**: Check hosting provider documentation

### Build Commands
```bash
# Development
npm run dev

# Production build
npm run build
npm start

# Linting
npm run lint
```

## 🛠️ Development Guidelines

### Component Architecture
- **Reusable Components**: Use components in `src/components/common/`
- **Section Components**: Page-specific sections in `src/components/sections/`
- **Dynamic Grids**: Use `DynamicGrid` for auto-adjusting layouts
- **Animated Buttons**: Use `AnimatedButton` for consistent button behavior

### Styling Guidelines
- **Tailwind CSS**: Primary styling framework
- **Framer Motion**: For animations and interactions
- **Glass Effect**: Use `glass-card` class for consistent cards
- **Neon Accent**: Use `neon-text` class for highlights

### Adding New Pages
1. Create page in `src/app/new-page/page.tsx`
2. Add navigation link in `src/components/navigation.tsx`
3. Update footer links in `src/components/sections/footer.tsx`
4. Add to `src/types/index.ts` if needed

## 🔒 Security

See `SECURITY.md` for comprehensive security guidelines.

### Key Security Points
- ✅ No hardcoded credentials
- ✅ Environment variables for secrets
- ✅ Input validation on all forms
- ✅ Secure API endpoints
- ✅ Regular dependency updates

## 🐛 Troubleshooting

### Common Issues

#### **Build Errors on Windows**
```bash
# Clear Next.js cache
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
npm run build
```

#### **Partner Form Not Saving to Google Sheets**
1. Check `.env.local` has `GOOGLE_SHEETS_PARTNERSHIP_WEBHOOK_URL`
2. Verify Google Apps Script is deployed correctly
3. Check browser console for API errors

#### **Email Not Sending**
1. Verify Gmail App Password (not regular password)
2. Enable 2-Factor Authentication on Gmail
3. Check `EMAIL_USER` and `EMAIL_PASS` in environment variables

#### **Images Not Loading**
1. Ensure images are in correct `public/images/` folder
2. Use correct path: `/images/folder/filename.ext`
3. Check file permissions and naming conventions

## 📞 Support

For development questions or issues:
1. Check this README and `DEPLOYMENT_INSTRUCTIONS.md`
2. Review `SECURITY.md` for security-related questions
3. Check browser console for client-side errors
4. Check server logs for API-related issues

## 🔄 Maintenance

### Regular Tasks
- **Monthly**: Update dependencies with `npm update`
- **Quarterly**: Review and rotate API keys/passwords
- **As needed**: Update team photos, events, and partnerships
- **Before major releases**: Run security audit

### Content Updates
- **Events**: Update before each new event
- **Partners**: Add new collaborations as they happen
- **Services**: Update when offerings change
- **Team**: Update when team changes

---

**Built with ❤️ using Next.js 14, TypeScript, Tailwind CSS, and Framer Motion**
