# Next.js Migration Guide - Remaining Tasks

## ✅ Completed
- [x] Phase 1: Project setup (dependencies, config, directory structure)
- [x] Phase 1: Placeholder images created
- [x] Phase 2: Core components migrated (Header, Footer, Hero, Services, WhyChooseUs, ServiceArea, StickyMobileCTA)
- [x] Phase 3: Root layout created
- [x] Phase 4: Home page created
- [x] Phase 4: Services page created
- [x] Phase 5: Old files deleted

## 🚀 Next Steps - Remaining 13 Pages

All pages follow the same pattern. Here's a template for each:

### Template for Service Pages

```typescript
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Service Title | Top Rated Air Duct Cleaning',
  description: 'Description of service...',
}

export default function ServicePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Service Title</h1>
          <p className="text-xl text-blue-100 max-w-2xl">Service description</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Add page-specific content */}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <a href={COMPANY_INFO.phoneLink} className="inline-block bg-brand-lime hover:bg-lime-400 text-brand-blue font-bold py-4 px-10 rounded-full">
            Call {COMPANY_INFO.phone}
          </a>
        </div>
      </section>
    </div>
  )
}
```

## 📋 Remaining 13 Pages to Create

### Folder Structure:
```
src/app/
├── air-duct-cleaning/page.tsx              ✅ [Use old AirDuctCleaningPage.tsx]
├── dryer-vent-cleaning/page.tsx            📝 [Use old DryerVentCleaningPage.tsx]
├── duct-installation-repair/page.tsx       📝 [Use old AirDuctInstallationRepairPage.tsx]
├── dryer-vent-installation/page.tsx        📝 [Use old DryerVentInstallationPage.tsx]
├── commercial-services/page.tsx            📝 [Use old CommercialServicesPage.tsx]
├── uv-light-installation/page.tsx          📝 [Use old UVLightPage.tsx]
├── mold-testing/page.tsx                   📝 [Use old MoldTestingPage.tsx]
├── blown-in-insulation/page.tsx            📝 [Use old BlownInInsulationPage.tsx]
├── hvac-installation/page.tsx              📝 [Use old HVACInstallationPage.tsx]
├── crawlspace-waterproofing/page.tsx       📝 [Use old CrawlspaceWaterproofingPage.tsx]
├── why-us/page.tsx                         📝 [Use old WhyUsPage.tsx]
├── service-area/page.tsx                   📝 [Use old ServiceAreaPage.tsx]
└── contact/page.tsx                        📝 [Use old ContactPage.tsx]
```

## 🔄 Migration Steps for Each Page

For each remaining page:

1. **Find the old page** in `/pages/` directory
2. **Copy the JSX content**
3. **Create new file** in `src/app/[route]/page.tsx`
4. **Update imports:**
   - Change `import { useEffect } from 'react'` → Remove (use generateMetadata)
   - Change `import { Link } from 'react-router-dom'` → `import Link from 'next/link'`
   - Change `import Image from 'img'` → `import Image from 'next/image'`
   - Change `import { constants } from '../constants'` → `import { constants } from '@/lib/constants'`
5. **Remove useEffect hooks** for document.title
6. **Add metadata export** at top of file
7. **Update Link props:**
   - Change `to="/path"` → `href="/path"`
   - Change internal relative links to absolute paths
8. **Update img tags:**
   - Change `<img src="https://..." />` → `<Image src="/images/placeholders/..." />`
   - Add appropriate props: `width`, `height` or `fill`, `sizes`

## 🖼️ Image Placeholders Available

All in `public/images/placeholders/`:
- `hero-bg.jpg` - Hero background
- `technician.jpg` - Technician working
- `dirty-duct.jpg` - Before image
- `clean-duct.jpg` - After image
- `uv-light.jpg` - UV light technology
- `duct-repair.jpg` - Repair work

## 🚀 Development Server

Running on: `http://localhost:3001`

Test command:
```bash
npm run dev
```

Build for production:
```bash
npm run build
npm run start
```

## 📝 Important Notes

- All components in `src/components/` are ready
- Root layout in `src/app/layout.tsx` includes Header, Footer, StickyMobileCTA
- Tailwind CSS is build-time (no more CDN)
- All custom colors, animations, and utilities preserved
- TypeScript support enabled
- Next.js Image optimization enabled

## ✨ Domain Configuration

Update these files with your actual domain `topratedairduct.com`:

1. `src/app/layout.tsx` - Line 23: `url: 'https://topratedairduct.com'`
2. Create `src/app/sitemap.ts` - Add all routes with base URL
3. Create `src/app/robots.ts` - Add sitemap URL

## 🎯 Final Checklist

- [ ] Create remaining 13 page files
- [ ] Test all routes at localhost:3001
- [ ] Run `npm run build` - should complete without errors
- [ ] Test production build with `npm run start`
- [ ] Deploy to GitHub
- [ ] Connect to Vercel for deployment
- [ ] Test in production
- [ ] When customer approves, update domain to real hosting

## 💡 Quick Copy-Paste for Each Page

```bash
# Create folder for each route
mkdir -p src/app/route-name

# Create page.tsx inside
# Copy content from old pages/ files
# Update imports as listed above
```

## 📚 File Locations

**Old pages to migrate from:**
- `./pages/AirDuctCleaningPage.tsx`
- `./pages/DryerVentCleaningPage.tsx`
- `./pages/AirDuctInstallationRepairPage.tsx`
- `./pages/DryerVentInstallationPage.tsx`
- `./pages/CommercialServicesPage.tsx`
- `./pages/UVLightPage.tsx`
- `./pages/MoldTestingPage.tsx`
- `./pages/BlownInInsulationPage.tsx`
- `./pages/HVACInstallationPage.tsx`
- `./pages/CrawlspaceWaterproofingPage.tsx`
- `./pages/WhyUsPage.tsx`
- `./pages/ServiceAreaPage.tsx`
- `./pages/ContactPage.tsx`

**New locations:**
- `src/app/air-duct-cleaning/page.tsx`
- `src/app/dryer-vent-cleaning/page.tsx`
- `src/app/duct-installation-repair/page.tsx`
- `src/app/dryer-vent-installation/page.tsx`
- `src/app/commercial-services/page.tsx`
- `src/app/uv-light-installation/page.tsx`
- `src/app/mold-testing/page.tsx`
- `src/app/blown-in-insulation/page.tsx`
- `src/app/hvac-installation/page.tsx`
- `src/app/crawlspace-waterproofing/page.tsx`
- `src/app/why-us/page.tsx`
- `src/app/service-area/page.tsx`
- `src/app/contact/page.tsx`
