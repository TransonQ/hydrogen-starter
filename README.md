```bash
.
├── README.md
├── hydrogen.config.js
├── index.html
├── jsconfig.json
├── package.json
├── public
├── src
│   ├── App.server.jsx
│   ├── assets
│   │   └── favicon.svg
│   ├── index.css
│   └── routes
│   └── index.server.jsx
├── vite.config.js
└── yarn.lock
```

## 安装 tailwind css

[tailwind css 速查 - 中文](https://www.tailwindcss.cn/)
[tailwind css 官网 - 英文](https://tailwindcss.com/)

```bash
yarn add tailwindcss @tailwindcss/typography postcss autoprefixer
yarn tailwindcss init -p
```

```js
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
```

```css
/*  /src/index.css  */

@tailwind base;
@tailwind components;
@tailwind utilities;
```
