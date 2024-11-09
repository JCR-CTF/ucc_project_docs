# Overview

# Customizing Themes
CTFd allows you to customize your CTFd instance's appearance with custom themes.

CTFd mainly uses the core-beta theme as its base theme, a rewritten version of the CTFd core theme that you can clone, customize, and upload to your CTFd instance.

Customizing core-beta
Utilize core-beta's documentation to guide you in customizing it. Check out the links below, and explore the theme's various components and structure in detail.

Structure
Build System
Templates
CSS
Javascript
CTFd.js
Alpine.js
tip
If you don't have the time to build and customize themes, you can:

purchase our official CTFd themes
contact us for custom theme development
download free community themes
Uploading Custom Themes
You can upload your customized theme either to a Hosted CTFd instance or to Self-hosted CTFd instance.

The CTFd core routes load the selected theme's templates from the themes folder. The theme is loaded by specifying the theme configuration value, which can be configured in the admin panel.

Hosted CTFd
For Hosted CTFd instances, only Professional and Enterprise level instances allow you to upload custom themes.

Self-hosted CTFd
Upload your customized theme to your Self-hosted CTFd by adding your theme to the themes folder, as shown in the example below.

|-- .github
|-- CTFd/
|   `-- themes/
|      `-- your-theme/
|-- conf/nginx/
|-- migrations/
|-- scripts/
`-- tests/