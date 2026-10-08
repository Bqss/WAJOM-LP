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

## Course webinar gallery

The `/course` page shows screenshots from previous Wajom Chat AI Mastery webinars in a responsive gallery. The original images are served from `static/gallery/course1.jpeg`, `course2.jpeg`, and `course3.jpeg`; each gallery card opens its full-size image in a new tab. When replacing photos, update their captions and intrinsic image dimensions in `src/routes/course/+page.svelte`.
