const express = require("express")
const app = express()
const axios = require("axios")

const characters = require("../characters.json")

app.get('/json', (req, res) => {
  res.json(characters)
})

app.get('/url', (req, res) => {
  axios.get('https://thronesapi.com/api/v2/Characters')
    .then(response => res.json(response.data))
    .catch(error => res.status(error.response.status).send("Not found"))
})

module.exports = app