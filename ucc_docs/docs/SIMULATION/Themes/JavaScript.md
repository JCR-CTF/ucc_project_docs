# JavaScript

manifest.json
In your vite.config.js you must enable the manifest flag. The generated manifest file is expected to be in the static directory. CTFd will use the generated manifest.json file to render *script* tags when your template uses the Assets constant helper.

For example, if your manifest.json looks like:

```yml
{
  "assets/js/index.js": {
    "file": "assets/index.4c3687bd.js",
    "src": "assets/js/index.js",
    "isEntry": true
  }
},


by calling {{ Assets.js('assets/js/index.js') }} in a template, you will get something like the following output:

<script src="assets/index.4c3687bd.js"></script>
