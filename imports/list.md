Imports - list
---
Binds a string list to the UI. All changes made to the list reflects to the UI.

```html
<!-- pushes items "bread", "butter" and milk to the list -->
<list buy add="bread,butter,milk"/>
<!-- binds the list to the ul tag -->
<ul bind-list=buy ><li>{{buy.index}}. {{buy.value}}</li></ul>
<!-- pushes item "syrup" to the list -->
<list buy push="syrup"/>
<!-- inserts item "eggs" at position 2 of the list -->
<list buy insert="eggs" at=2 />
```

**note** lists are automatically created when referenced to.

---
### List methods

#### Add
The `add` attribute adds multiple items divided by a coma to the list. eg. `bread,butter,milk`

#### Push
The `push` attribute pushes a single value to the end of the list.

#### Unshift
The `unshift` attribute pushes a single value to the start of the list.

#### Insert
The `insert` attribute insert an item in the list at the position gaven by the `at` attribute.

#### Empty
The `empty` attribute clears the list.

---