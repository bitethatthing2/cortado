# Cortado Barbershop - Deployment & Setup Guide

## Project Status

### ✅ Completed
- Project structure cleaned and organized
- Dependencies configured (Next.js, Tailwind CSS v3, Gemini AI)
- API keys properly configured in `.env.local` and `.env.production`
- Chatbot functionality implemented with Gemini AI
- Light/dark theme support ready
- File organization improved

### 📁 Project Structure
```
cortado-barbershop/
├── src/
│   ├── app/            # Next.js App Router pages
│   ├── components/     # React components
│   │   ├── chatbot/    # AI chatbot components
│   │   ├── layout/     # Header, Footer, etc.
│   │   ├── sections/   # Page sections
│   │   └── theme/      # Theme components
│   ├── lib/           # Utilities
│   └── styles/        # Global CSS
├── public/
│   ├── images/        # Image assets
│   └── logos/         # Brand logos
└── documentation/     # Project docs
```

## Environment Variables

### Required API Keys
Create `.env.local` with:
```env
# Google Gemini AI API Key
GEMINI_API_KEY=AIzaSyBWaMlHsqSDdPRBNc23I1I-ARQelgz89WU

# AI Gateway API Key (if needed)
AI_GATEWAY_API_KEY=tOuQ3opP5uBG9MPhOER2L2ty

# Next.js Environment Variables
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For production, update `NEXT_PUBLIC_SITE_URL` to your domain.

## Installation & Setup

### 1. Install Dependencies
```bash
cd cortado-barbershop
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Visit http://localhost:3000

### 3. Build for Production
```bash
npm run build
npm start
```

## Deployment Options

### Option 1: Vercel (Recommended)
1. Push code to GitHub
2. Import project to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Option 2: Netlify
1. Push code to GitHub
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Add environment variables

### Option 3: Traditional Hosting
1. Build locally: `npm run build`
2. Upload `.next`, `public`, `package.json` to server
3. Install dependencies: `npm install --production`
4. Start: `npm start`

## Features Implemented

### 🤖 AI Chatbot
- Powered by Google Gemini AI
- Handles appointment inquiries
- Service information
- Location assistance
- Available at `/api/chatbot`

### 🎨 Theme System
- Light/Dark mode toggle
- Persistent user preference
- Automatic system detection

### 📱 Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interface

### 🔍 SEO Ready
- Meta tags configured
- Sitemap generation
- Robots.txt configured
- Schema markup ready

## Testing Checklist

Before deploying, verify:
- [ ] Chatbot responds correctly
- [ ] Theme switching works
- [ ] All pages load without errors
- [ ] Mobile responsive design
- [ ] Images load properly
- [ ] API endpoints functional
- [ ] Build completes without errors

## Known Issues & Solutions

### Issue: Tailwind CSS Build Error
**Solution**: We've downgraded to Tailwind v3 for stability. The project uses:
- `tailwindcss@^3.4.0`
- Standard PostCSS configuration

### Issue: Multiple Lockfiles Warning
**Solution**: You can safely ignore this warning or remove `package-lock.json` if using pnpm.

## Next Steps

1. **Content Updates**
   - Add actual barbershop photos to `/public/images`
   - Update service descriptions
   - Add team member profiles

2. **Booking Integration**
   - Connect Square Appointments API
   - Or integrate preferred booking system

3. **Analytics**
   - Add Google Analytics 4
   - Configure conversion tracking

4. **Performance**
   - Optimize images (WebP format)
   - Enable caching headers
   - Configure CDN

## Support & Maintenance

### Regular Updates
- Update dependencies monthly: `npm update`
- Check for security updates: `npm audit`
- Monitor API usage in Google Cloud Console

### Backup Strategy
- Regular Git commits
- Database backups (if applicable)
- Environment variable backups

## Contact & Resources

- **Google Gemini API**: https://ai.google.dev/
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs

---

Created: August 6, 2025
Last Updated: August 6, 2025
Version: 1.0.0