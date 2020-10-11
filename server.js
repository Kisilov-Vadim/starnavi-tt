const express = require('express')
const path = require('path')
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express()
const port = 3001

app.use(express.static(path.join(__dirname, '/build')));
app.use(cors());
// create application/json parser
var jsonParser = bodyParser.json()

let settings = [
  { 
    value: 'easy',
    text: 'Easy',
    field: 4,
    delay: 1100
  },
  {
    value: 'medium',
    text: 'Medium',
    field: 5,
    delay: 900
  },
  {
    value: 'hard',
    text: 'Hard',
    field: 6,
    delay: 700
  },
  {
    value: 'super',
    text: 'Super Hard',
    field: 8,
    delay: 500
  },
]

let winners = []

app.get("/api/game-settings", (req, res) => {
  res.json(settings);
})

app.post("/api/winners", jsonParser, (req, res) => {
  if (req.body.length != 0) {
    winners.push(...req.body);
  }

  res.json(winners);
})

app.get("*", (req, res) => {
  res.sendfile('index.html');
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})