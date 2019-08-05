import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
    <nav className="navbar navbar-light bg-light fixed-top">
      <span className="navbar-brand mb-0 h1" style={{ fontSize: "2em" }}>Google Books Search</span>
      <Link to={props.link} style={{ fontSize: '1.75em', margin: '0.5em 4em', textDecoration: 'none' }}>{props.linkName}</Link>
    </nav>
  )
}

export default Navbar