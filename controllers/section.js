/**
*   Section Controller
*
*   @author Terry Woosley
*/

const express = require('express')
const api = express.Router()
const model = require('../models/section.js')
const find = require('lodash.find')
const notfoundstring = 'Could not find section with id: '

// RESPOND WITH JSON DATA  --------------------------------------------

// GET all JSON
api.get('/findall', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const data = req.app.locals.section.query
  res.send(JSON.stringify(data))
})

// GET one JSON by ID
api.get('/findone/:id', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const id = parseInt(req.params.id)
  const data = req.app.locals.section.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring + id) }
  res.send(JSON.stringify(item))
})

// RESPOND WITH VIEWS  --------------------------------------------

// GET to this controller base URI (the default)
api.get('/', (req, res) => {

})

// GET create
api.get('/create', (req, res) => {

})

// GET /delete/:id
api.get('/delete/:id', (req, res) => {

})

// GET /details/:id
api.get('/details/:id', (req, res) => {

})

// GET one
api.get('/edit/:id', (req, res) => {

})

// HANDLE EXECUTE DATA MODIFICATION REQUESTS --------------------------------------------

// POST new
api.post('/save', (req, res) => {

})

// POST update with id
api.post('/save/:id', (req, res) => {

})

// DELETE id (uses HTML5 form method POST)
api.post('/delete/:id', (req, res) => {

})

module.exports = api