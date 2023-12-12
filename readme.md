Spark v0.2
---

A superset of HTML designed to bring logic and ✨flaire✨ to the UI.

```html
<!-- a simple hello world -->
<html>
  <script src="https://cdn.jsdelivr.net/gh/sl3pycat/spark@latest/spark.min.js" import="alert"></script>
  <button on-click="<alert>hello world!</alert>">press me</button>
</html>
```

```html
<!-- or a complex todo list -->
<html>
  <script src="https://cdn.jsdelivr.net/gh/sl3pycat/spark@latest/spark.min.js"></script>
  <input on-enter="add todo">
  <define function="add todo">
    <list todo unshift="{{this.value}}"/>
    <set value=""/>
  </define>
  <ul bind-list="todo">
    <li>{{todo.value}}</li>
  </ul>
</html>
```

Anything is possible with this low-code no-JS framework! Check out demos [here](./demos/context.md).

---
### Docs
- [Setup](./setup.md)
- [Overview](./overview.md)
- [Optional modules](./imports/modules.md)

---
Made with ❤️ and ☕ by [sl3pycat]().