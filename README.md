####COUNTDOWN - Numbers Game

####[Play it here!](file:///Users/ajaylard/development/wdi-project-1/home.html)

####Rules

1. Start by picking your numbers. Click 'SMALL' for a small number and 'BIG' for a big number until all 6 tiles are filled.

2. Click the 'TARGET' button to display a random target number.

3. From then you have 30 seconds to get as close as possible to the target by using just the four basic arithmetic operators:	
'+ - × ÷'

4. No fractional or negative numbers can be
employed.

5. There is no requirement to use all 6 of the tiled numbers.

6. Each numbered tile can only be used once in the calculation.



####Approach / How it works

The key areas of the game are:

Javasrcipt behind the game's core logic, consisting of the following:

1. Generating a random number as the 'Target'.

2. Identifying the 6 numbers that the player picks and pushing these into arrays. 
	
3. Handling the four operators '+ - × ÷' by creating functions to use them for two numbers. A key part of dealing with the operators is minimising the use of  division, as this causes numbers to become decimals. 

4.	Using the operator functions on the array of selected numbers.

Displaying elements (e.g. Main target number, 'Small' and 'Big' numbers etc.) when an event has occured relating to html elements (e.g. clicking a button). Basically everything functionally related to what teh player can see. This includes all the CSS elements.

####Build

* HTML 5, CSS javascript and some jQuery were used to create this game.
* The Google Web Fonts 'Hammersmith One' and 'Passion One' have been used to style the game.

#### Problems & Challenges

The main challenge I faced building this game, was getting the getting a solution for the target without crashing the page.

Then displaying the solution after teh timer has stopped. 