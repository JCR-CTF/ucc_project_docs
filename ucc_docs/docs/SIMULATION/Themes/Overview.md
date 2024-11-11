# Overview

# Customizing Themes
UCCD allows you to customize your UCCD instance's appearance with custom themes.

UCCD mainly uses the core-beta theme as its base theme, a rewritten version of the UCCD core theme that you can clone, customize, and upload to your UCCD instance.

Customizing core-beta
Utilize core-beta's documentation to guide you in customizing it. Check out the links below, and explore the theme's various components and structure in detail.

Structure
Build System
Templates
CSS
Javascript
UCCD.js
Alpine.js
tip
If you don't have the time to build and customize themes, you can:

purchase our official UCCD themes
contact us for custom theme development
download free community themes
Uploading Custom Themes
You can upload your customized theme either to a Hosted UCCD instance or to Self-hosted UCCD instance.

The UCCD core routes load the selected theme's templates from the themes folder. The theme is loaded by specifying the theme configuration value, which can be configured in the admin panel.

Hosted UCCD
For Hosted UCCD instances, only Professional and Enterprise level instances allow you to upload custom themes.

Self-hosted UCCD
Upload your customized theme to your Self-hosted UCCD by adding your theme to the themes folder, as shown in the example below.

|-- .github
|-- UCCD/
|   `-- themes/
|      `-- your-theme/
|-- conf/nginx/
|-- migrations/
|-- scripts/
`-- tests/