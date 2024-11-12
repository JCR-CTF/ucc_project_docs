# UCC.js

UCCD.js (https://github.com/CTFd/CTFd.js) is a JavaScript library intended for themes to interact with the UCCD API to make it easier to focus on the rest of the theme.

UCCD.js is available on npm as @UCCDio/UCCD-js.

UCCD.init()
Initialize the UCCD class object with the data needed to access the API and also subscribe to the Server Sent Events (SSE) notification endpoints (/events).

UCCD.config
Access the UCCD configuration variables that were set during initalization.

UCCD.pages
UCCD REST API wrappers used for each of the main UCCD pages

UCCD.fetch()
Call the UCCD wrapper for fetch

UCCD.ui
Various utility functions that can be useful for improving the UCCD UI

UCCD.lib
Vendored versions of third party libraries for easier use