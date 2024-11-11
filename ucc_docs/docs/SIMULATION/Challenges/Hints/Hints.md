# Hints

Ucc Cyber Range allows admins to create hints which can be unlocked by users.

Hints can either be free or have an associated cost with them. Users that unlock paid hints receive a drop in their score equal to the cost of the hint. For example, if a challenge has a hint that costs 50 points, a user must have at least a score of 50 to unlock the hint. More concretely, if a user has 300 points, then unlocks a hint that costs 50 points, the user will then have a score of 250.

If a user does not have enough points to unlock a hint, they will be unable to unlock a hint. A user is unable to lower their score beyond zero to unlock a hint. Because of this one recommended approach to having paid hints is to create an intial "gimme" challenge that will give the user some free points to then subsequently unlock hints in later challenges.

:::caution
Keep in mind that in many online CTFs, users can create unlimited accounts. So having paid hints may not be a reliable mechanism for point deduction as users may create throwaway accounts to unlock hints and then use the hint knowledge on their "main" account.
:::