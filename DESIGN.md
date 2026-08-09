---
name: "Wajom Mastery Landing Page"
colors:
  bg: "#0a0f0d"
  bg-surface: "#0f1614"
  bg-elevated: "#141c19"
  rule: "#1f2a25"
  rule-accent: "#2a3832"
  ink-primary: "#f5f1e8"
  ink-secondary: "#c9c4b6"
  ink-muted: "#8a8a7e"
  emerald: "#379F76"
  emerald-bright: "#4ec294"
  emerald-dim: "#0c5f48"
  gold: "#d4af37"
  gold-bright: "#e8c75a"
  ruby: "#c25450"
  code-blue: "#9ec5ff"
---

# Design System: Wajom Mastery Landing Page

## 1. Visual Theme & Atmosphere

### Atmosphere & Philosophy
The **Wajom Mastery Landing Page** design system represents a **Tech-Editorial Luxury Dark Mode** aesthetic. It blends high-end course marketing with precise developer/automation aesthetics—combining deep obsidian backgrounds, glowing emerald highlights, gold conversion accents, and glassmorphic technical artifacts.

The design creates an immediate sense of authority, modern AI automation, and high value:
- **Baseline Mood**: Deep, dark obsidian space (`#0a0f0d`) with subtle ambient radial gradients in translucent emerald (`rgba(55, 159, 118, 0.12)`).
- **Dual-Theme Support**: Native dark mode default (`[data-theme="dark"]`) paired with a clean, high-contrast light mode (`[data-theme="light"]`) using smooth 0.3s CSS transitions.
- **Glassmorphism & Depth**: Multi-layered card interfaces utilizing `backdrop-filter: blur(12px) saturate(140%)`, hairline borders (`1px solid #2a3832`), and subtle inset top highlights (`0 1px 0 rgba(255,255,255,0.06)`).
- **Editorial Typography Balance**: High-impact display headlines in tight-geometric serif (`Bricolage Grotesque`) punctuated by elegant italic accents (`Newsreader`), clean body sans (`Hanken Grotesk`), and technical code metrics (`JetBrains Mono`).

---

## 2. Color Palette & Roles

### Primary Foundation (Backgrounds & Borders)

| Color Name | Hex / Value | Dark Role | Light Role |
| :--- | :--- | :--- | :--- |
| **Obsidian Root** | `#0a0f0d` / `#ffffff` | Primary page background (`--bg`) | Page background |
| **Dark Forest Surface** | `#0f1614` / `#f8fafc` | Card & section background (`--bg-2`) | Light surface background |
| **Elevated Dark Container** | `#141c19` / `#f1f5f9` | Inner element / bubble background (`--bg-3`) | Elevated container background |
| **Subtle Forest Border** | `#1f2a25` / `#e2e8f0` | Hairline dividers & rules (`--rule`) | Light rule border |
| **Accent Forest Border** | `#2a3832` / `#cbd5e1` | Card outlines & borders (`--rule-2`) | Accent border |
| **Translucent Glass Topbar** | `rgba(10,15,13,.82)` | Sticky navbar background (`--topbar-bg`) | Translucent white (`rgba(255,255,255,.88)`) |

### Accent & Interactive Palette

| Color Name | Hex / Value | Function & Role |
| :--- | :--- | :--- |
| **Vibrant Emerald** | `#379F76` | Primary brand color (`--emerald`), logo text, live status dots, active hover underlines |
| **Glowing Emerald** | `#4ec294` | High-contrast emerald (`--emerald-2`), status indicators, italic headline emphasis, positive metrics |
| **Deep Emerald Dim** | `#0c5f48` | Translucent background tint (`--emerald-dim`), text selection background |
| **Champagne Gold** | `#d4af37` | High-conversion CTA pill background (`--gold`), pricing display, top offer border |
| **Bright Gold Glow** | `#e8c75a` | Hover state for CTA buttons (`--gold-2`), highlighted bonus text, automated step icons |
| **Crimson Ruby** | `#c25450` | Negative transformation tags (`--ruby`), "Sebelum Wajom" status indicators |
| **Syntax Blue** | `#9ec5ff` | Technical code metrics, JSON values (`--code-blue`) |

### Typography & Text Hierarchy

| Color Name | Hex / Value | Role & Target Elements |
| :--- | :--- | :--- |
| **Warm Parchment Ink** | `#f5f1e8` / `#0f172a` | Primary text (`--ink`), headings, high-visibility copy |
| **Muted Sand Ink** | `#c9c4b6` / `#334155` | Secondary text (`--ink-2`), ledes, card descriptions |
| **Dim Pewter Ink** | `#8a8a7e` / `#64748b` | Tertiary text (`--ink-3`), timestamps, labels, FAQ indicators |
| **Dark Bronze CTA Ink** | `#1a1407` / `#3d2e0a` | High-contrast text rendered over gold CTA buttons (`--cta-ink`) |

### Functional States
- **Live Status Pulse**: Emerald indicator (`#379F76`) with expanding radial keyframe shadow `pulse 2s ease-out infinite`.
- **Transformation Comparison**: "Before" state tagged in ruby tint (`rgba(168,68,63,0.12)`), "After" state tagged in emerald glow (`rgba(55,159,118,0.15)`).

---

## 3. Typography Rules

### Font Families
- **Display Serif**: `"Bricolage Grotesque", system-ui, sans-serif` (`--serif`) — Used for headlines, module titles, price tags, and logo mark.
- **Editorial Italic Accent**: `"Newsreader", Georgia, serif` (`--accent-serif`) — Used for italicized key phrases within headlines (`<em>`).
- **Primary Body Sans**: `"Hanken Grotesk", system-ui, sans-serif` (`--sans`) — Used for standard body text, button labels, navigation, and quote copy.
- **Technical Monospace**: `"JetBrains Mono", ui-monospace, monospace` (`--mono`) — Used for eyebrows, timestamps, code artifacts, timeline metrics, and module counter tags.

### Hierarchy & Weights

```css
/* Hero Headline */
font-family: var(--serif);
font-weight: 600;
font-size: clamp(2rem, 5vw, 3.6rem);
line-height: 1.05;
letter-spacing: -0.03em;

/* Hero Headline Emphasis Accent */
font-family: var(--accent-serif);
font-style: italic;
font-weight: 400;
color: var(--emerald-2);
font-size: 1.05em;

/* Section Headline (H2 / H3) */
font-family: var(--serif);
font-weight: 600;
font-size: clamp(1.5rem, 3vw, 2.1rem);
line-height: 1.12;
letter-spacing: -0.025em;

/* Eyebrow Label */
font-family: var(--mono);
font-size: 0.75rem;
color: var(--emerald);
letter-spacing: 0.18em;
text-transform: uppercase;

/* Body Lede */
font-family: var(--sans);
font-size: clamp(0.9rem, 1.5vw, 1.05rem);
color: var(--ink-2);
line-height: 1.55;

/* Standard Body Copy */
font-family: var(--sans);
font-size: 17px;
line-height: 1.6;
color: var(--ink);

/* Monospace Micro-copy & Status */
font-family: var(--mono);
font-size: 0.68rem - 0.78rem;
letter-spacing: 0.02em - 0.08em;
```

---

## 4. Component Stylings

### Buttons & CTAs

#### 1. Primary Gold CTA Pill (`.cta`)
- **Shape**: Full pill radius (`border-radius: 999px`).
- **Typography**: `Hanken Grotesk`, font-weight `600`, font-size `1.05rem`.
- **Colors**: Background `var(--gold)` (`#d4af37`), Text `var(--cta-ink)` (`#1a1407`).
- **Shadow**: `box-shadow: 0 1px 0 rgba(255,255,255,.18) inset, 0 10px 24px -16px rgba(0,0,0,.7)`.
- **Padding**: `15px 30px`.
- **Hover State**: Background shifts to `var(--gold-2)` (`#e8c75a`), trailing arrow translates right `translateX(4px)` over `0.18s ease`.

#### 2. Secondary Top-Bar CTA (`.top-cta`)
- **Shape**: Full pill radius (`border-radius: 999px`).
- **Typography**: `Hanken Grotesk`, font-weight `600`, font-size `14px`.
- **Colors**: Border `1px solid var(--gold)`, Text `var(--gold)`, background transparent.
- **Hover State**: Background fills with `var(--gold)`, Text shifts to `var(--cta-ink)`.

#### 3. Theme Toggle (`.theme-toggle`)
- **Shape**: Circular (`width: 38px; height: 38px; border-radius: 999px`).
- **Border**: `1px solid var(--rule-2)`.
- **Hover State**: Border shifts to `var(--ink-3)`, background to `var(--bg-2)`.

---

### Cards & Glassmorphic Containers

#### 1. Glassmorphic Chat Hero Card (`.chat-card`)
- **Background**: `var(--bg-2)` (`#0f1614`) with `backdrop-filter: blur(12px) saturate(140%)`.
- **Border**: `1px solid var(--rule-2)` (`#2a3832`).
- **Radius**: `16px`.
- **Shadow**: Inset top highlight `0 1px 0 rgba(255,255,255,.06)` plus drop shadow `0 24px 50px -24px rgba(0,0,0,.6)`.
- **Glow Backdrop**: Radial background glow (`radial-gradient(50% 60% at 50% 40%, rgba(55,159,118,.20), transparent 70%)`) placed behind card.

#### 2. Syllabus Module Row Card (`.sy-row`)
- **Background**: `var(--bg-2)`, Border `1px solid var(--rule)`, Radius `14px`, Padding `24px 26px`.
- **Counter Tag**: Monospace number (`01`, `02`, `03`) positioned at top right in `var(--emerald)`.
- **Hover Interaction**: `transform: translateY(-2px)`, border color transitions to `rgba(55,159,118,.30)`, shadow expands `0 16px 32px -20px rgba(0,0,0,.4)`.

---

### Navigation & Top Bar

- **Sticky Position**: `position: sticky; top: 0; z-index: 20`.
- **Height**: `60px`.
- **Background**: `var(--topbar-bg)` with `backdrop-filter: saturate(140%) blur(10px)` and bottom border `1px solid var(--rule)`.
- **Logo Mark**: Logo image (32x32px) paired with brand title in `Hanken Grotesk` 700 bold in `var(--emerald)`.
- **Nav Links**: Font size `0.9rem`, weight 500. Hover effect reveals an emerald underline (`transform: scaleX(0)` -> `scaleX(1)`) smoothly expanding from left.

---

### Artifacts & Interactive Elements

#### 1. Live Chat Preview Artifact
- **Top Bar**: Live status pill with animated green dot (`.pulse`).
- **Bubbles**:
  - Incoming (`.bubble.in`): Background `var(--bg-3)`, border `1px solid var(--rule)`.
  - Outgoing (`.bubble.out`): Emerald gradient background (`linear-gradient(180deg, rgba(55,159,118,.18), rgba(55,159,118,.10))`), border `rgba(55,159,118,.30)`.

#### 2. Timeline Grid Row (`.tl-row`)
- **Layout**: 3-column grid `54px 1fr auto` with dashed bottom border (`1px dashed var(--rule)`).
- **Status Tags**: Monospace uppercase text (`AUTOMATED` in gold-2, `SCHEDULED` / `QUEUED` in ink-3).

#### 3. Transformation Comparison Grid (`.diff`)
- **2-Column Layout**: Left ("Sebelum Wajom" / Before) vs Right ("Selepas Wajom" / After).
- **Before Card**: Background `var(--bg-2)`, opacity `0.85`, ruby tag (`.diff-tag` in `rgba(168,68,63,.12)`), minus mark `−` in crimson.
- **After Card**: Background emerald gradient (`linear-gradient(180deg, rgba(55,159,118,.08), rgba(55,159,118,.02))`), border `rgba(55,159,118,.30)`, emerald tag (`.diff-tag` in `rgba(55,159,118,.15)`), plus mark `+` in emerald.

#### 4. Trust / FAQ Accordion (`.trust-q`)
- **Container**: Radius `14px`, border `1px solid var(--rule)`, background `var(--bg-2)`.
- **Summary**: Monospace counter (`01`, `02`), trailing plus icon `+` rotating `45deg` to `×` on open (`[open]`).
- **Open State**: Border highlights to `rgba(55,159,118,.30)`, headline turns to `var(--emerald-2)`.

---

## 5. Layout Principles

### Grid & Structure
- **Max Content Width**: `1180px` (`--max`).
- **Responsive Gutter**: Dynamic padding `clamp(20px, 5vw, 56px)` (`--gut`).
- **Container Centering**: Wrapper margins set to `0 auto`.
- **Stage Alignment**:
  - Hero stage max width: `820px`
  - Hero chat preview max width: `520px`
  - Syllabus & FAQ container max width: `780px`

### Whitespace Strategy
- **Hero Padding**: Top `clamp(24px, 3vw, 40px)`, Bottom `clamp(32px, 5vw, 56px)`.
- **Section Spacing**: Final offer section padding `clamp(72px, 12vw, 140px)` top and bottom.
- **Grid Gaps**: Modular items use `gap: clamp(24px, 4vw, 48px)`.

### Responsive Breakpoints & Adaptations
- **Desktop (>880px)**: Full multi-column grid layouts, sticky navigation bar with link list, hero radial lighting active.
- **Tablet / Mobile (<=880px)**:
  - Nav links hide automatically (`.nav-links { display: none }`).
  - Transformation diff grid collapses to 1 column.
  - Duplication step flow converts from horizontal arrows to vertical stack.
  - Hero headline scales down to `clamp(1.7rem, 8vw, 2.8rem)`.
- **Small Mobile (<=480px)**:
  - Base body font size adjusts to `16px`.
  - Top CTA button hides text label to preserve header space.

---

## 6. Design System Notes for Stitch Generation

### Descriptors & Tone to Use
When writing prompts for Stitch generation in this visual identity:
- **Atmosphere**: *"Tech-editorial luxury dark mode, obsidian background `#0a0f0d`, translucent glassmorphic cards with subtle emerald backdrop glow (`#379F76`)."*
- **Typography**: *"High-contrast Bricolage Grotesque display serif headline with Newsreader italic emphasis, Hanken Grotesk body text, JetBrains Mono micro-copy badges."*
- **CTAs & Pricing**: *"Gold pill CTA button (`#d4af37`) with dark bronze text (`#1a1407`), rounded pill shape, gold pricing labels."*
- **Cards & Borders**: *"Dark forest surfaces (`#0f1614`), fine 1px dark green borders (`#2a3832`), emerald highlight indicators (`#4ec294`)."*

### Color Token Reference Table for Prompts

```json
{
  "bg_obsidian": "#0a0f0d",
  "surface_dark": "#0f1614",
  "container_dark": "#141c19",
  "border_forest": "#1f2a25",
  "border_accent": "#2a3832",
  "text_parchment": "#f5f1e8",
  "text_muted": "#c9c4b6",
  "emerald_primary": "#379F76",
  "emerald_glowing": "#4ec294",
  "gold_cta": "#d4af37",
  "gold_bright": "#e8c75a",
  "ruby_tag": "#c25450"
}
```

### Example Component Prompts for Stitch

#### Hero Section Prompt
> "Generate a tech-editorial hero section on an obsidian dark background `#0a0f0d`. Centered stage with a JetBrains Mono eyebrow in emerald `#379F76`, a Bricolage Grotesque headline with italicized Newsreader text in glowing emerald `#4ec294`, and a glassmorphic chat interface card with emerald glow backdrop, live status pulse dot, and outgoing chat bubbles with subtle green gradient tint."

#### Module Syllabus Card Prompt
> "Generate a list of course module cards using dark forest surface background `#0f1614`, subtle 1px border `#1f2a25`, and 14px rounded corners. Include a monospace counter badge ('01', '02') at the top right in emerald `#379F76`, a serif headline in parchment white `#f5f1e8`, and a monospace pill tag at the bottom."

#### Transformation Grid Prompt
> "Generate a 2-column before and after transformation section. The left card 'Sebelum Wajom' has a dark surface with ruby red tag `#c25450` and minus markers. The right card 'Selepas Wajom' has a subtle green gradient background `rgba(55,159,118,0.08)`, border `rgba(55,159,118,0.30)`, glowing emerald tag `#4ec294`, and plus markers."
