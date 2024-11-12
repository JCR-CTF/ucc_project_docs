# Teams

UCC Cyber Range, when configured in Team Mode, requires all participants to be a member of a team before accessing CTF challenges.

## Team Creation Process

1. A team captain creates the team
2. Team captain shares the team name and password with members
3. Team members join using the provided team credentials

## Properties

### Basic Properties
* **User Name**: The team's name identifier
* **Email**: The team's email address (not currently used)
* **Password**: The team password for joining the team
* **Website**: Optional website that the team captain may set in profile
* **Affiliation**: Optional affiliation that the team captain may set in profile
* **Country**: Optional country that the team captain may set in profile

### Admin-Only Properties
These properties can only be edited by an admin in the Admin Panel:

* **Hidden**: Hidden teams:
 * Do not appear in the scoreboard
 * Are not visible on any public interface
 * Their solves are not shown in solve counts
 * Scores are not counted in statistics
 * Profiles cannot be directly browsed to

* **Banned**: Banned teams:
 * Cannot access the site in any capacity
 * Receive an error page stating they were banned
 * Note: Ban is account-level only, not IP or hardware based