const router = require('express').Router()
const db = require('../models')

// get all saved books
router.get('/api/books', (req, res) => {
  console.log('get books')
})

// save a book to the database
router.post('/api/books', (req, res) => {
  console.log(req.body)
  db.Book.create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
})

// delete a book from the database
router.delete('/api/books/:id', (req, res) => {
  console.log('delete books')
})

module.exports = router