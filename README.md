# Bus in car park simulator

- The application is a simulation of a robot operated bus moving in a carpark, of dimensions 5 units x 5 units.
- There are no other obstructions in the carpark.
- The bus is free to roam around the carpark, but must be prevented from exiting the
carpark. Any movement that would result in the bus leaving the carpark must be prevented, however further valid movement commands must still be allowed.

- The application is a simulation of a robot operated bus moving in a carpark, of dimensions 5 units x 5 units.
- There are no other obstructions in the carpark.
- The bus is free to roam around the carpark, but must be prevented from exiting the
carpark. Any movement that would result in the bus leaving the carpark must be prevented, however further valid movement commands must still be allowed.

The application should be able to read in any one of the following commands:
##### PLACE X,Y,F
##### MOVE
##### LEFT
##### RIGHT
##### REPORT
- PLACE will put the bus in the carpark in position X,Y and facing NORTH, SOUTH, EAST or WEST.
- The origin (0,0) can be considered to be the SOUTH WEST most corner.
- The first valid command to the bus is a PLACE command, after that, any sequence of
commands may be issued, in any order, including another PLACE command. The application should discard all commands in the sequence until a valid PLACE command has been executed.
- MOVE will move the bus one unit forward in the direction it is currently facing.
- LEFT and RIGHT will rotate the bus 90 degrees in the specified direction without
changing the position of the bus.
- REPORT will announce the X,Y and F of the bus. This can be in any form, but
standard output is sufficient.
- A bus that is not in the carpark should ignore the MOVE, LEFT, RIGHT and REPORT
commands.
- Input can be from a file, or from standard input, as the developer chooses.
- Provide test data to exercise the application.

Examples:  
a)
PLACE 0,0,NORTH
MOVE
REPORT 

**Output:** 0,1,NORTH  

b)  
PLACE 0,0,NORTH  
LEFT  
REPORT  

**Output:** 0,0,WEST

c)  
PLACE 1,2,EAST  
MOVE  
MOVE  
LEFT  
MOVE  
REPORT  

**Output:** 3,3,NORTH
---
## Getting started
### Tech Stack
This application is based on the following tools/libraries:
- UI Render: **React/Redux, SASS, Bootstrap**.

### Setup
1. Clone the project from Git Repo.
2. Have Node installed
3. Switch to top level folder.
4. Run `npm install` 


### Run
Run `npm run start`。
Have a look at http://localhost:3000 in your browser.
