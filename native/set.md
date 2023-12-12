Native - set
---
Sets an elements style, attributes, events and values.

```html
<set target=button id="butt" text="press me" on-click="<alert>hi</alert>"/>
<!-- sets the first matching targets id, inner text and click event -->
<script>
//heres the javascript equivalent of the tag above
  let button = document.querySelector("button")
  button.id="butt"
  button.innerText="press me"
  button.onclick=function(){
    alert("hi")
  }
</script>
```

#### Targeting
By default, the `set` tag's parent is used as the target, but if you pass a `target` attribute with a css query selector as its value to `set` then a new target is selected if it exists. Use the `targets` attribute to set multiple targets.

#### Styling
Prepend a hyphen to the style name then add it as an attribute with its value eg. `-color="blue"` `-z-index="4"`.

#### Setting values

- `value` sets the targets value
- `text` sets the inner text
- `html` sets the inner html
- `outer-text` sets the outer text
- `outer-html` sets the outer html
- `text-before` inserts text before the target
- `text-after` inserts text after the target
- `text-first` inserts text as the first child of the target
- `text-last` inserts text as the last child of the target
- `html-before` inserts html before the target
- `html-after` inserts html after the target
- `html-first` inserts html as the first child of the target
- `html-last` inserts html as the last child of the target


---
### Dynamically changing the hue and theme
To set the theme use the `theme` attribute. To set the hue use the `hue` attribute.

```html
<set theme=oled hue=cyan />
```

---