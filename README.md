# Nuka Raju & Dilleswari · Engagement Invitation

A static, bilingual (English / తెలుగు) engagement invitation website.
Visitors open a traditional wooden door to reveal the invitation.

- **Event:** Sunday, 1 November 2026 · 11:00 AM onwards
- **Venue:** RK Function Hall, Sujatha Nagar, opposite HP Petrol Bunk

Vanilla HTML, CSS and JavaScript with no build step and no dependencies.
Fonts load from Google Fonts, and system fonts take over if they can't load.

## Files

```text
index.html                    page structure and English default copy
css/styles.css                design tokens, layout, door, motion, reduced-motion rules
js/main.js                    translations + language, door, reveal, countdown, music, share
assets/images/toran.svg       mango-leaf and marigold garland
assets/images/rangoli.svg     kolam/mandala motif
assets/images/floral-divider.svg
assets/images/favicon.svg     N & D monogram
assets/images/og-image.png    1200×630 social share preview
assets/engagement.ics         calendar file for Apple Calendar / Outlook
```

## Page sections

1. **Door entrance**: carved double doors that swing open with a gold sparkle burst.
2. **Hero**: temple-arch frame, a gold line mandala that draws itself in, and the names.
3. **01 You Are Invited**: the invitation message.
4. **02 The Families**: arch cards for the groom and bride with their parents.
5. **03 Save the Date**: ticket-style date card, a live countdown (days, hours,
   minutes; refreshes every 30 s) and Add to Calendar buttons.
6. **04 Venue & Directions**: Google Map, Get Directions, View on Google Maps,
   and Copy address.
7. **Closing**: thank-you message, plus Share on WhatsApp, Share and Copy link.

Navigation: a glass top bar (section links on desktop) and a bottom dock on
phones, both highlighting the section in view, plus a thin gold scroll-progress
bar at the top. The dock stays hidden on the opening hero screen.

## Run locally

Any static file server works. From this folder:

```sh
npx serve .                    # or
python -m http.server 8000     # then open http://localhost:8000
```

Opening `index.html` directly (file://) also works. The share button then
falls back to copying the link, because browsers restrict the clipboard and
share APIs to http(s).

## Deploy

All paths are relative, so the site works from a domain root or a subfolder.

- **GitHub Pages:** push these files to a repository, then go to Settings →
  Pages → Deploy from branch → `main` / root.
- **Netlify:** drag this folder onto https://app.netlify.com/drop.
- **Any static host:** upload the folder as-is.

**After deploying**, edit the `og:image` tag in `index.html` to use the full
absolute URL, for example
`https://your-name.github.io/invitation/assets/images/og-image.png`.
WhatsApp and Facebook ignore relative image URLs, so the preview picture
won't show until you do this.

## Editing copy

All visitor-facing text lives in one object, `translations` (`en` and `te`),
at the top of `js/main.js`. HTML elements reference keys with `data-i18n`
(text) and `data-i18n-attr` (attributes such as `aria-label`).
The English text in `index.html` is the no-JavaScript fallback. If you change
an English string, update it in both places.

The language toggle sets `<html lang>`. A Telugu link can be shared as
`…/index.html?lang=te`; the share button adds this automatically in Telugu mode.

### Needs review by a Telugu speaker before publishing

- The Telugu name spellings **నూకరాజు** and **దిల్లేశ్వరి** (`groomName`,
  `brideName`, `coupleNative`, `pageTitle`, `shareTitle`, `shareText`).
  The English names stay authoritative and appear in both modes.
- The Telugu strings that were not in the brief: section headings, date and
  time wording (ఆదివారం, 1 నవంబర్ 2026 / ఉదయం 11:00 గంటల నుండి), countdown
  messages, and map, share and error messages.

## Background music (currently disabled)

No licensed audio file has been supplied, so the music control stays hidden.
To enable it:

1. Add a track you have the right to use at `assets/audio/soft-instrumental.mp3`.
2. In `js/main.js`, set `CONFIG.music.enabled` to `true`.

Music is off by default and only plays when a visitor presses the toggle.
If the browser rejects playback, the visitor sees a message. If the file
fails to load, the control hides itself.

## Behaviour notes

- **No JavaScript:** the door is skipped and the full invitation shows.
  If `main.js` fails to load within 5 seconds, the page falls back the same way.
- **Reduced motion:** the door opens instantly, and reveals, petals, the diya
  flicker and smooth scrolling are all turned off.
- **Countdown:** counts to 11:00 AM IST on 1 November in days, hours and
  minutes, with no ticking seconds. Once the ceremony has started it shows
  "The celebration day has arrived", and from 2 November onward
  "Thank you for celebrating with us".
- **Calendar entries:** only a start time (11:00 AM IST) is set, because no end
  time was given. Calendars show it as an event starting at 11:00. The .ics
  file adds a reminder one day before.
- **Directions links:** both links add "Visakhapatnam" to the Google Maps
  query so the right Sujatha Nagar is found. The city comes from the
  coordinates in the supplied map embed. It is not shown on the page.
