# Alpine.js

Official UCCD Themes make use of Alpine.js to add interactivity on each of the pages. This is included in UCCD's default theme and exposed globally on the window object.

# What about Vue?
While some components of UCCD (specifically the Admin Panel), make use of Vue.js to add interactive components that track state and manipulate the DOM. However during testing it was found that for user-facing portions of UCCD, it was easier to use Alpine.js instead of Vue.js.

Going forward UCCD will continue to use Vue.js for components which are controlled primarily by the UCCD developers and Alpine.js in areas where users may choose to create their own content/controls.