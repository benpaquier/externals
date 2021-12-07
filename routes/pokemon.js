const express = require("express")
const app = express()
const axios = require("axios")

app.get('/:offset/:limit', (req, res) => {
  const { offset, limit } = req.params

  axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(response => res.json(response.data))
    .catch(error => res.status(error.response.status).send("Not found"))
})

app.get('/:id', (req, res) => {
  const { id } = req.params

  axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => res.json(response.data))
    .catch(error => res.status(error.response.status).send("Not found"))
})

module.exports = app