Native - events
---
Spark supports all events but instead of executing JavaScrilt it executes HTML.

```html
<button on-click="<alert>hello!</alert>">press me</button>
<!-- prepend "on-" to any event name to make a spark event -->
```

#### Extensions
Add them to the end of the event name for extended functionality.

```html
<button on-click-clear="hello!">press me</button>
<!-- clears the element before executing the event -->
```

extension | description
-- | --
 `clear` | clears the elements inner html and value before executing the event.
 `prevent` | prevents default event behaviour.
 `once` | executes the event once then removes it from the target.

#### Access target data
Using the [format syntax](../core/formatter.md) you can access attributes, styles and event data of the target.

```html
<button on-click-clear="hello {{this.name}}" name="John">press me</button>
```

accessor | description
-- | --
`this.attribute-name` | inserts attributes eg. `{{this.id}}`
`this.style-stylename` | inserts the value of a style eg. `{{this.style-color}}`
`this.event-eventkey` | inserts values from the event object eg. `{{this.event-keycode}}`

**note** if the target has an id then the id is used instead of `this`.

---
### Capsulated events
To reuse an event, create it using the `define` tag.

```html
<define event="my event">
  <alert>hello!</alert>
</define>

<button on-click="my event">press me</button>
<p on-click="my event">im also press able</p>
```

---