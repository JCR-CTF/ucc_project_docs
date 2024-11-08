## Admin Roles
#Admin
Admins have full ability to modify all aspects of CTFd through the Admin Panel.

Admins have the following permissions:

MANAGE_USERS
MANAGE_CHALLENGES
MANAGE_SUBMISSIONS
MANAGE_PAGES
MANAGE_NOTIFICATIONS
MANAGE_CONFIGURATION
MANAGE_COMMENTS

#Moderator

Moderators are users who can modify most aspects of CTFd with the exception of the configuration of CTFd.

Moderators have the following permissions:

MANAGE_USERS
MANAGE_CHALLENGES
MANAGE_SUBMISSIONS
MANAGE_PAGES
MANAGE_NOTIFICATIONS
MANAGE_COMMENTS

#Judge

Judges are admins who are intended to be in charge of users and challenges. They cannot make modifications to page content or notifications but they can manage challenges, users, and teams.

Judges have the following permissions:

MANAGE_STATISTICS
MANAGE_USERS
MANAGE_CHALLENGES
MANAGE_SUBMISSIONS

#Editor
Editors are admins who are intended to manage the copy and content of CTFd. They are only able to modify page content and issue notifications.

Editors have the following permissions:

MANAGE_STATISTICS
MANAGE_PAGES
MANAGE_NOTIFICATIONS

#Analyst
Analysts are a read-only user account. They should not be able to edit any content in the Admin Panel but should be able to view data like statistics.

Analysts have the following permissions:

MANAGE_STATISTICS