const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('<h1>Hello World form Home...</h1>')
})

app.get('/about', function (req, res) {
    res.send('<h1>Hello World form About Page...</h1>')
})

app.listen(3000, () => {
    console.log("The server is live on port 3000")
})