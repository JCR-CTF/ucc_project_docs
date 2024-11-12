# CSS

# manifest-css.json
One quirk of Vite's manifest system is that it does not directly generate a manifest for CSS assets. To get around this the UCCD developers created a Vite plugin (vite-manifest-css) which will create a seperate manifest specifically for CSS files called manifest-css.json.

This can be used by importing CSSManifestPlugin and then including it as a Vite plugin as shown in the following Vite config example:

```yml
const { resolve } = require("path");
import { defineConfig } from "vite";
import { CSSManifestPlugin } from "vite-manifest-css";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [CSSManifestPlugin()],
  build: {
    manifest: true,
    outDir: "static",
    rollupOptions: {
      input: {
        index: resolve(__dirname, "assets/js/index.js"),
        main: resolve(__dirname, "assets/scss/main.scss"),
      },
    },
  },
});

A generated example of manifest-css.json would be:

{
  "main.css": {
    "file": "assets/main.b16debf0.css"
  }
}

# Assets.css()
UCCD provides a helper to automatically include CSS files based on a key in manifest-css.json.

Using the previous manifest-css.json example, if a template includes {{ Assets.css("main.css") }}, UCCD will generate something like:

<link rel="stylesheet" href="/themes/core/static/assets/main.b16debf0.css"/>