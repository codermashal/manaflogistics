# Manaf Logistic — Website

Static, multi-file company website (no build step needed). Open `index.html` in a browser or upload the folder to any host.

## Structure

```
manaf-logistics/
├── index.html            Page markup (semantic, SEO-ready)
├── 404.html              Branded bilingual error page
├── favicon.svg           Browser tab icon
├── robots.txt            Search engine rules
├── css/
│   ├── tokens.css        Colors, fonts, spacing, shadows (edit brand here)
│   ├── base.css          Reset, layout helpers, animations, preloader
│   ├── components.css    Buttons, header, cards, tracking, FAQ, form, toast
│   ├── sections.css      Hero, stats, about, services, process, contact, footer
│   └── responsive.css    Tablet / mobile breakpoints
├── js/
│   ├── i18n.js           English + Arabic text (RTL switch). Edit all copy here
│   ├── nav.js            Sticky header, mobile menu, active link, progress bar
│   ├── animations.js     Scroll reveal + animated counters
│   ├── tracking.js       Shipment tracking widget (DEMO — connect your API)
│   ├── forms.js          Contact + newsletter validation (connect your backend)
│   └── main.js           Preloader + toast helper
└── images/               Put your existing images here (same names as before)
```

## Images used

`manaf_banner.jpg`, `Manaf.png`, `Manaf-Logo.png`, `Photo.jpg`, `Photo-1.jpg`, `Image.jpg`, `67868542d3.jpg`,
`ship.jpg`, `Background.jpg`, `Boxs.jpg`, `Riyadh_Skyline.jpg`, `ava-1.jpg`, `ava-2.jpg`, `footer-bg.jpg`

## Before going live

- Stats show 120+ trucks & trailers and 1000+ clients. Add more only with confirmed numbers (see the comment in the stats section).
- Replace the sample testimonials with real ones.
- Confirm the three fleet bullets in the Fleet section match your real operations.
- Connect `js/tracking.js` (`fetchStatus`) and `js/forms.js` (`send`) to your real systems.
- The "Quote via WhatsApp" button opens WhatsApp with the form details to +966 55 128 2248.
- Update social links in the footer and add a domain to the `og:` meta tags.
