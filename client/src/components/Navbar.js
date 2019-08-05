import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
    <nav className="navbar navbar-light bg-light fixed-top">
      <span className="navbar-brand mb-0 h1" style={{ fontSize: "2.5em" }}>Google Books Search</span>
      <Link to={props.link} style={{ fontSize: '1.75em', margin: '1em 4em' }}>{props.linkName}</Link>
    </nav>
  )
}

export default Navbar