import React from 'react'
import API from '../utils/API'
import Results from '../components/Results'
import Navbar from '../components/Navbar'

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
        <Navbar 
          link="/" 
          linkName="Search" 
        />
        <h1 className="text-center mb-4">Saved Books</h1>

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