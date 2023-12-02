Spark - styling
---
Spark supports inline styling, as an attribute, prepend a hyphen to a style name then set its value, or prepend a dot to a class name to add classes to an element.

```html
<p .italic -color=cyan -font-size=20px >hello!</p>
<!-- this paragraph tag has a class name "italic" and colored cyan with the font size being 20px -->
```

**note** classes can be bound together eg. `.btn.alert` .

---
### CSS variables
Variables are bound to the element they are declared on. As an attribute, prepend two hyphens to the variable name then set its value.

```html
<p --fancy="pink">some <span -color="var(--fancy)">fancy</span> text.</p>
```

---