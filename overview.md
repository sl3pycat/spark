Spark - overview
---
### Styling elements
As an attribute, prepend a hyphen to a style name then set its value, or prepend a dot to a class name to add classes to an element.

```html
<p .italic -color=cyan -font-size=20px >hello!</p>
<!-- this paragraph tag has a class name "italic" and colored cyan with the font size being 20px -->
```

More on styling [here](./native/styling.md).

---
### Events
Spark events are HTML based. Prepend `on-` to your event name then add HTML code to make an event.

```html
<p on-click="<alert>hello!</alert>">press me</p>
```

More on events [here](./native/events.md).