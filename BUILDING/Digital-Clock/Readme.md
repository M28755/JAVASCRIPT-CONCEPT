<!-- markdownlint-disable MD041 -->
# Digital Clock & Date Display

A lightweight JavaScript implementation that calculates and updates the current local time and date in real-time.

---

## How It Works

The clock relies on JavaScript's native `Date` object to fetch system time and updates the DOM using DOM manipulation methods.

1. **Initialization:** The script selects HTML elements using `document.getElementById()`.
2. **Time Extraction:** `new Date()` grabs the system's precise time at the moment of execution.
3. **12-Hour Conversion:** The 24-hour value from `.getHours()` is converted into 12-hour format using the modulo operator (`Hours % 12`) alongside an `AM`/`PM` check.
4. **Zero Padding:** Single-digit values (e.g., `9`) are formatted into two-digit strings (e.g., `'09'`) using `.padStart()`.
5. **DOM Render:** Text nodes are updated using `.textContent`.
6. **Execution Interval:** `setInterval(updateClock, 1000)` triggers `updateClock()` every second to keep the display live.

---

## Working with JavaScript `Date`

Working with dates in JavaScript requires understanding specific `Date` prototype methods:

### 1. `getDay()` vs. `getDate()`

* **`date.getDay()`** returns the **day of the week** as a zero-based index (`0` for Sunday, `1` for Monday, etc.). This is useful for indexing an array of weekday names.
* **`date.getDate()`** returns the **day of the month** (a number from `1` to `31`).

```javascript
const weekdays = ['Sunday', 'Monday', 'Tuesday', ...];
const dayName = weekdays[date.getDay()]; // Day of the week name
const dayOfMonth = date.getDate();       // Numeric day of the month

```

### 2. `getMonth()`

* **`date.getMonth()`** returns a zero-indexed month number (`0` for January through `11` for December).

```javascript
const months = ['Jan', 'Feb', 'Mar', ...];
const monthName = months[date.getMonth()];

```

### 3. `getFullYear()` vs. `getYear()`

* **`date.getFullYear()`** returns the full 4-digit year (e.g., `2026`).
* **`date.getYear()`** is **deprecated** because it returns the year minus 1900 (e.g., returning `126` for 2026). Always use `getFullYear()`.

---

## Key Learnings & Bug Fixes

### 1. Guard Against Premature Returns

In JavaScript, using `return` inside a function immediately terminates its execution.

* **The Issue:**

```javascript
if (hours12 === 0) {
    return hours12 = 12; //  Stops execution before updating the DOM!
}

```

* **The Fix:**

Simply assign the value without returning so the function can continue to update the text content:

```javascript
if (hours12 === 0) {
    hours12 = 12; //  Reassigns value and continues running
}

```

### 2. Use the Converted 12-Hour Variable

When rendering hours to the DOM, make sure to pass `hours12` rather than the original 24-hour `Hours` variable:

* **The Fix:**

```javascript
hours.textContent = padZero(hours12); // Displays 12-hour format

```

### 3. String Padding with `padStart()`

To maintain consistent layout alignment, numbers under 10 should display with a leading zero. `String(value).padStart(2, '0')` checks if the string length is less than `2` and prepends `'0'` if necessary.