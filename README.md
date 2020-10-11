# StarNavi: Game In Dots

### Gameplay of the game

- user set game difficulty and name
- press PLAY
- at a specified time interval (in the delay field) a random square on the field is highlighted in blue
- if the user managed to click on the square during this time - he turns green, the player gets a point and the field changes color to green
- if not, the field turns red and the point goes to the computer
- when a player or computer paints >50% of all possible squares in his color - he becomes the winner
- an inscription appears between the control buttons and the playing field that the player (the name he entered) / computer won
- result of the game send to server on this endpoint /winners in JSON with two fields winner and date both strings.
- results in table auto update

### Technologies

- React, Redux
- TypeScript
- Node
- Semantic-ui-react

### For Developers (console comands)

- "start": start react dev server,
- "build": build project,
- "server-dev": start server with detect changes online (nodemon),
- "server": start server