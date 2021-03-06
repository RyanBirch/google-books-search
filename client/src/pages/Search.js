import React from 'react'
import API from '../utils/API'
import Results from '../components/Results'
import Form from '../components/Form'
import Navbar from '../components/Navbar'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class Search extends React.Component {

  state = {
    searchTerm: '',
    bookResults: '',
    page: 0
  }

  componentDidMount() {
    API.search('programming', this.state.page * 10)
      .then(res => this.getResults(res))
  }

  // show toast notification when a book is saved
  notify = (title) => {
    toast.info(`${title} Added!`, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 3000
    })
  }


  handleInputChange = event => {
    let { name, value } = event.target
    this.setState({ [name]: value })
  }


  handleSubmit = event => {
    event.preventDefault()

    this.setState({ page: 0 }, () => {
      let searchTerm = this.state.searchTerm
      API.search(searchTerm, this.state.page * 10)
        .then(res => this.getResults(res))
    })
  }


  getResults = res => {
    let bookResults = res.data.items
    let books = []

    bookResults.forEach(item => {
      let book = {}
      // grab data from api
      if (item.volumeInfo.title && item.volumeInfo.authors && item.volumeInfo.description && item.volumeInfo.imageLinks.thumbnail && item.volumeInfo.infoLink) {
        book.title = item.volumeInfo.title 
        book.author = item.volumeInfo.authors[0]
        book.description = item.volumeInfo.description
        book.image = item.volumeInfo.imageLinks.thumbnail
        book.link = item.volumeInfo.infoLink

        // add to book array
        books.push(book)
      } 
    })

    // update state with book results
    this.setState({ bookResults: books })
  }


  saveBook = book => {
    API.postBook(book)
      .then(res => {
        this.notify(book.title)
      })
  }


  changePage = event => {
    if (event.target.textContent === 'Next Page') {
      this.setState({ page: this.state.page + 1 }, () => {
        API.search(this.state.searchTerm, this.state.page * 10)
        .then(res => this.getResults(res))
      })
    } else {
      this.setState({ page: this.state.page - 1 }, () => {
        API.search(this.state.searchTerm, this.state.page * 10)
        .then(res => this.getResults(res))
      })
    }
  }


  render() {
    return (
      <div>
        <Navbar 
          link="/saved" 
          linkName="Saved Books" 
        />

        <ToastContainer />  

        <div className="text-center mb-5">
          <h1>Search Page</h1>
  
          {/* search */}
          <Form 
            handleSubmit={this.handleSubmit}
            searchTerm={this.state.searchTerm}
            handleInputChange={this.handleInputChange}
          />
        </div>

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

        <div className="row">
          <div className="col-6 text-right">
            {this.state.page ? <a href="#"><button onClick={this.changePage} className="btn btn-info">Prev Page</button></a> : ''}
          </div>
          <div className="col-6">
            {this.state.searchTerm ? <a href="#"><button onClick={this.changePage} className="btn btn-info">Next Page</button></a> : ''}
          </div>
        </div>
      </div>
    )
  }
}

export default Search