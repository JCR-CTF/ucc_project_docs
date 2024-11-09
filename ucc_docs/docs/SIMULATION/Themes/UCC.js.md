# UCC.js

CTFd.js (https://github.com/CTFd/CTFd.js) is a JavaScript library intended for themes to interact with the CTFd API to make it easier to focus on the rest of the theme.

CTFd.js is available on npm as @ctfdio/ctfd-js.

CTFd.init()
Initialize the CTFd class object with the data needed to access the API and also subscribe to the Server Sent Events (SSE) notification endpoints (/events).

CTFd.config
Access the CTFd configuration variables that were set during initalization.

CTFd.pages
CTFd REST API wrappers used for each of the main CTFd pages

CTFd.fetch()
Call the CTFd wrapper for fetch

CTFd.ui
Various utility functions that can be useful for improving the CTFd UI

CTFd.lib
Vendored versions of third party libraries for easier use