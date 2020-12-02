# Calculator

This is the repository that will hold your files for the calculator challenge.

During this challenge you will:
1. Fork this repo
2. Make changes on your own copy
3. Work through the [Calculator - Challenge](https://github.com/dev-academy-foundations/foundations/blob/master/sprints/sprint-5/stretch-calculator.md) instructions.
4. Enjoy calculating!


Pseudocode

1) Add some simple HTML to make up the buttons on the calulator, each button should have an id for targeting later
   - The result can be an input, disable the input; you'll target this to return the value into. Maybe call it answer
2) Initialize an empty array variable and a variable to store the mathematical answer in
3) Target the calculator buttons with a click function
4) Write some if statements, start with a validator that checks for NaN and check if it's a decimal point
5) if AC is clicked, Set variables back to zero 
6) if CE is clicked, return an empty strying for the calculator - maybe write an empty string with a space to the array to separate and use reduce later? same with below.
7) if x is clicked, write * to the array
8) if divide is clicked, write / to the array
9) if + is clicked, write + to the array - strings?
10) if - is clicked, write - to the array
11) do the same with the numbers, push each number to the array
12) when = is pushed, do the mathematical equation with the array, return the answer to the targeted input, set all values back to zero aside from answer

