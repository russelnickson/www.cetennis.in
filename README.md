# Competitive Edge Tennis Academy

Static website for **Competitive Edge Tennis Academy** (CE Tennis) — an international residential and non-residential tennis academy, operating since 1995.

**Site:** [www.cetennis.in](http://www.cetennis.in)

## Pages

| Page | File |
|------|------|
| Home | `index.html` |
| About | `about.html` |
| Programmes | `programmes.html` |
| Competitive | `competitive.html` |
| Facilities | `facilities.html` |
| Gallery | `gallery.html` |
| Achievements | `achievements.html` |
| Hire | `hire.html` |
| Contact | `contact-us.html` |

## Local preview

Open any HTML file in a browser, or serve the folder locally:

```bash
# Python
python3 -m http.server 8000

# Node (if you have npx)
npx serve .
```

Then visit `http://localhost:8000`.

## Structure

```
├── *.html              # site pages
└── media/
    ├── css/            # main.css, gallery view styles, theme images
    ├── js/             # jQuery, gallery/slider plugins, main.js
    └── img/            # banners, logos, gallery, facilities, testimonials
```

## Notes

- All CSS, JS, and image assets were recovered from the Internet Archive and are now stored **locally** under `media/`, so the site is fully self-contained and works offline.
- Wayback Machine injection (scripts, banners, rewritten URLs) and the dead hit-counter / legacy Analytics snippet have been removed.
- A few external links remain intentional: Google Fonts, Facebook, Google Maps, and the developer credit `webdefy.org`.

## License

Site content © Competitive Edge Tennis Academy. Original development credited to Webdefy Team (2013).
