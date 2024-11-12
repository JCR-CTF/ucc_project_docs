# Developing Ucc-Cyber Drills Plugins

## Introduction

Ucc-Cyber Drills features a plugin interface allowing for the modification of UCCD behavior without modifying the core Ucc-Cyber Drills code. This has a number of benefits over forking and modifying Ucc-Cyber Drills platform:

    - Your modifications and plugins can be shared more easily
    - Ucc-Cyber Drills can be updated without losing any custom behavior

The Ucc-Cyber Drills developers will do their best to avoid introducing breaking changes, but keep in mind that the plugin interface is still under development and could change.

## Architecture

UCCD plugins are implemented as Python modules with some UCCD-specific files.

```plaintext
UCCD
└── plugins
   └── UCCD-plugin
       ├── README.md          # README file
       ├── __init__.py        # Main code file loaded by UCCD
       ├── requirements.txt   # Any requirements that need to be installed
       └── config.json        # Plugin configuration file
{% if plugins %}
<li>
    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Plugins <span class="caret"></span></a>
    <ul class="dropdown-menu">
        {% for plugin in plugins %}
            <li><a href="{{ request.script_root }}{{ plugin.route }}">{{ plugin.name }}</a></li>
        {% endfor %}
    </ul>
</li>
{% endif %}

plaintext```


# config.html

Previously, a static file known as config.html was used to provide plugin developers a page loaded by the UCCD admin panel. Although now superseded by config.json, it is still supported for backward compatibility.

The config.html file for a plugin can be accessed by UCCD admins at /admin/plugins/<plugin-folder-name>. If stored in UCCD-S3-plugin, it would be accessible at /admin/plugins/UCCD-S3-plugin.

config.html is rendered as a Jinja template and has access to all the same functions that UCCD exposes to Jinja. While Jinja templates can technically run arbitrary Python code, this is ancillary.
Adding New Routes

Adding new routes in UCCD is essentially writing new Flask routes. Since the entire app is passed to the plugin, the app.route decorator can add new routes.
Example:

from flask import render_template

def load(app):
    @app.route('/faq', methods=['GET'])
    def view_faq():
        return render_template('page.html', content="<h1>FAQ Page</h1>")

Modifying Existing Routes

Overriding existing routes in UCCD/Flask is more complex, as Flask does not strictly support it. The current approach is to modify the app.view_functions dictionary, which maps routes to their handling functions.

from flask import render_template

def load(app):
    def view_challenges():
        return render_template('page.html', content="<h1>Challenges are currently closed</h1>")

    # The format for the view_functions dictionary is blueprint.view_function_name
    app.view_functions['challenges.challenges_view'] = view_challenges

To add a new method to an existing route, modify the url_map as follows:

from werkzeug.routing import Rule

app.url_map.add(Rule('/challenges', endpoint='challenges.challenges_view', methods=['GET', 'POST']))

Adding Database Tables

If UCCD lacks the necessary database tables or columns for your needs, use a plugin to create a new table. You can then use the previous sections' techniques to create routes or modify existing ones to access your new table.

from UCCD.models import db

