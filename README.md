# 📞 Floating WhatsApp Button Script

Easily embed a floating WhatsApp button on any website with this lightweight, configurable JavaScript snippet. Just add one line of HTML!

---

## 🚀 Features
- **Easy Embedding:** One-line integration for any website.
- **Fully Configurable:** Customize phone number, position, and size directly from HTML.
- **No Dependencies:** Pure JavaScript, no jQuery or frameworks required.
- **Clean Design:** No background color or shadow for a minimalist look.

---

## 🔧 How to Use
1. **Host the Script:**  
   - Upload `whatsapp-button.js` to your server, or
   - Use a public CDN like GitHub Pages or jsDelivr.

2. **Embed on Your Website:**
```html
<script 
  src="https://yourdomain.com/path/to/whatsapp-button.js" 
  data-phone="201234567890" 
  data-position="bottom-right" 
  data-size="50" 
  defer>
</script>
```

---

## ⚙️ Configuration Options

| Attribute      | Description                         | Default Value      | Possible Values                |
| -------------- | ----------------------------------- | ------------------ | ------------------------------- |
| `data-phone`   | WhatsApp number with country code     | `1234567890`       | E.g., `201234567890`             |
| `data-position`| Button position on the screen        | `bottom-right`     | `bottom-right`, `bottom-left`, `top-right`, `top-left` |
| `data-size`    | Icon size in pixels                  | `50`               | Any positive number, e.g., `40`, `60` |

---

## 🎨 Examples

1. **Bottom Right Position (Default):**
```html
<script 
  src="https://cdn.jsdelivr.net/gh/andronasef/whatsapp-button@refs/heads/master/whatsapp-button.js" 
  data-phone="201234567890">
</script>
```

2. **Bottom Left Position with Larger Icon:**
```html
<script 
  src="https://cdn.jsdelivr.net/gh/andronasef/whatsapp-button@refs/heads/master/whatsapp-button.js" 
  data-phone="201234567890" 
  data-position="bottom-left" 
  data-size="60">
</script>
```

3. **Top Right Position with Smaller Icon:**
```html
<script 
  src="https://cdn.jsdelivr.net/gh/andronasef/whatsapp-button@refs/heads/master/whatsapp-button.js" 
  data-phone="201234567890" 
  data-position="top-right" 
  data-size="40">
</script>
```

---

## 📦 Hosting Options

- **Self-hosted:** Upload to your own server.
- **CDN Hosting:** Use a public CDN like GitHub Pages or jsDelivr.

---

## 📝 Notes
- Make sure to include your WhatsApp number in the format: `countrycode + number` (e.g., `201234567890` for Egypt).
- Use `defer` to ensure the script runs after the DOM is fully loaded.

---

## 🙌 Contributing
Feel free to contribute! Open an issue or submit a pull request for enhancements or bug fixes.

---

## 📞 Need Help?
If you encounter any issues or have questions, feel free to reach out or open a GitHub issue. Happy embedding! 🎉
