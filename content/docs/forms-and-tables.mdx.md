---

title: Tables, Forms & Interactive Tools
description: Relational data grids, accessible user input validation, and native browser controls.
---

import { Callout } from 'fumadocs-ui/components/callout';

## 1. Tabular Data Structures

HTML tables organize relational, multi-dimensional datasets across labeled rows and columns. They should never be used for page layouts—only for real tabular data.

### Table Architecture Blueprint

```html title="Accessible Relational Table"
<table>
  <caption>Developer Core Tech Stack & Experience</caption>
  <thead>
    <tr>
      <th scope="col">Domain</th>
      <th scope="col">Primary Tool</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Markup</th>
      <td>HTML5 Semantic Standards</td>
      <td>Completed</td>
    </tr>
    <tr>
      <th scope="row">Styling</th>
      <td>Modern CSS & Tailwind</td>
      <td>In Progress</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="2">Total Modules Tracked</th>
      <td>2</td>
    </tr>
  </tfoot>
</table>

```

### Table Tags Breakdown

* `<table>`: The wrapper for all tabular data.
* `<caption>`: Accessible summary or title of the table; read first by assistive technologies.
* `<thead>`: Groups header rows that define column concepts.
* `<tbody>`: Contains the primary data records.
* `<tfoot>`: Summary, averages, or total sums at the bottom.
* `<tr>`: Represents a single horizontal row.
* `<th>`: Header cell. **Always pair with `scope="col"` or `scope="row"**` so screen readers know which direction the header applies to.
* `<td>`: Data cell holding an actual data point.
* `colspan` / `rowspan`: Spanning attributes to merge cells horizontally across columns or vertically down rows.

---

## 2. Forms & Data Collection

Web forms allow users to input data and submit it to a server or client-side application.

```html title="Accessible Contact Form"
<form action="/api/submit" method="POST">
  <fieldset>
    <legend>Personal Information</legend>

    <!-- Accessible label explicitly bound via for -> id -->
    <label for="user-email">Email Address:</label>
    <input 
      type="email" 
      id="user-email" 
      name="email" 
      placeholder="you@domain.com"
      required 
      autocomplete="email"
    />

    <label for="password">Password:</label>
    <input 
      type="password" 
      id="password" 
      name="password" 
      minlength="8" 
      required 
    />
  </fieldset>

  <fieldset>
    <legend>Preferences</legend>

    <label for="track">Focus Track:</label>
    <select id="track" name="track">
      <optgroup label="Frontend">
        <option value="html">HTML Foundations</option>
        <option value="css">CSS Box Model & Grid</option>
      </optgroup>
      <optgroup label="Backend">
        <option value="db">Relational Databases</option>
      </optgroup>
    </select>

    <label for="notes">Notes:</label>
    <textarea id="notes" name="notes" rows="4" placeholder="Documenting observations..."></textarea>
  </fieldset>

  <button type="submit">Submit Form</button>
</form>

```

### Common `<input>` Types

| Type | Behavioral Feature |
| --- | --- |
| `text` | Generic single-line alphanumeric text. |
| `email` | Validates email syntax; brings up email keyboards on mobile devices. |
| `password` | Masks input characters for privacy. |
| `number` | Restricts input to numbers (supports `min`, `max`, `step`). |
| `checkbox` | Boolean multi-selection toggles. |
| `radio` | Mutually exclusive single-selection within a shared `name` group. |
| `file` | File picker for system uploads. |
| `range` | Slider control between numerical thresholds. |
| `date` | Native calendar date picker. |

---

## 3. Interactive Native Controls & Tools

HTML5 includes built-in interactive tools that handle states and UI patterns without needing external JavaScript libraries.

### `<details>` & `<summary>` (Native Accordion)

Creates native collapsible content blocks out of the box:

```html
<details>
  <summary>What is the difference between GET and POST?</summary>
  <p>GET sends parameters visible in the URL string, while POST sends data securely within the HTTP request body.</p>
</details>

```

### `<datalist>` (Native Autocomplete)

Pairs with a standard text `<input>` to provide recommended options while still permitting custom entries:

```html
<label for="browser-choice">Choose an environment:</label>
<input list="browsers" id="browser-choice" name="browser" />

<datalist id="browsers">
  <option value="Google Chrome" />
  <option value="Mozilla Firefox" />
  <option value="Brave" />
  <option value="Safari" />
</datalist>

```

### `<progress>` & `<meter>` (Native Visual Gauges)

* **`<progress>`**: Tracks the completion status of a deterministic task:
```html
<label for="file-progress">File Download:</label>
<progress id="file-progress" value="65" max="100">65%</progress>

```


* **`<meter>`**: Visualizes a scalar measurement within a known range (like disk space or temperature):
```html
<label for="cpu-usage">Memory Usage:</label>
<meter id="cpu-usage" min="0" max="100" low="30" high="80" optimum="20" value="78">
  78%
</meter>

```



### `<dialog>` (Native Modals)

A built-in dialog element for accessible popups and alert drawers:

```html
<dialog id="confirm-modal">
  <form method="dialog">
    <p>Are you sure you want to proceed?</p>
    <button value="cancel">Cancel</button>
    <button value="confirm" autofocus>Confirm</button>
  </form>
</dialog>

```

```

---

### Step 3: Update `meta.json`

Open `content/docs/01-web-foundations/meta.json` and add the new page to your sidebar list:

```json
{
  "title": "Web Foundations",
  "pages": [
    "semantic-html",
    "forms-and-tables"
  ]
}

---