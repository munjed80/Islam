# Contributing to salah.to 🌍

Thank you for helping Muslim children learn how to pray in their language!

## How to Add a New Language (3 Steps)

Adding a new language to `salah.to` is easy. You don't need to be a developer.

---

### Step 1: Fork the Repository

1. Go to [github.com/munjed80/Islam](https://github.com/munjed80/Islam)
2. Click the **"Fork"** button in the top right
3. Clone your fork:
   ```bash
   git clone https://github.com/YOUR-USERNAME/Islam.git
   cd Islam
   ```

---

### Step 2: Copy `en.json` and Translate

1. Navigate to `public/i18n/`
2. Copy `en.json` to a new file named with the [ISO 639-1 language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes):
   ```bash
   cp public/i18n/en.json public/i18n/xx.json
   # Replace 'xx' with your language code, e.g. 'fr', 'de', 'tr', 'ur', 'id'
   ```
3. Open `public/i18n/xx.json` and translate:

   ```json
   {
     "meta": {
       "lang": "xx",              ← Your ISO 639-1 code
       "name": "Your Language",  ← Name in YOUR language (e.g. "Français")
       "dir": "ltr",             ← "ltr" or "rtl" (Arabic, Urdu = "rtl")
       "translator": "Your Name",
       "font": "system-ui",
       "flag": "🇫🇷",            ← Flag emoji for your country
       "description": "..."      ← Short SEO description in your language
     },
     "ui": {
       "start": "Start",         ← Translate all UI strings
       "next": "Next",
       "replay": "Play again",
       "well_done": "Well done! You can pray!",
       "choose_language": "Choose your language",
       "step_of": "Step {current} of {total}",  ← Keep {current} and {total}
       "restart": "Start over"
     },
     "steps": [
       {
         "id": "takbir",          ← DO NOT change the id
         "illustration": "/illustrations/qiyam.svg",  ← DO NOT change
         "arabic": "اللَّهُ أَكْبَرُ",  ← DO NOT change Arabic text
         "transliteration": "Allahu Akbar",  ← Transliterate to your script
         "translation": "Allah is the Greatest",  ← Translate meaning
         "audio": "/audio/ar/takbir.mp3",  ← DO NOT change audio paths
         "explanation": "We start by praising Allah."  ← Kid-friendly explanation
       }
       // ... (translate all 7 steps)
     ]
   }
   ```

   **Rules for translators:**
   - Keep `id`, `illustration`, `arabic`, and `audio` exactly as they are
   - Translate: `transliteration`, `translation`, `explanation`
   - Use **simple language** for children aged 4–10
   - For RTL languages (Arabic, Urdu, Farsi, Hebrew), set `"dir": "rtl"`

---

### Step 3: Submit a Pull Request

1. Commit your new file:
   ```bash
   git add public/i18n/xx.json
   git commit -m "Add [Language Name] translation (xx)"
   git push origin main
   ```
2. Go to your fork on GitHub and click **"New Pull Request"**
3. Fill in the PR template and submit!

A maintainer will review and merge your contribution. 🎉

---

## The 7 Prayer Steps

Your translation must include all 7 steps in this order:

| # | ID | Arabic Name |
|---|-----|-------------|
| 1 | `takbir` | التكبير – Opening takbir |
| 2 | `fatiha` | الفاتحة – Al-Fatiha |
| 3 | `ruku` | الركوع – Bowing |
| 4 | `ruku_dhikr` | ذكر الركوع – Dhikr in ruku |
| 5 | `sujud` | السجود – Prostration |
| 6 | `sujud_dhikr` | ذكر السجود – Dhikr in sujud |
| 7 | `salam` | التسليم – Final greeting |

---

## Code Contributions

If you're a developer and want to improve the app:

1. Fork & clone the repo
2. Install dependencies: `npm install`
3. Start dev server: `npm run dev`
4. Make your changes
5. Test: `npm run build`
6. Open a PR with a clear description

Please keep the code **simple and readable** — this project is meant to be accessible to volunteer contributors.

---

## Design Principles

- 🧒 **Children first**: UI must be usable by a 5-year-old without adult help
- 📱 **Mobile first**: Perfect on 320px screens
- ⚡ **Performance**: Keep bundle size minimal
- 🔒 **Privacy**: No tracking, no cookies, no external requests

---

## Contact

Open an [Issue](https://github.com/munjed80/Islam/issues) for questions, suggestions, or to coordinate before starting a large contribution.

**JazakAllahu Khayran!** 🤲
