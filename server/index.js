const express = require('express')
const app = express()
const path = require('path')
const templates = require('./data/templates.json')

app.get("/api/templates", (req, res) => {
    res.json(templates)
})

app.listen(4500, () => { console.log("Server started on 4500 port") })