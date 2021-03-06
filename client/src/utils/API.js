import axios from 'axios'

export default {
  // search for a book
  search: function(searchTerm, offset) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&orderBy=relevance&startIndex=${offset}&maxResults=10`)
  },

  postBook: function(book) {
    return axios.post('/api/books', book)
  }, 

  getAllBooks: function() {
    return axios.get('/api/books')
  },

  deleteBook: function(id) {
    return axios.delete('/api/books/' + id)
  }
}