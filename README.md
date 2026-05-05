# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Andrew Lopez 

- GitHub Pages Link (Expose): https://andrew-lopez-27.github.io/Lab5_Starter/expose.html
- GitHub Pages Link (Explore): https://andrew-lopez-27.github.io/Lab5_Starter/explore.html

Check Your Understanding

1. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   - No, because testing for a message is too broad and vague for a unit test since a unit test involves making sure all the parts of the implemented systems work together in unison. Additionally testing for unit test is much safer because it lets you know what lines of code broke and at which line they broke at, while testing with messages doesn't tell you the bugs. 
2. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
   - Yes, because testing for specific lengths of strings are easy and usually a safer unit test because it can be either a true or false. Also, it is very easy to write a 79 character string for testing and checking if that length is 80 characters long.