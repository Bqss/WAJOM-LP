# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv@0.17.0 create --template minimal --types ts --add tailwindcss="plugins:none" --install npm ./
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Course landing page

The `/course` landing page sells the Kelas Setting Smart Campaign & Agent AI Wajom, a live Zoom class on setting up daily automated messages to WhatsApp groups for mutawif, Umrah & Travel agency owners and marketing teams. It supports Malay/English and the existing light/dark themes. Registration links use `/checkout`; mobile registration and WhatsApp controls share the bottom bar without covering the content.

The hero includes an animated WhatsApp-group chat (a CSS loop) and a one-shot text scramble on the eyebrow and on "setiap hari"/"every day" in the headline, via `scramble` in `src/lib/motion.ts`. Both are disabled under `prefers-reduced-motion`.

The course hero shows registration, session details and benefits without a demo-video button.

## Course webinar gallery

The `/course` page also preserves screenshots from previous Wajom Chat AI Mastery webinars. Images are served from `static/gallery/course1.jpeg`, `course2.jpeg`, and `course3.jpeg`. Each gallery card opens a native dialog with previous/next controls, arrow-key navigation and Escape to close. Captions and intrinsic image dimensions live in `src/routes/course/+page.svelte`.
