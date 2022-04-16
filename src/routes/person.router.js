const express = require("express")
const routes = express.Router()
const personSchema = require('../models/personBillModel')

//http://localhost:3000/api/v1/people/person
routes.post('/person', (req, res) => {
  const person = personSchema(req.body)
  person.save()
  .then((data) => res.json(data))
  .catch((error) => res.json({message: error}))

})

//http://localhost:3000/api/v1/people/person
routes.get('/', (req, res) => {
  personSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

//http://localhost:3000/api/v1/people/personId
routes.get('/:personId', (req, res) => {
  const {personId } = req.params
  personSchema
    .findById(personId)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

//http://localhost:3000/api/v1/people/personId
routes.put('/:personId', (req, res) => {
  const { personId } = req.params
  const {name, lastName, age, address = { city, zip_code }} = req.body
  personSchema.updateOne(
    { _id: personId },
    {$set: { name, lastName, age, address }}
  )
  .then((data) => res.json(data))
  .catch((error) => res.json({message: error}))
})

//http://localhost:3000/api/v1/people/personId
routes.delete('/.personId', (req, res) => {
  const { personId } = req.params
  personSchema
  .remove({ _id: personId })
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }))
})

module.exports = routes

