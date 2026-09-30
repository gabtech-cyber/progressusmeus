---
title: Web Accessibility (a11y)
description: Building inclusive interfaces for screen readers, keyboard navigation, and WCAG standards.
---

The term **a11y** (an abbreviation for *accessibility*, as there are 11 letters between 'a' and 'y') represents the practice of making web applications usable by everyone, including individuals with visual, motor, auditory, or cognitive disabilities.

Accessibility is not an optional plugin or an afterthought—it is the natural byproduct of writing correct, semantic HTML.

<Callout type="info" title="The Golden Rule of Accessibility">
  If a website is built with correct semantic HTML elements, it is already roughly 70% accessible out of the box for assistive technologies, without requiring custom JavaScript code.
</Callout>

---

## 1. What Are Assistive Technologies?

Users with severe visual impairments do not browse the web using a mouse; instead, they rely on **screen readers** (such as VoiceOver, NVDA, or JAWS).
- A screen reader parses the code tree like a text document and reads aloud the structure, headings, buttons, and links.
- If you use a generic `<div>` instead of a `<button>` or `<nav>`, the screen reader has no idea what that element is and will either skip it or announce it as confusing, meaningless text.

---

## 2. Pillar 1: Semantic HTML (The Easiest Form of a11y)

Using the correct native tags automatically solves most accessibility problems:

```html
<!-- ❌ WRONG: A generic styled div cannot be accessed via keyboard and lacks semantics -->
<div class="button" onclick="save()">Submit</div>

<!-- ✅ CORRECT: The native <button> element has built-in support for Enter, Space, and screen readers -->
<button type="button" onclick="save()">Submit</button>

```

---

## 3. Pillar 2: Keyboard Navigation

Many users with motor disabilities or advanced developers navigate the web exclusively using the **Tab**, **Shift + Tab**, **Enter**, and **Space** keys.

### The Focus Ring (`outline`)

When you press the Tab key, browsers display a glowing border (focus ring) around the active element.

```css
/* ❌ DANGEROUS: The user loses track of their keyboard position */
button:focus {
  outline: none;
}

/* ✅ CORRECT: Replace the default style with your own clear, visible design */
button:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

```

---

## 4. Pillar 3: ARIA Attributes (Accessibility Rich Internet Applications)

When native HTML is not enough (for example, when building complex JavaScript components like dropdown menus, tabs, or modals), you use **ARIA** attributes to supply extra context.

### The Most Important ARIA Attributes:

| Attribute | Purpose | Example |
| --- | --- | --- |
| `aria-label` | Provides an invisible text label for elements without visible text (e.g., icon-only buttons). | `<button aria-label="Close dialog">✕</button>` |
| `aria-hidden="true"` | Hides purely decorative elements completely from screen readers. | `<svg aria-hidden="true">...</svg>` |
| `aria-expanded` | Indicates whether a menu or accordion disclosure is open (`true`) or closed (`false`). | `<button aria-expanded="false">Menu</button>` |
| `aria-controls` | Links a toggle button directly to the `id` of the element it controls. | `<button aria-controls="nav-bar">Toggle</button>` |
| `role` | Explicitly assigns a semantic widget role to a generic element. | `<div role="alert">Critical error!</div>` |

---

## 5. Pillar 4: Color Contrast Ratios

International standards **WCAG (Web Content Accessibility Guidelines)** require text to have sufficient contrast against its background to remain legible:

* **Normal text:** A contrast ratio of at least **4.5:1** between text and background.
* **Large text (bold or headings):** A contrast ratio of at least **3:1**.

*Tip:* Use automated developer tools like Chrome DevTools (Lighthouse / Accessibility panel) or WAVE to audit your color contrast automatically.

---

## 6. Key Distinctions & Advanced Accessibility Rules

Reviewing common edge cases and attribute behaviors reveals several critical rules for building fully inclusive web applications:

### Relationship & Description Attributes
* **`aria-describedby` vs. `aria-labelledby`**: 
  - `aria-describedby="id"` points to secondary, explanatory text (such as a password requirement hint or error warning). Screen readers read this *after* announcing the primary label.
  - `aria-labelledby="id"` replaces the element's primary accessible name by pointing directly to another visible heading or label on the page.
* **`aria-label="..."`**: Supplies an explicit accessible name directly inside the string attribute (ideal for icon-only buttons like `<button aria-label="Close dialog">✕</button>`).

### Hiding Content Correctly
* **`aria-hidden="true"`**: Removes an element **only from assistive technologies** (screen readers). It does **not** hide elements visually from sighted users. Its primary use case is silencing purely decorative icons, background SVGs, or duplicate glyphs so users aren't overwhelmed with redundant audio announcements.

### Structure & Standards Frameworks
* **WCAG (Web Content Accessibility Guidelines)**: The overarching, general standard built upon the **POUR** pillars (**P**erceivable, **O**perable, **U**nderstandable, **R**obust).
* **WAI-ARIA**: Specific rules and property extensions designed to make complex, dynamic, JavaScript-driven UI components accessible.
* **`role` Attribute**: Explicitly declares the functional purpose of a generic element (e.g., `role="alert"` or `role="navigation"`) so screen readers know how to interact with it.
* **`tabindex`**: Turns non-native elements (like `<div>` or `<span>`) into keyboard-focusable nodes and establishes their sequence within the document's navigation order (`tabindex="0"` adds them to the natural tab flow).
---
## Summary: Accessibility Checklist for HTML

1. [ ] The page has a single `<main>` element and a logical heading hierarchy (`<h1>` $\rightarrow$ `<h2>`).
2. [ ] All informative images have descriptive `alt` attributes (and decorative ones have `alt=""`).
3. [ ] Every `<input>` has a correctly associated `<label for="...">`.
4. [ ] All interactive elements can be reached using the `Tab` key and activated with `Enter`/`Space`.
5. [ ] No element uses `outline: none` without a visible alternative for the `:focus` state.

```
