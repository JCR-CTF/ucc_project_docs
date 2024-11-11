# Configuration

UCC Cyber Range provides a number of configuration options which are used to configure server behavior. UCC Cyber Range makes a distinction between configuration values which can be configured only with server-level access and values which can be configured by those with administrative priveleges on UCC Cyber Range.

# Server Level Configuration
Server level configuration can be modified from the config.ini file in UCC Cyber Range.

# SECRET_KEY
The secret value used to creation sessions and sign strings. This should be set to a random string. In the interest of ease, UCC Cyber Range will automatically create a secret key file for you. If you wish to add this secret key to your instance you should hard code this value to a random static value.

You can also remove .UCC Cyber Range_secret_key from the .gitignore file and commit this file into whatever repository you are using.

http://flask.pocoo.org/docs/latest/quickstart/#sessions

# DATABASE_URL
The URI that specifies the username, password, hostname, port, and database of the server used to hold the UCC Cyber Range database.

e.g. mysql+pymysql://root:*YOUR_PASSWORD_HERE*@localhost/UCC Cyber Range

# REDIS_URL
The URI to connect to a Redis server.

e.g. redis://user:password@localhost:6379

http://pythonhosted.org/Flask-Caching/#configuring-flask-caching

# MAILFROM_ADDR
The email address that emails are sent from if not overridden in the configuration panel.

# MAIL_SERVER
The mail server that emails are sent from if not overriden in the configuration panel.

# MAIL_PORT
The mail port that emails are sent from if not overriden in the configuration panel.

# MAIL_USEAUTH
Whether or not to use username and password to authenticate to the SMTP server

# MAIL_USERNAME
The username used to authenticate to the SMTP server if MAIL_USEAUTH is defined

# MAIL_PASSWORD
The password used to authenticate to the SMTP server if MAIL_USEAUTH is defined

# MAIL_TLS
Whether to connect to the SMTP server over TLS

# MAIL_SSL
Whether to connect to the SMTP server over SSL

# MAILGUN_API_KEY
Mailgun API key to send email over Mailgun. As of UCC Cyber Range v3, Mailgun integration is deprecated. Installations using the Mailgun API should migrate over to SMTP settings.

# MAILGUN_BASE_URL
Mailgun base url to send email over Mailgun. As of UCC Cyber Range v3, Mailgun integration is deprecated. Installations using the Mailgun API should migrate over to SMTP settings.

# LOG_FOLDER
The location where logs are written. These are the logs for UCC Cyber Range key submissions, registrations, and logins. The default location is the UCC Cyber Range/logs folder.

# UPLOAD_PROVIDER
Specifies the service that UCC Cyber Range should use to store files.

# UPLOAD_FOLDER
The location where files are uploaded. The default destination is the UCC Cyber Range/uploads folder.

# AWS_ACCESS_KEY_ID
AWS access token used to authenticate to the S3 bucket.

# AWS_SECRET_ACCESS_KEY
AWS secret token used to authenticate to the S3 bucket.

# AWS_S3_BUCKET
The unique identifier for your S3 bucket.

# AWS_S3_ENDPOINT_URL
A URL pointing to a custom S3 implementation.

# REVERSE_PROXY
Specifies whether UCC Cyber Range is behind a reverse proxy or not. Set to True if using a reverse proxy like nginx.

See Flask documentation for full details.

::::tip
You can also specify a comma seperated set of numbers specifying the reverse proxy configuration settings. For example to configure x_for=1, x_proto=1, x_host=1, x_port=1, x_prefix=1 specify 1,1,1,1,1. By setting the value to True, UCC Cyber Range will default to the above behavior with all proxy settings set to 1.
::::

# TEMPLATES_AUTO_RELOAD
Specifies whether Flask should check for modifications to templates and reload them automatically.

SQLALCHEMY_TRACK_MODIFICATIONS
Automatically disabled to suppress warnings and save memory. You should only enable this if you need it.

# SWAGGER_UI
Enable the Swagger UI endpoint at /api/v1/

# UPDATE_CHECK
Specifies whether or not UCC Cyber Range will check whether or not there is a new version of UCC Cyber Range

# APPLICATION_ROOT
Specifies what path UCC Cyber Range is mounted under. It can be used to run UCC Cyber Range in a subdirectory. Example: /UCC Cyber Range

# SERVER_SENT_EVENTS
Specifies whether or not to enable to server-sent events based Notifications system.

# OAUTH_CLIENT_ID
OAUTH_CLIENT_SECRE