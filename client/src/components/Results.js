import React from 'react'

function Results(props) {
  return (
    <div>
      <h2>{props.book.title}</h2>
      <img src={props.book.image} width="10%" height="auto" alt="book" />
      <h3>{props.book.author}</h3>
      <p>{props.book.description}</p>
      <a href={props.book.link} target="_blank">More info</a>
      <button onClick={props.saveBook}>Save</button>
    </div>
  )
}

export default Results