Spark - setup
---
Setting up is easy, just add a script tag referring to the source of `spark.js`.

```html
<html>
  <script src="path/to/spark.js"></script>
  <p>hello world</p>
</html>
```

**note** you can add the `head` and `body` but its not required.

---
### Optional todos during set up

#### 1. Add a splash screen
By default theres already a splash screen but you can add a custom screen using the `splash-screen` tag.

```html
<splash-screen>loading...</splash-screen>
```

**note** predefined styles and custom attributes dont apply to the `splash-screen` tag because its executed before all code is imported.

#### 2. Set the app title and icon
The `title` attribute sets the apps title and the `icon` attribute sets the apps favicon.

#### 3. Set the app theme
By default, the app theme is set to `system` which means the app's theme is determined by the device. Available themes are `light`, `dark`, `oled` and `system`. Set the app theme using the `theme` attribute on the script tag.

#### 4. Set the app hue
The `hue` attribute on the script tag determines the navbar color and colors of some components (like buttons and bars). Set the hue using the `hue` attribute on the script tag.

To set the theme and hue dynamically, use the [set](./native/set.md) tag.

---
### Building a PWA

A progressive web app requires a web manifest and service worker to work. Use [workbox]() to create a service worker then set its path to the `worker` attribute on the script tag. You can also add a manifest file using the `manifest` attribute.

```html
<script src="spark.js" worker="path/to/worker.js" manifest="path/to/manifest.js"></script>
```



---