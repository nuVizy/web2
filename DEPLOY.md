# Deploying the production build

- Preview locally:

```sh
npm run preview
# or with explicit port
npm run preview -- --port 5173
```

- Create a ZIP of the `dist` folder (already produced here):

```sh
zip -r dist.zip dist
```

- Netlify:
  - Drag & drop `dist` into the Netlify Sites page, or connect the repository and set the build command to `npm run build` and publish directory to `dist`.
  - This repo includes `netlify.toml` for SPA redirects.

- Vercel:
  - Import the repository in Vercel and set the output directory to `dist`, or deploy using the Vercel CLI.
  - `vercel.json` is included for static routing.
