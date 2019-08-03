import React from 'react'
import { Link } from 'react-router-dom'
import API from '../utils/API'
import Results from '../components/Results'

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
    console.log('book: ')
    console.log(book)
  }


  render() {
    return (
      <div>
        <h1>Search Page</h1>
        <Link to="/saved">Saved Books</Link>


        {/* generic search */}
        <form onSubmit={this.handleSubmit}>
          Find a book: 
          <input 
            type="text" 
            value={this.state.searchTerm}
            name="searchTerm"
            onChange={this.handleInputChange}
          />
          <button type="submit">Search</button>
        </form>


        {/* display search results */}
        {
          this.state.bookResults.length ? (
            this.state.bookResults.map(book => {
              return (
                // <div key={book.link}>
                //   <h2>{book.title}</h2>
                //   <img src={book.image} width="10%" height="auto" alt="book" />
                //   <h3>{book.author}</h3>
                //   <p>{book.description}</p>
                //   <a href={book.link} target="_blank">More info</a>
                //   <button onClick={this.saveBook}>Save</button>
                // </div>

                <Results 
                  key={book.link}
                  book={book} 
                  saveBook={() => this.saveBook(book)}
                />

                // <Results 
                //   key={book.link}
                //   title={book.title}
                //   image={book.image}
                //   author={book.author}
                //   description={book.description}
                //   link={book.link}
                //   saveBook={this.saveBook}
                // />
              )
            })
          ) : ''
        }

      </div>
    )
  }
}

export default Search