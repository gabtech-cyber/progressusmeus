---
title: CSS Master Reference

description: A comprehensive, searchable reference guide listing the most essential CSS Selectors, Properties, and Values used in modern web development.
---
import { Callout } from 'fumadocs-ui/components/callout';
---
## Part 1: CSS Selectors Master Reference

Selectors determine *which* HTML elements your CSS rules target.

| Selector Type | Syntax | Example | Description |
| --- | --- | --- | --- |
| **Universal** | `*` | `* { box-sizing: border-box; }` | Targets every single element on the page. |
| **Type (Element)** | `element` | `p { color: #333; }` | Targets all elements of a specific HTML tag. |
| **Class** | `.class` | `.btn-primary { background: blue; }` | Targets any element with a specific class attribute (reusable). |
| **ID** | `#id` | `#main-header { font-size: 2rem; }` | Targets a unique element with a specific ID (use sparingly). |
| **Grouping** | `A, B` | `h1, h2, h3 { font-family: sans; }` | Applies the same style to multiple selectors simultaneously. |
| **Descendant** | `A B` | `article p { line-height: 1.6; }` | Targets any element `B` nested anywhere inside `A`. |
| **Child** | `A > B` | `ul > li { list-style: none; }` | Targets direct child `B` immediately inside `A`. |
| **Adjacent Sibling** | `A + B` | `h2 + p { margin-top: 0; }` | Targets element `B` that immediately follows element `A`. |
| **Attribute** | `[attr]` / `[attr="val"]` | `input[type="text"] { border: 1px solid gray; }` | Targets elements based on the presence or value of an attribute. |

### Pseudo-Classes & Pseudo-Elements

* **`:hover`** — Targets an element when the user's mouse cursor is over it (`a:hover`).
* **`:focus` / `:focus-visible**` — Targets an element when it receives keyboard or mouse focus (`button:focus-visible`).
* **`:nth-child(n)`** — Targets specific child patterns (e.g., `tr:nth-child(even)`).
* **`::before` / `::after**` — Inserts generated content before or after an element's actual content.
* **`::placeholder`** — Targets input placeholder text styles.

---

## Part 2: Essential CSS Properties & Common Values

Properties dictate *what* style is altered, and values dictate *how*.

### 1. Layout & Box Model

| Property | Common Values | Description |
| --- | --- | --- |
| `display` | `block`, `inline`, `flex`, `grid`, `none` | Defines how the element behaves in the layout flow. |
| `width` / `height` | `100%`, `300px`, `50vw`, `auto` | Sets the dimensions of the box. |
| `max-width` / `max-height` | `1200px`, `100%` | Prevents an element from growing past a specified limit. |
| `padding` | `1rem`, `10px 20px`, `0` | Inner spacing between content and border. |
| `margin` | `0 auto`, `1.5rem`, `10px 0` | Outer spacing pushing surrounding elements away. |
| `box-sizing` | `border-box`, `content-box` | Ensures padding and borders are included within the set width. |

### 2. Flexbox & Grid Alignment

| Property | Common Values | Description |
| --- | --- | --- |
| `flex-direction` | `row`, `column`, `row-reverse` | Sets the main axis direction for flex items. |
| `justify-content` | `flex-start`, `center`, `space-between`, `space-around` | Aligns items along the main axis. |
| `align-items` | `stretch`, `center`, `flex-start`, `flex-end` | Aligns items along the cross axis. |
| `gap` | `1rem`, `16px`, `2rem` | Sets clean spacing between grid or flex children. |
| `grid-template-columns` | `repeat(3, 1fr)`, `200px 1fr` | Defines columns in a CSS Grid container. |

### 3. Typography & Text

| Property | Common Values | Description |
| --- | --- | --- |
| `font-family` | `'Inter', sans-serif`, `monospace` | Sets the typeface font stack. |
| `font-size` | `1rem`, `16px`, `1.25rem`, `2em` | Sets the text size. |
| `font-weight` | `400` (normal), `600` (semi-bold), `700` (bold) | Sets the thickness of the characters. |
| `line-height` | `1.5`, `1.2`, `24px` | Sets vertical line spacing (improves legibility). |
| `text-align` | `left`, `center`, `right`, `justify` | Aligns text horizontally. |
| `text-decoration` | `none`, `underline`, `line-through` | Adds or removes lines from text (e.g., removing link underlines). |
| `color` | `#2563eb`, `rgb(0,0,0)`, `transparent` | Sets the text color. |

### 4. Visuals, Backgrounds & Borders

| Property | Common Values | Description |
| --- | --- | --- |
| `background-color` | `#ffffff`, `rgba(0,0,0,0.5)`, `transparent` | Fills the background of an element. |
| `border` | `1px solid #e5e7eb`, `none` | Shorthand for border width, style, and color. |
| `border-radius` | `0.375rem`, `8px`, `9999px` (pill) | Rounds the corners of an element. |
| `box-shadow` | `0 4px 6px -1px rgba(0,0,0,0.1)` | Adds a drop-shadow effect behind the box. |
| `opacity` | `0` to `1` (e.g., `0.5`) | Sets the transparency level of an entire element. |
| `cursor` | `pointer`, `default`, `not-allowed`, `grab` | Changes mouse cursor style on hover. |