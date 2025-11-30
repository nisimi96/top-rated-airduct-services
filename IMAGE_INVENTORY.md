# Image Inventory & Replacement Guide

## Current Placeholder Images

All images are currently placeholder JPEGs located in `public/images/placeholders/`

---

## Image Details & Locations

### 1. Hero Background Image
- **Current Path**: `/public/images/placeholders/hero-bg.jpg`
- **Dimensions**: 2400×1350 px (16:9 ratio)
- **Current**: Generic gradient placeholder
- **Used in**:
  - Home page hero section (`/src/app/page.tsx`)
  - Multiple service pages hero sections
- **Recommended Content**:
  - Professional office/workspace setting
  - Team in action or clean HVAC systems
  - High-quality corporate photography
- **Next.js Component**:
  ```tsx
  <Image
    src="/images/placeholders/hero-bg.jpg"
    alt="Professional air duct cleaning service"
    fill
    priority
    sizes="100vw"
    style={{ objectFit: 'cover' }}
  />
  ```

---

### 2. Technician Photo
- **Current Path**: `/public/images/placeholders/technician.jpg`
- **Dimensions**: 1200×1600 px (3:4 ratio - portrait)
- **Current**: Placeholder technician
- **Used in**:
  - Why Choose Us page (`/src/app/why-us/page.tsx`)
  - Component: `src/components/WhyChooseUs.tsx` (line 89)
- **Recommended Content**:
  - Professional headshot of team member
  - Person in company uniform/branded gear
  - Smiling, approachable technician
  - Can be actual employee or professional stock photo
- **Next.js Component**:
  ```tsx
  <Image
    src="/images/placeholders/technician.jpg"
    alt="HVAC Technician"
    width={500}
    height={600}
  />
  ```

---

### 3. Dirty Duct (Before)
- **Current Path**: `/public/images/placeholders/dirty-duct.jpg`
- **Dimensions**: 1200×900 px (4:3 ratio)
- **Current**: Generic before-state placeholder
- **Used in**:
  - Air Duct Cleaning page (`/src/app/air-duct-cleaning/page.tsx`)
  - Before/After comparison section
- **Recommended Content**:
  - Actual dirty ductwork with lint/dust buildup
  - Clear visible contamination
  - Professional macro/close-up photography
  - Shows the problem your service solves
- **Next.js Component**:
  ```tsx
  <Image
    src="/images/placeholders/dirty-duct.jpg"
    alt="Dirty air ductwork before cleaning"
    width={600}
    height={400}
  />
  ```

---

### 4. Clean Duct (After)
- **Current Path**: `/public/images/placeholders/clean-duct.jpg`
- **Dimensions**: 1200×900 px (4:3 ratio)
- **Current**: Generic after-state placeholder
- **Used in**:
  - Air Duct Cleaning page (`/src/app/air-duct-cleaning/page.tsx`)
  - Before/After comparison section (right side)
- **Recommended Content**:
  - Same ductwork location after professional cleaning
  - Visibly clean, pristine condition
  - Good lighting to show results
  - Powerful visual proof of service effectiveness
- **Next.js Component**:
  ```tsx
  <Image
    src="/images/placeholders/clean-duct.jpg"
    alt="Clean air ductwork after professional cleaning"
    width={600}
    height={400}
  />
  ```

---

### 5. UV Light Installation
- **Current Path**: `/public/images/placeholders/uv-light.jpg`
- **Dimensions**: 1600×1200 px (4:3 ratio)
- **Current**: Generic UV light placeholder
- **Used in**:
  - UV Light Installation page (`/src/app/uv-light-installation/page.tsx`)
  - Service showcase section
- **Recommended Content**:
  - UV-C light installed in ductwork
  - Professional installation showing system integration
  - Industrial/commercial HVAC setting
  - Or product photography of UV light unit
- **Next.js Component**:
  ```tsx
  <Image
    src="/images/placeholders/uv-light.jpg"
    alt="UV-C light installation in HVAC system"
    width={800}
    height={600}
  />
  ```

---

### 6. Duct Repair Work
- **Current Path**: `/public/images/placeholders/duct-repair.jpg`
- **Dimensions**: 1600×1200 px (4:3 ratio)
- **Current**: Generic repair placeholder
- **Used in**:
  - Duct Installation & Repair page (`/src/app/duct-installation-repair/page.tsx`)
  - Service demonstration section
- **Recommended Content**:
  - Active repair/installation work in progress
  - Technician sealing ductwork
  - Professional installation in attic/basement/crawlspace
  - Equipment or sealed joints visible
- **Next.js Component**:
  ```tsx
  <Image
    src="/images/placeholders/duct-repair.jpg"
    alt="Professional duct repair and sealing"
    width={800}
    height={600}
  />
  ```

---

## How to Replace Images

### Step 1: Prepare New Images
1. Ensure images are in **JPEG or WebP** format
2. Match the recommended dimensions above
3. Optimize for web (target: <100KB per image)

### Step 2: Upload to Project
```bash
# Replace files in public/images/placeholders/
# Example: drag & drop new hero-bg.jpg into public/images/placeholders/
```

### Step 3: Verify in Code
Images will automatically optimize with Next.js Image component:
- Automatic WebP/AVIF conversion
- Responsive sizing
- Lazy loading
- CDN caching

### Step 4: Test
```bash
npm run dev
# Visit each page and verify images load correctly
```

---

## Image Sources (Recommendations)

### Free Options
- **Unsplash.com** - High quality, free downloads
- **Pexels.com** - Free stock photos
- **Pixabay.com** - Free stock images

### Professional Options
- **Shutterstock** - Professional library (paid)
- **Getty Images** - Licensed content (paid)
- **Professional Photographer** - Best for company branding

### Company-Specific Images
Consider investing in professional photos of:
- Your actual team/technicians
- Real customer installations
- Before/after work samples
- Your office/equipment

---

## Image Best Practices

✓ **Do**:
- Use high-resolution originals (2x the display size)
- Compress without losing quality
- Maintain consistent color grading
- Show real work/team when possible
- Include alt text for SEO

✗ **Don't**:
- Use extremely small images (< 800px wide)
- Use uncompressed PNGs for photos
- Mix different visual styles between pages
- Use overly saturated or fake-looking images
- Ignore alt text for accessibility

---

## File Paths Reference

```
public/
└── images/
    └── placeholders/
        ├── hero-bg.jpg (2400×1350)
        ├── technician.jpg (1200×1600)
        ├── dirty-duct.jpg (1200×900)
        ├── clean-duct.jpg (1200×900)
        ├── uv-light.jpg (1600×1200)
        └── duct-repair.jpg (1600×1200)
```

---

## SEO Considerations

Each image has an `alt` attribute for accessibility:
- ✓ Descriptive alt text included in all components
- ✓ Improves SEO ranking
- ✓ Better accessibility for screen readers
- ✓ Better user experience on slow connections

---

## Image Optimization

Next.js automatically handles:
- **Format conversion** → JPEG→WebP/AVIF
- **Responsive sizes** → Different widths for different devices
- **Lazy loading** → Images load only when needed
- **Caching** → Optimized images cached on Vercel CDN
- **Compression** → Automatic quality optimization

No additional optimization tools needed!

---

**Last Updated**: November 29, 2025
**Status**: All placeholders ready for replacement
