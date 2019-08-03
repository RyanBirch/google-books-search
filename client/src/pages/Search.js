import React from 'react'
import { Link } from 'react-router-dom'
import API from '../utils/API'

class Search extends React.Component {

  state = {
    searchTerm: '',
    bookResults: ''
  }

  handleInputChange = event => {
    let { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault()

    let searchTerm = this.state.searchTerm
    API.search(searchTerm)
      .then(res => {
        let bookResults = res.data.items
        console.log(bookResults)
        
      })
  }

  render() {
    return (
      <div>
        <h1>Search Page</h1>
        <Link to="/saved">Saved Books</Link>

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
      </div>
    )
  }
}

export default Search