import axios from 'axios'

export default {
  // search for a book
  search: function(searchTerm) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&orderBy=relevance&maxResults=10`)
  },

  postBook: function(book) {
    return axios.post('/api/books', book)
  }
}