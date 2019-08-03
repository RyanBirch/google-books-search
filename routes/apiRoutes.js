const router = require('express').Router()

// get all saved books
router.get('/api/books', (req, res) => {
  console.log('get books')
})

// save a book to the database
router.post('/api/books', (req, res) => {
  console.log('post books')
})

// delete a book from the database
router.delete('/api/books/:id', (req, res) => {
  console.log('delete books')
})

module.exports = router