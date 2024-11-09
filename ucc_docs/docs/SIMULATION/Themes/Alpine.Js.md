# Alpine.js

Official CTFd Themes make use of Alpine.js to add interactivity on each of the pages. This is included in CTFd's default theme and exposed globally on the window object.

# What about Vue?
While some components of CTFd (specifically the Admin Panel), make use of Vue.js to add interactive components that track state and manipulate the DOM. However during testing it was found that for user-facing portions of CTFd, it was easier to use Alpine.js instead of Vue.js.

Going forward CTFd will continue to use Vue.js for components which are controlled primarily by the CTFd developers and Alpine.js in areas where users may choose to create their own content/controls.