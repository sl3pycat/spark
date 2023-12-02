Imports - prompt
---
The `prompt` element creates a prompt box that executes code when the user successfully passes a value.

```html
<prompt query="whats your name?">
  hello {{prompt.result}}!
</prompt>
```

**note** if you add an id to your prompt then the format would be `{{id-name.result}}` instead of `{{prompt.result}}`.

---