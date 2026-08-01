---
name: CubaLink Professional
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#43474f'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#737780'
  outline-variant: '#c3c6d1'
  surface-tint: '#3a5f94'
  primary: '#001e40'
  on-primary: '#ffffff'
  primary-container: '#003366'
  on-primary-container: '#799dd6'
  inverse-primary: '#a7c8ff'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#001e42'
  on-tertiary: '#ffffff'
  tertiary-container: '#003369'
  on-tertiary-container: '#689def'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#a7c8ff'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#1f477b'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#d6e3ff'
  tertiary-fixed-dim: '#a9c7ff'
  on-tertiary-fixed: '#001b3d'
  on-tertiary-fixed-variant: '#00468b'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  title-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

The design system is engineered to project an aura of global professional excellence and unwavering trust. It serves as a digital bridge for the Cuban diaspora, balancing the authority of an enterprise SaaS platform with the elegance of a high-end social network.

The visual direction is **Corporate / Modern** with a focus on high-end minimalism. It utilizes generous whitespace to convey a premium "editorial" feel, moving away from cluttered social feeds toward a curated, executive experience. Precision is the primary driver—every line, margin, and transition must feel deliberate and calculated to inspire confidence in professional networking and cross-border collaboration.

## Colors

The palette is anchored in a hierarchy of depth and prestige. 

- **Primary (Deep Blue):** Used for core branding, primary actions, and navigational anchors. It represents stability and institutional trust.
- **Secondary (Sophisticated Gold):** Reserved exclusively for premium features, high-value status indicators, and subtle "Success" states. It should be used sparingly to maintain its impact.
- **Tertiary (Electric Blue):** Used for interactive elements like links and active states to provide a modern, tech-forward contrast to the deeper primary blue.
- **Surface & Backgrounds:** The interface utilizes a "Crisp White" (#FFFFFF) for primary containers and "Slate Gray" (#F8FAFC) for page backgrounds to create subtle contrast and optical depth.

## Typography

The design system relies on **Inter** to achieve a systematic, utilitarian, yet highly modern aesthetic. The type scale is optimized for legibility in information-dense environments.

- **Headlines:** Use Bold (700) weights with slightly tightened letter spacing to create a commanding presence.
- **Body Text:** Use Regular (400) weight. The line height is intentionally generous (1.6) to ensure long-form professional profiles and articles remain readable.
- **Labels:** Small labels and metadata should use Semi-Bold (600) with a slight tracking increase for clarity at small scales.
- **Hierarchy:** Maintain clear vertical rhythm by using the `title-md` for card headers and `body-md` for standard UI text.

## Layout & Spacing

The design system employs a **Fixed Grid** approach for desktop and a **Fluid Grid** for mobile. 

- **Desktop (1280px+):** A 12-column grid with 24px gutters. Content is centered with 48px outer margins. This provides the "generous whitespace" required for a premium feel.
- **Tablet (768px - 1024px):** 8-column grid with 20px gutters.
- **Mobile (<768px):** 4-column grid with 16px gutters and 16px side margins.

Spacing follows a linear 8px base unit. For premium "breathing room," use 32px (4x) or 48px (6x) for section padding and 16px (2x) for internal component spacing.

## Elevation & Depth

This design system uses **Tonal Layers** supplemented by **Ambient Shadows** to create a structured, professional hierarchy.

- **Level 0 (Background):** #F8FAFC (Slate Gray).
- **Level 1 (Cards/Surface):** White (#FFFFFF) with a very soft, diffused shadow (0px 4px 20px rgba(0, 51, 102, 0.05)). This subtle blue-tinted shadow anchors elements without feeling heavy.
- **Level 2 (Hover/Active):** Slightly more pronounced shadow (0px 8px 30px rgba(0, 51, 102, 0.08)) to indicate interactivity.
- **Outlines:** Use 1px borders in #E2E8F0 for input fields and dividers to maintain a crisp, sharp architectural feel.

## Shapes

The design system utilizes a **Soft (0.25rem)** roundedness philosophy. 

- **Standard Elements:** Buttons, input fields, and tags use 4px (0.25rem) corner radii to appear professional and precise.
- **Large Elements:** Cards and modals use `rounded-lg` (8px) to soften the large surfaces while maintaining a structured look.
- **Avatars:** Professional profiles should use circular masks (pill-shaped) to differentiate human elements from the structured UI.

## Components

- **Buttons:** 
  - *Primary:* Deep Blue (#003366) background, white text, 4px radius. 
  - *Premium:* Gold (#D4AF37) background, deep blue text. Used for "Upgrade" or "Featured" actions.
  - *Ghost:* Transparent with 1px Slate border and Deep Blue text.
- **Inputs:** Clean white backgrounds with 1px #E2E8F0 borders. On focus, the border transitions to Primary Blue (#003366) with a 2px soft glow.
- **Cards:** White surface, 8px radius, subtle shadow. Headers should have a 1px bottom border to separate titles from content.
- **Chips/Badges:** For skills or locations, use a very light tint of blue (#E0E7FF) with Primary Blue text to maintain professional contrast.
- **Iconography:** Use 2px linear icons. Ensure all icons are monochrome (Slate Gray) unless they are active (Primary Blue). Avoid filled icons except for critical status alerts.
- **Progress Indicators:** Use the Secondary Gold (#D4AF37) for professional milestone completion or "Premium Member" badges.