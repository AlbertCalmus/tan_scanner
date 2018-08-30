const express = require('express')
const axios = require('axios')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/times', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  axios.get('http://open.tan.fr/ewp/tempsattente.json/SNIC')
  .then(response => {
    res.send(response.data)
  })
  .catch(error => {
    res.send(error)
  });
})

app.listen(3000, function () {
  console.log('Running on 3000!')
})