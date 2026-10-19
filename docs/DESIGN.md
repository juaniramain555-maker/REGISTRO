---
name: Obsidian Signal
colors:
  surface: '#0f1416'
  surface-dim: '#0f1416'
  surface-bright: '#343a3c'
  surface-container-lowest: '#0a0f11'
  surface-container-low: '#171c1e'
  surface-container: '#1b2022'
  surface-container-high: '#252b2d'
  surface-container-highest: '#303637'
  on-surface: '#dee3e5'
  on-surface-variant: '#e7bdbb'
  inverse-surface: '#dee3e5'
  inverse-on-surface: '#2c3133'
  outline: '#ad8886'
  outline-variant: '#5d3f3e'
  surface-tint: '#ffb3b1'
  primary: '#ffb3b1'
  on-primary: '#680011'
  primary-container: '#ff535a'
  on-primary-container: '#5b000d'
  inverse-primary: '#bf0027'
  secondary: '#bbc7dd'
  on-secondary: '#253142'
  secondary-container: '#3c475a'
  on-secondary-container: '#aab6cb'
  tertiary: '#ffb3af'
  on-tertiary: '#68000e'
  tertiary-container: '#ff5355'
  on-tertiary-container: '#5c000b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad8'
  primary-fixed-dim: '#ffb3b1'
  on-primary-fixed: '#410007'
  on-primary-fixed-variant: '#92001c'
  secondary-fixed: '#d7e3fa'
  secondary-fixed-dim: '#bbc7dd'
  on-secondary-fixed: '#101c2c'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3af'
  on-tertiary-fixed: '#410005'
  on-tertiary-fixed-variant: '#930018'
  background: '#0f1416'
  on-background: '#dee3e5'
  surface-variant: '#303637'
  slate-text: '#2B2D42'
  surface-light: '#EDF2F4'
  canvas-dark: '#0D1B2A'
  canvas-depth: '#1B263B'
  canvas-forest: '#0B3C35'
  accent-crimson: '#D90429'
  accent-scarlet: '#EF233C'
typography:
  headline-xl:
    fontFamily: Space Mono
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Space Mono
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Space Mono
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Mono
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Space Mono
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.04em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system delivers a focused, high-precision technical interface engineered for modern authentication gateways, developer portals, and secure dashboard environments. The visual philosophy blends architectural minimalism with dark-mode glassmorphic depth. By pairing clean monospace typography with an atmospheric gradient canvas (spanning deep abyssal navy into muted pine/forest depth), the UI evokes quiet confidence, cryptographic security, and computational precision.

Key attributes:
- **Atmospheric & Controlled:** Deep, rich background environments establish an immersive stage where high-luminance frosted cards float effortlessly.
- **Precision Monospace:** High-utility typographic rhythm provides an unembellished, developer-first aesthetic that remains legible and refined.
- **Tactile Softness:** Substantial border radiuses soften the geometric rigidity of monospaced layouts, balancing cold data precision with human accessibility.
- **Target Audience:** Developers, cybersecurity professionals, crypto/fintech operators, and power users who value distraction-free, high-performance web applications.

## Colors

The palette establishes high chromatic tension between an ultra-deep canvas, high-luminance crisp off-white containers, and electric crimson accents.

### Color Architecture
- **Canvas Base Layer:** A directional gradient flowing from dark midnight navy (`#0D1B2A` / `#1B263B`) into deep emerald pine (`#0B3C35`). This gradient serves as the universal foundation across authentication screens and the dashboard shell.
- **Card & Modal Surfaces (`#EDF2F4`):** Solid or frosted off-white containers that pop against the dark gradient with high optical separation. Within light modal environments, deep slate (`#2B2D42`) serves as primary foreground text.
- **Secondary & Meta (`#8D99AE`):** Used strictly for non-interactive supporting labels, hints, inactive input outlines, and placeholder text.
- **Primary Accent (`#EF233C`):** Electric scarlet deployed for active states, key CTAs, focus indicators, and form validation highlights.
- **Critical & Alert (`#D90429`):** Saturated deep crimson reserved for destructive actions, critical system security warnings, and error banners.

## Typography

Typography prioritizes fixed-width alignment and computational rhythm. Display headings rely on Space Mono for structural punch and technical pedigree, while input fields, metrics, and body copy leverage JetBrains Mono for balanced tabular legibility.

### Rules of Usage
- **Uppercase Hierarchy:** Form field labels, status tags, and metadata timestamps must be rendered in uppercase using `label-sm` or `label-md` with tracking between `+0.04em` and `+0.06em`.
- **Numeric Alignment:** Always utilize tabular figures (`font-variant-numeric: tabular-nums`) across metrics, counters, and authentication code blocks.
- **Line Length:** Restrict text line lengths to a maximum of 64 characters to preserve reading cadence in fixed-width body type.

## Layout & Spacing

The layout is built around a flexible 12-column grid system pinned between strict margins to ensure authentication modules remain anchored while dashboard analytics expand naturally.

### Grid & Breakpoints
- **Desktop (1024px+):** Centered cards adhere to a strict max-width of `440px` for auth flows, and 12-column layouts with `1.5rem` (24px) gutters for internal dashboards. Outer screen margin is `2rem` (32px).
- **Tablet (768px – 1023px):** 8-column layout. Auth dialogs span 6 columns centered. Gutters remain `1.5rem`.
- **Mobile (Below 768px):** 4-column layout. Margin compresses to `1.25rem` (20px) with `1rem` gutters. Auth cards span full width across safe areas.

### Rhythmic Discipline
Interior component padding follows a strict 8px incremental scale (`space-sm` = 8px, `space-md` = 16px, `space-lg` = 24px, `space-xl` = 40px). Inputs and interactive elements maintain generous vertical breathing room (`space-md` inner padding) to balance the dense monospace type.

## Elevation & Depth

Visual depth is achieved through layered frosted glass and ambient, multi-stop diffusion over the deep navy-emerald gradient. Avoid harsh, sharp drop shadows.

### Atmospheric Tiers
- **Tier 0 (Root Canvas):** Fixed linear gradient set at a 135-degree angle: `linear-gradient(135deg, #0D1B2A 0%, #1B263B 55%, #0B3C35 100%)`.
- **Tier 1 (Frosted Glass Container):** Background set to `rgba(237, 242, 244, 0.94)` with `backdrop-filter: blur(20px)` for high-contrast white card contexts, or `rgba(13, 27, 42, 0.65)` with `backdrop-filter: blur(24px)` for dark dashboard cards. Subtly rimmed by a hairline stroke: `1px solid rgba(255, 255, 255, 0.08)`.
- **Tier 2 (Popovers, Modals & Dropdowns):** Solid `#EDF2F4` or rich `#1B263B` with layered ambient shadow: `box-shadow: 0 12px 32px -4px rgba(0, 0, 0, 0.35), 0 4px 12px -2px rgba(0, 0, 0, 0.20)`.
- **Tier 3 (Floating Action & Highlights):** Interactive elements on hover cast an active diffused glow tinted with the primary hue: `box-shadow: 0 8px 24px -4px rgba(239, 35, 60, 0.35)`.

## Shapes

The design balances the rigid structure of monospace typography with oversized, pill-leaning corner radiuses. Standard interactive elements and cards use a base roundedness of `0.5rem` (8px), scaling to `1rem` (16px) on primary input fields, and `1.5rem` (24px) on primary card panels.

- **Primary Auth Cards:** `rounded-xl` (`1.5rem` / 24px) for prominent floating containers.
- **Buttons & Input Fields:** `rounded-lg` (`1rem` / 16px) for approachable touch targets.
- **Chips & Status Tags:** Pill geometry (`9999px` full radius).
- **Nested Inner Surfaces:** Nested tiles must have a radius 4px to 8px smaller than their enclosing parent to preserve concentric geometry.

## Components

### Buttons
- **Primary CTA:** Solid `#EF233C` fill, white `#FFFFFF` text, `font-weight: 600`. Rounded to `1rem`. Zero border. Hover state transitions to deep crimson `#D90429` paired with an ambient red shadow: `0 8px 20px -2px rgba(239, 35, 60, 0.40)`.
- **Secondary / Ghost:** Translucent background (`rgba(141, 153, 174, 0.12)`), text rendered in `#2B2D42` (on light surfaces) or `#EDF2F4` (on dark canvas). Subtle border hairline `1px solid rgba(141, 153, 174, 0.25)`. Hover fills to `rgba(141, 153, 174, 0.22)`.
- **Icon Actions:** 44x44px square footprint, `rounded-lg` (16px), centering 18px stroke icons.

### Form Inputs
- **Base Style:** Borderless default. Fill uses subtle translucent grey (`rgba(141, 153, 174, 0.10)`) within light cards, or `rgba(237, 242, 244, 0.05)` on dark panels. Corner radius `1rem`. Text styled with `body-md` in `#2B2D42`. Placeholder text set in `#8D99AE`.
- **Focus State:** Background shifts to `rgba(255, 255, 255, 0.95)`, accompanied by an outer halo glow: `0 0 0 2px #EF233C`. No heavy solid borders.
- **Error State:** Outline shifts to `1px solid #D90429`, with helper text displayed immediately below in `label-sm` (`#D90429`).

### One-Time Password (OTP) Inputs
- Individual single-character cells sized at 52px width by 60px height.
- Borderless frosted wells with centered `headline-md` typography.
- Filled cells retain a bottom accent line (2px `#EF233C`) to confirm input receipt.

### Cards & Surfaces
- **Auth Container:** Max-width `440px`, padded with `space-xl` (40px). Surface color `#EDF2F4` with subtle frosted pass-through. Elevation uses Tier 2 ambient drop shadows.
- **Dashboard Stat Tiles:** Translucent dark obsidian glass (`rgba(27, 38, 59, 0.65)`), borderless or framed with an ultra-thin `1px solid rgba(255, 255, 255, 0.06)`, internal padding `space-lg` (24px).

### Chips & Badges
- **Status Indicators:** Pill shaped (`rounded-full`), padding `0.25rem 0.75rem`.
- **Security Verified:** Background `rgba(11, 60, 53, 0.20)`, text `#0B3C35`, accompanied by a 6px pulsing green indicator dot.
- **Action Required:** Background `rgba(239, 35, 60, 0.15)`, text `#EF233C`.

### Checkboxes & Toggles
- **Checkbox:** 20x20px dimension, `rounded-md` (6px). Unchecked: background `rgba(141, 153, 174, 0.20)`. Checked: `#EF233C` fill featuring a crisp white SVG check mark.
- **Toggle Switch:** Pill container (44px x 24px) with a 20px circular white thumb floating smoothly across an inactive `#8D99AE` or active `#EF233C` track.