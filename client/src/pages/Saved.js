import React from 'react'
import { Link } from 'react-router-dom'
import API from '../utils/API'
import Results from '../components/Results'

class Saved extends React.Component {

  state = {
    books: ''
  }

  componentDidMount = () => {
    this.displayBooks()
  }

  displayBooks = () => {
    API.getAllBooks()
      .then(res => {
        this.setState({
          books: res.data
        }, () => console.log(this.state.books))
      })
  }

  handleDelete = id => {
    API.deleteBook(id)
      .then(res => this.displayBooks())
  }

  render() {
    return (
      <div>
        <h1>Saved Books</h1>
        <Link to="/">Search Page</Link>

        <div>
          {
            this.state.books.length ? (
              this.state.books.map(book => {
                return (
                  <Results 
                    key={book._id}
                    book={book}
                    handleClick={() => this.handleDelete(book._id)}
                    action="Delete"
                  />
                )
              })
            ) : ''
          }
        </div>
      </div>
    )
  }
}

export default Saved