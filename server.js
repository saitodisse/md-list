const express = require('express')
const server = express()
const port = process.env.NODE_ENV === 'production' ? process.env.PORT : 3001
const bodyParser = require('body-parser')

server.use(bodyParser.json())

const items = []

server.get('/api/items', function (req, res) {
  res.send(items)
})

var failCount = 0
server.post('/api/items', function (req, res) {
  failCount++
  var shouldFail = false
  if (failCount === 3) {
    shouldFail = true
    failCount = 0
  }

  setTimeout(function () {
    if (shouldFail) {
      res.sendStatus(500)
    } else {
      const item = {
        id: String(items.length),
        title: req.body.title
      }
      items.unshift(item)
      res.send(item)
    }
  }, 1000)
})

server.listen(port, function () {
  console.log('Running server on port ' + port)
})
