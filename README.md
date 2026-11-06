# MISSION 23 — A Universe Still Unwritten

A complete React + TypeScript + Vite birthday story, illustrated with original SVG artwork. Built from the supplied brief; no existing project or music file was attached.

## Run locally

Install Node.js 22 or newer. In this folder:

```sh
npm ci
npm run dev
```

Open the Local URL printed by Vite. Keep the terminal running. For a production build:

```sh
npm test
npm run build
npm run preview
```

`dist/` is the deployable website. It must be served through HTTP; do not double-click its index.html. A separate `mission-23-standalone.html`, where supplied, can be opened directly for a quiet preview without a server.

## Add your background music

1. Put an MP3, M4A, or WAV you have permission to use into `public/audio/`.
2. Edit `src/config.ts`:

```ts
music: { src: '/audio/your-song.mp3', volume: 0.25, loop: true },
```

3. Run `npm run build` again before deploying.

Music begins after a visitor gesture, stays alive across scenes, fades in, and ducks under synthesized musical tones. The discreet top-right music button mutes both music and sound effects. Missing or unsupported audio leaves the story usable. The default track path is empty, so no music file or copyrighted recording is distributed. Web Audio notes are generated locally. Looping uses the browser audio loop; a sample-accurate crossfade across an arbitrary supplied track is not implemented. Trim your file cleanly for the best loop. Test your chosen track on the recipient's device.

## Personalize it

Edit `src/config.ts` for the birthday letter, book passages, musical message, food message, small victories, future doorway messages, hidden constellation message, invitation, and hoodie wording. Other interface and scene labels are in `src/main.tsx`. Original illustrated scenes are in `src/Art.tsx`; colors, typography, layout and animation are in `src/style.css`. Keep the hoodie SVG inscription in `src/main.tsx` in sync if you change the final phrase.

No name is assumed. The tone is intentionally warm without a declaration of love. No stock images or emoji artwork are used; small star and flower glyphs act as interaction symbols alongside custom SVG scenes.

## Deploy through Netlify

### Drag-and-drop deployment

1. Run `npm ci` and `npm run build`.
2. Sign in to Netlify and choose **Add new project / Deploy manually**.
3. Drag the **dist folder** into the deploy area (not the source folder).
4. Open the generated HTTPS URL on your iPhone. Rename the site under project settings if desired.

### Git-connected deployment

1. Push this source folder to your own repository, excluding `node_modules` and `dist`.
2. In Netlify, import that repository.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Deploy. `netlify.toml` already contains these settings.

No environment variables, API keys, databases, accounts, or server are required for the visitor. The recipient uses the resulting website URL. A normal Netlify deployment is publicly reachable by anyone with the URL; configure Netlify access controls if you want restricted access.

## The journey

- **Invitation:** touch and hold a golden star to draw a constellation; a tap is an accessible alternative.
- **World I:** illustrated floating observatory and a playful Mission Control welcome.
- **Jazz Garden:** six pentatonic flower notes, blooming responses, a twelve-note phrase memory and melody replay.
- **Library:** three opening books, tap or swipe between thoughts, optional riddle.
- **Unknown Flavors:** drag or tap to rotate a nebulaberry; inspect field notes or simply continue.
- **Small Victories:** draw or tap a five-star constellation; optional automatic connection.
- **Between Worlds:** a luminous arch opens by tapping or swiping upward, revealing the second world's atmosphere.
- **World II:** four illustrated portals in any order, a future melody, an idea discovery, a draggable celestial map with a hidden café, and a reflective observatory.
- **Golden threads:** quiet constellation of curiosity, creativity, courage, passion, persistence and possibility.
- **Planet 23:** a single touch lights all twenty-three stars; an ivory birthday letter follows.
- **The gift:** turn the illustrated hoodie to find the inscription inside its hood.

The menu and footer star chart allow free movement. There are no mandatory quizzes, scores, or locked progress. Your last scene, discovered qualities and explored future portals are stored in localStorage on the current browser. Restart from the journey menu or the final scene. Within-scene choices and a partly composed melody reset when you leave a scene; the final letter can be opened again with one tap. If browser storage is unavailable, the experience remains usable in the current session.

## Accessibility and performance

Touch-sized controls, keyboard-accessible star drawing, visible focus, semantic buttons, readable text, no device sensor permissions, reduced-motion support, and zero third-party images. All illustration scales without image downloads. Cormorant Garamond and DM Sans are requested from Google Fonts with local serif/sans-serif fallbacks if offline. The visual world uses a small set of animated SVG groups; no WebGL or heavy 3D runtime.

## Verification and limits

`npm test` exercises the complete story in a simulated DOM: music fallback, flowers and replay, opening and changing books, optional riddle, food inspection, constellation fallback, world transition, all four future portals, map discovery, six golden fragments, letter, hoodie, saved progress, and restart. `npm run build` checks TypeScript and creates the production bundle.

A supported browser-control tool was unavailable in the build environment, so mobile screenshots and real Safari audio/gesture behavior have **not** been verified. Before gifting, open the Netlify URL on an iPhone at approximately 375–430 px wide and complete the journey. Check your chosen music, mute/unmute, book swiping, star dragging, map dragging, orientation changes, long-letter scrolling, reload/resume, and reduced motion. DOM tests cannot verify layout, smoothness, or the artistic quality of the transition. No device-motion parallax, microphone recording, or actual saxophone samples are included. First-time duration depends on how long the recipient explores; there are no forced timers to reach a target runtime.

This project is prepared for Netlify, not deployed to a Netlify account.
