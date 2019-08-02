import React from 'react'
import { Link } from 'react-router-dom'

class Search extends React.Component {
  render() {
    return (
      <div>
        <h1>Search Page</h1>
        <Link to="/saved">Saved Books</Link>
      </div>
    )
  }
}

export default Search