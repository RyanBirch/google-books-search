import React from 'react'
import { Link } from 'react-router-dom'

class Saved extends React.Component {
  render() {
    return (
      <div>
        <h1>Saved Books</h1>
        <Link to="/">Search Page</Link>
      </div>
    )
  }
}

export default Saved