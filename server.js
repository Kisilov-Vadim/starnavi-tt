const express = require('express')
const path = require('path')
const cors = require('cors');
const app = express()
const port = 3001

app.use(express.static(path.join(__dirname, '/build')));
app.use(cors());

let settings = [
  {
    key: 1, 
    value: 'easy',
    text: 'Easy',
    square_per_line: 4,
  },
  {
    key: 2, 
    value: 'medium',
    text: 'Medium',
    square_per_line: 5,
  },
  {
    key: 3, 
    value: 'hard',
    text: 'Hard',
    square_per_line: 6,
  },
]

app.get("/api/game-settings", (req, res) => {
  res.json(settings);
})

app.get("*", (req, res) => {
  res.sendfile('index.html');
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})