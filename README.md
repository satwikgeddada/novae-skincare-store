# 🧴 NOVAÉ: Clean Care. Real Glow.

NOVAÉ is a modern, minimal e-commerce storefront for a skincare and cosmetics brand. It has an editorial layout, clean typography and a complete shopping flow across four pages: home, shop, product details and cart. Built with plain HTML, CSS and JavaScript during the **ShadowFox Frontend Development Internship**.

**🔗 Live demo:** https://shadowfox-fd2.onrender.com

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Render](https://img.shields.io/badge/Hosted%20on-Render-46E3B7?logo=render&logoColor=black)

[NOVAÉ home page](docs/home.png)

## ✨ Features

- **Editorial hero section** with a clear brand message and two calls to action.
- **Announcement bar** highlighting free shipping on orders above ₹999.
- **Four-page flow:** Home → Shop → Product details → Cart.
- **Search** for products.
- **Wishlist** to save favourite products.
- **Shopping cart** with a live item counter in the header.
- Product filtering / sorting on the shop page.
- Quantity update, remove item and order total in the cart.
- Cart and wishlist saved in localStorage.
- Responsive layout for mobile, tablet and desktop.

## 🛠️ Tech stack

| Area | Tools |
|---|---|
| Structure | HTML5 (multi-page) |
| Styling | CSS3 |
| Logic | Vanilla JavaScript (no frameworks, no build step) |
| Hosting | Render (static site) |

## 🚀 Run locally

No installation is needed, because it's a static site.

```bash
git clone https://github.com/satwikgeddada/novae-skincare-store.git
cd novae-skincare-store
```

Open `index.html` in your browser, or serve it with a local server:

```bash
python -m http.server 5500
```

then visit http://localhost:5500.

## 📂 Project structure

```
novae-skincare-store/
├── index.html      # Home page
├── shop.html       # Product listing
├── product.html    # Product details
├── cart.html       # Shopping cart
├── css/            # Stylesheets
├── js/             # Scripts (cart, wishlist, search, product data)
├── images/         # Product and brand images
└── docs/           # Screenshots
```

## 🗺️ Roadmap

- [ ] Connect to a real backend and payment gateway
- [ ] User accounts and order history
- [ ] Product reviews and ratings
- [ ] Accessibility and Lighthouse performance improvements

## 📝 License

MIT. See the [LICENSE](LICENSE) file.

## 👤 Author

**Satwik Geddada**

- 🌐 Portfolio: [satwik-geddada-portfolio.vercel.app](https://satwik-geddada-portfolio.vercel.app/)
- 💻 GitHub: [@satwikgeddada](https://github.com/satwikgeddada)
- 💼 LinkedIn: [satwik-geddada](https://www.linkedin.com/in/satwik-geddada-72bb172b9)
