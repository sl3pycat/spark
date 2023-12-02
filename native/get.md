Native - get
---
Returns the targets attributes, styles and values.

```html
<p style="color:blue">the color of this text is <get -color>unknown</get>, and the id is <get id>unknown</get>.</p>
<!-- prints: the color of this text is blue, and the id is unknown. -->
```

- Prepend a hyphen to get a style value.
- `value` attribute returns the value of the target.
- `text` returns the inner text.
- `html` returns the inner html.
- set the default value by passing text/html to the get target.

---