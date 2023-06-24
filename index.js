const express = require('express')
const app = express()


app.get('/hoho', function (req, res) {
  res.send('Hello World')
})

app.listen(3000, () => console.log`Example express js on port: 3000`);