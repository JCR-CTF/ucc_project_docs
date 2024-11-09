# Scoring

coring is central to any CTF. UCC automatically generates a scoreboard that automatically resolves ties and supports score freezing. UCC supports two ways to alter the score of a player or team, Solves and Awards.

# Solves
Solves are what mark a challenge as solved. Solves do not carry a value and defer to the value of their respective Challenge.

# Awards
Awards have a value defined by their creator (usually an admin). They can be used to give a user/team arbitrary (positive or negative) points. This will either increase or decrease their scores.

Users can gain solves by correctly solving challenges. Admins can manually award points to users by following the instructions in this tutorial.

# Tie Breaks
In UCC, tie breaks are essentially resolved by time. If two teams have the same score, the team with the lower solve ID in the database will be considered on top. For example Team X and Team Y solve the same challenge five minutes apart and both now have 100 points.

Team X will have a Solve ID of 1 for their submission and Team Y will have a Solve ID of 2 for their submission.

Thus Team X will be considered the tie winner.

## Formats

# MajorLeagueCyber
MajorLeagueCyber (MLC) is a cyber security event tracker designed and maintained by the developers of UCC. It provides polling of the UCC API and can record and aggregate scores between competitions/events. It supports parsing and processing of UCC's built in scoreboard API format.

To register your event with MLC:

Register an account at https://www.majorleaguecyber.org/ if you don't already have one.
Create a new event.
Edit the event and add the API Scoreboard URL under the Integrations section. For UCC you should enter https://[UCC Instance URL]/api/v1/scoreboard
Access the JSON scoreboard API from MajorLeagueCyber by going to https://www.majorleaguecyber.org/events/[EVENT_ID]/[EVENT_NAME]/scoreboard.json

# CTFTime
In prior versions UCC supported a CTFTime compatible scoreboard. This is no longer directly supported because the CTFTime scoreboard format is inherently limiting. However, MLC allows for the polling of any JSON scoreboard API and can translate to the CTFTime scoreboard format.

After registering your event on MLC you can access the legacy scoreboard format by going to https://www.majorleaguecyber.org/events/[EVENT_ID]/[EVENT_NAME]/scoreboard.json?format=legacy.