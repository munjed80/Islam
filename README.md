# salah.to 🕌

> **Free, open-source web app teaching Muslim kids how to pray in any language.**

[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Built with Astro](https://img.shields.io/badge/built%20with-Astro-orange.svg)](https://astro.build)

## ✨ Mission

Every Muslim child deserves to learn how to pray — regardless of language, device, or internet speed.
`salah.to` is a **static, privacy-first, zero-tracking** web app that walks children aged 5+ through the steps of Islamic prayer (Salah) with audio, illustrations, and multilingual support.

## 🌍 Languages

| Language | Code | Status |
|----------|------|--------|
| English | `en` | ✅ Complete |
| Nederlands | `nl` | ✅ Complete |
| العربية | `ar` | ✅ Complete |

> Want to add your language? See [CONTRIBUTING.md](CONTRIBUTING.md) — it takes ~30 minutes!

## 🚀 Features

- **3 clicks to start praying** – no registration, no account
- **7 prayer steps** with Arabic text, transliteration, translation, audio & illustration
- **Auto-routing** – add a JSON file, get a new language route automatically
- **Mobile-first** – works perfectly on 320px screens
- **<1s load time, <200KB** – optimised static site
- **GDPR compliant** – zero cookies, zero tracking
- **Accessibility** – ARIA labels, semantic HTML, RTL support

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| [Astro 4.x](https://astro.build) | Static site generation |
| [TailwindCSS 3.x](https://tailwindcss.com) | Styling |
| [Alpine.js 3.x](https://alpinejs.dev) | Interactive prayer player |
| HTML5 Audio API | Audio playback |

## 📦 Setup

### Prerequisites

- Node.js 18+
- npm 8+

### Install & Run

```bash
# Clone the repository
git clone https://github.com/munjed80/Islam.git
cd Islam

# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:4321

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deploy to VPS with Caddy

### 1. Build the static files

```bash
npm run build
# Output goes to ./dist/
```

### 2. Upload to your VPS

```bash
rsync -avz dist/ user@your-vps:/var/www/salah.to/
```

### 3. Configure Caddy

```caddy
salah.to {
    root * /var/www/salah.to
    file_server
    try_files {path} {path}/index.html /404.html
    encode gzip
    header {
        Cache-Control "public, max-age=31536000, immutable"
        X-Content-Type-Options "nosniff"
        X-Frame-Options "DENY"
        Referrer-Policy "no-referrer"
    }
}
```

```bash
systemctl reload caddy
```

### 4. Set up SSL (automatic with Caddy)

Caddy handles Let's Encrypt SSL automatically. Just make sure port 80 and 443 are open.

## 📁 File Structure

```
salah.to/
├── public/
│   ├── audio/ar/          # Arabic audio files (.mp3)
│   ├── i18n/              # Language files (add one to add a language!)
│   │   ├── en.json
│   │   ├── nl.json
│   │   └── ar.json
│   └── illustrations/     # SVG prayer position illustrations
├── src/
│   ├── components/
│   │   ├── LanguagePicker.astro
│   │   └── PrayerPlayer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro        # Language picker homepage
│       └── [lang]/index.astro # Prayer player (auto-generated per language)
├── CONTRIBUTING.md
├── README.md
└── astro.config.mjs
```

## 🤝 Contributing

We welcome contributions! Whether you're a translator, developer, or designer — there's something for everyone.

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to add a new language in 3 steps.

## 📄 License

MIT © salah.to contributors

---

*Made with ❤️ for Muslim children everywhere.*