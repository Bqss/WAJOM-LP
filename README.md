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

The `/course` landing page retains the complete content from [Masterclass Wajom Agensi Umrah](https://slugpost.com/wajom-masterclass-agensi-umrah), including the seven-day follow-up sequence, Smart Campaign details, FAQs and source citations. It supports Malay/English and the existing light/dark themes. Registration links use `/checkout`; mobile registration and WhatsApp controls share the bottom bar without covering the content.

The course hero shows registration, session details and benefits without a demo-video button.

## Course webinar gallery

The `/course` page also preserves screenshots from previous Wajom Chat AI Mastery webinars. Images are served from `static/gallery/course1.jpeg`, `course2.jpeg`, and `course3.jpeg`. Each gallery card opens a native dialog with previous/next controls, arrow-key navigation and Escape to close. Captions and intrinsic image dimensions live in `src/routes/course/+page.svelte`.
