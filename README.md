## esc-blur-polyfill

This an extension for HTMX

To use it apply it on element that you wish it to take effect

```html
<input
    class="edit"
    name="title"
    hx-trigger="keyup[keyCode==13], blur"
    hx-get={ fmt.Sprintf(`/update?id=%s`, strconv.FormatUint(action, 10)) }
    hx-target="closest <li/>"
    hx-swap="outerHTML"
    hx-ext="esc-blur-polyfill"
    autofocus
/>
```

What happen is specific event where ESC key is press will send query parameter `&esc=true` and `false` for non-ESC keys. The intention here is to have behavior blur works similar like in modern front-end frameworks where ESC key is excluded from `blur` event.
