# Users

In UCCD, every participant must register for an account before being able to access the CTF challenges. Users can manually register by going to the Registration page if it's available, or admins can manually create users from the Admin Panel or the API.

# Types
There are two main types of users in UCCD.

# Admin
Admin users are the administrative users of UCCD and are allowed to access the Admin Panel. From the Admin Panel, admins are allowed to add/edit/delete challenges, add/edit/delete pages, modify configuration, add user accounts, edit user accounts etc. Admin users are also able to access sensitive API endpoints and also make changes for any user or team.

Organizers, challenge developers, and other important users should be made into Admin users so that they can help manage the running UCCD instance.

# User
A user is a regular UCCD user and only has access to the main site. That is, they are unable to access the Admin Panel or access sensitive API endpoints. They're also only able to make changes for their own user profile. Users who are captain of a team are also the only users that can edit their own team's profile.

Users may create their own accounts via the registration page.

# Properties
All users have a set of properties.

* User Name - The user's username identifier
* Email - The user's email address
* Password - The user's password for logging in
* Website - A website, if any, that the user may set in their profile
* Affiliation - An affiliation, if any, that the user may set in their profile
* Country - A country, if any, that the user may set in their profile
Some properties can only be directly editted by an admin in the Admin Panel:

* Verified - Verified users mean that they have confirmed their email address by clicking a link in their email address after registering. Most of the time users will be able to directly verify their email address through the email confirmation workflow. However, admins are able to manually mark users as verified.
* Hidden - Hidden users do not appear in the scoreboard and are not visible on any public interface. Their solves are not shown in solve counts, scores are not counted in statistics, and their profiles cannot be directly browsed to.
* Banned - Banned users cannot access the site in any capacity. Instead of the actual page, they receive an error page stating that they were banned. Keep in mind that banning is an account level ban. It is not an IP address or hardware based ban.