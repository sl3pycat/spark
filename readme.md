SparkML v0.1
---

A superset of HTML designed to bring logic and ✨flaire✨ to the UI.

```html
<!-- a simple hello world -->
<html>
  <script src="spark.js"></script>
  <button on-click="ask name">press me</button>
  <define event="ask name">
    <prompt query="Whats your name?">
      <alert>hello {{prompt.result}}!</alert>
      <set target="button" outer-text="Its nice to meet you {{prompt.result}}, I hope you like spark!"/>
    </prompt>
  </define>
</html>
```

---
### Docs
- [Setup](./setup.md)
- [Overview](./overview.md)
- [Optional modules](./imports/modules.md)

---
Made with ❤️ and ☕ by [sl3pycat]().