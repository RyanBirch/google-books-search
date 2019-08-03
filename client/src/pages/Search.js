import React from 'react'
import { Link } from 'react-router-dom'
import API from '../utils/API'
import Results from '../components/Results'
import Form from '../components/Form'

class Search extends React.Component {

  state = {
    searchTerm: '',
    bookResults: ''
  }


  componentDidMount() {
    API.search('programming')
      .then(res => this.getResults(res))
  }


  handleInputChange = event => {
    let { name, value } = event.target
    this.setState({ [name]: value })
  }


  handleSubmit = event => {
    event.preventDefault()

    let searchTerm = this.state.searchTerm
    API.search(searchTerm)
      .then(res => this.getResults(res))
  }


  getResults = res => {
    let bookResults = res.data.items
    let books = []

    bookResults.forEach(item => {
      let book = {}
      // grab data from api
      book.title = item.volumeInfo.title
      book.author = item.volumeInfo.authors[0]
      book.description = item.volumeInfo.description
      book.image = item.volumeInfo.imageLinks.thumbnail
      book.link = item.volumeInfo.infoLink

      // add to book array
      books.push(book)
    })

    // update state with book results
    this.setState({ bookResults: books })
  }


  saveBook = book => {
    API.postBook(book)
      .then(res => console.log(res))
  }


  render() {
    return (
      <div>
        <h1>Search Page</h1>
        <Link to="/saved">Saved Books</Link>

        {/* generic search */}
        <Form 
          handleSubmit={this.handleSubmit}
          searchTerm={this.state.searchTerm}
          handleInputChange={this.handleInputChange}
        />

        {/* display search results */}
        {
          this.state.bookResults.length ? (
            this.state.bookResults.map(book => {
              return (
                <Results 
                  key={book.link}
                  book={book} 
                  handleClick={() => this.saveBook(book)}
                  action="Save"
                />
              )
            })
          ) : ''
        }

      </div>
    )
  }
}

export default Search