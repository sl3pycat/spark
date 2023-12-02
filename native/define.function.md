Native - functions
---
Functions are reusable code the can also double as custom UI components.

```html
<define function=greet >
  hello {{greet.text}}!
</define>

<greet>bob</greet>
<!-- prints "hello bob!" -->
```

The predefined value `greet.text` inserts the inner text while `greet.html` inserts the inner html. You can also access attributes with the format `{{function-name.attribute-name}}`. See example below:

```html
<define function="p">
  <set -color="{{p.text-color||cyan}}" -background="{{p.text-background||black}}"/>
  {{p.text}}
</define>

<p>im default colored</p>
<p text-color="blue" text-background="orange">im custom colored</p>
```

**note** the value after `||` acts as a default value when nothing is passed.

---