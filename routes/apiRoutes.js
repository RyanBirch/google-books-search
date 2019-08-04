const router = require('express').Router()
// const db = require('../models')
const booksController = require('../controllers/booksController')

// // get all saved books
// router.get('/api/books', (req, res) => {
//   db.Book.find({})
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err))
// })

// // save a book to the database
// router.post('/api/books', (req, res) => {
//   db.Book.create(req.body)
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err))
// })

// // delete a book from the database
// router.delete('/api/books/:id', (req, res) => {
//   db.Book.deleteOne({ _id: req.params.id })
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err))
// })

router.route('/api/books')
  .get(booksController.findAll)
  .post(booksController.create)

router.route('/api/books/:id')
  .delete(booksController.deleteOne)

module.exports = router