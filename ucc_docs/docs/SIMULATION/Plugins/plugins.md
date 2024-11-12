# Developing UCC-Cyber Drills Plugins

## Introduction

UCC-Cyber Drills features a plugin interface allowing for the modification of CTFd behavior without modifying the core UCC-Cyber Drills code. This has a number of benefits over forking and modifying UCC-Cyber Drills platform:

- Your modifications and plugins can be shared more easily
- UCC-Cyber Drills can be updated without losing any custom behavior

::::info
The UCC-Cyber Drills developers will do their best to avoid introducing breaking changes, but keep in mind that the plugin interface is still under development and could change.
::::
## Architecture

CTFd plugins are implemented as Python modules with some CTFd-specific files:

```
CTFd
└── plugins
   └── CTFd-plugin
       ├── README.md          # README file
       ├── __init__.py        # Main code file loaded by CTFd
       ├── requirements.txt   # Any requirements that need to be installed
       └── config.json        # Plugin configuration file
```

### Plugin Navigation Template
```html
{% if plugins %}
<li>
    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" 
       aria-haspopup="true" aria-expanded="false">Plugins <span class="caret"></span></a>
    <ul class="dropdown-menu">
        {% for plugin in plugins %}
            <li><a href="{{ request.script_root }}{{ plugin.route }}">{{ plugin.name }}</a></li>
        {% endfor %}
    </ul>
</li>
{% endif %}
```

## Configuration

### config.html

Previously, a static file known as `config.html` was used to provide plugin developers a page loaded by the CTFd admin panel. Although now superseded by `config.json`, it is still supported for backward compatibility.

The `config.html` file for a plugin can be accessed by CTFd admins at `/admin/plugins/<plugin-folder-name>`. If stored in CTFd-S3-plugin, it would be accessible at `/admin/plugins/CTFd-S3-plugin`.

`config.html` is rendered as a Jinja template and has access to all the same functions that CTFd exposes to Jinja. While Jinja templates can technically run arbitrary Python code, this is ancillary.

## Adding New Routes

Adding new routes in CTFd is essentially writing new Flask routes. Since the entire app is passed to the plugin, the `app.route` decorator can add new routes.

Example:
```python
from flask import render_template

def load(app):
    @app.route('/faq', methods=['GET'])
    def view_faq():
        return render_template('page.html', content="<h1>FAQ Page</h1>")
```

## Modifying Existing Routes

Overriding existing routes in CTFd/Flask is more complex, as Flask does not strictly support it. The current approach is to modify the `app.view_functions` dictionary, which maps routes to their handling functions.

```python
from flask import render_template

def load(app):
    def view_challenges():
        return render_template('page.html', content="<h1>Challenges are currently closed</h1>")

    # The format for the view_functions dictionary is blueprint.view_function_name
    app.view_functions['challenges.challenges_view'] = view_challenges
```

To add a new method to an existing route, modify the url_map as follows:

```python
from werkzeug.routing import Rule

app.url_map.add(Rule('/challenges', endpoint='challenges.challenges_view', methods=['GET', 'POST']))
```

## Adding Database Tables

If CTFd lacks the necessary database tables or columns for your needs, use a plugin to create a new table. You can then use the previous sections' techniques to create routes or modify existing ones to access your new table.

```python
from CTFd.models import db
```