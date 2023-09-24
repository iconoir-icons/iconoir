# Iconoir - CSS

Import the CSS File:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css"
/>
```

Here is an example in HTML:

```html
<i class="iconoir-hand-brake"></i>
```

The class must always be "iconoir-" and then the name of the icon. You can find the names of the icons [here](https://iconoir.com).

The icons are `display: inline-block` and default to the current font size. You can control this
by adjusting the `::before` styles of the element (which is where the icons are added as a mask).

<SuggestLibrary />
