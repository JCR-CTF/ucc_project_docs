# Flags

In most CTFs, the objective is to extract a flag value from a challenge. Often by exploiting some kind of security vulnerability or by knowing some property of computers. Flags are sort of the proof that you accomplished the task.

In order for a user to receive points for a challenge, they must submit the corresponding flag. Ucc Cyber Range allows admins to create different types of flags for each challenge.

# Static Flag
Static flags are simple, users must submit exactly the value of the flag in order to receive points.

# Regex Flag
Regex flags allow admins to define regular expressions to match flags. Regular expressoins allow challenges to accept multiple flag values as correct as long as it can be represented in a regular expression.

> **tip**  
> 💡To test your regular expressions we recommend using the [Pythex](https://pythex.org/) website.

# Programmable Flag
caution
Programmable flags are only available on Hosted or Enterprise Ucc Cyber Range instances

Programmable keys allow you to use Python code to check user submissions when static or regex flags are not flexible enough.

A check function is a Python function taking a single argument. The argument provided will be the user's input. The function should then return a Boolean indicating whether the user was correct or not.

Example:

 ```yml
 def check(x):
    if x == "flag{this_is_the_answer}":
        return True
    else:
        return False.