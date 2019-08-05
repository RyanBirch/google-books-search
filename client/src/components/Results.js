import React from 'react'

function Results(props) {
  return (
    // <div>
    //   <h2>{props.book.title}</h2>
    //   <img src={props.book.image} width="10%" height="auto" alt="book" />
    //   <h3>{props.book.author}</h3>
    //   <p>{props.book.description}</p>
    //   <a href={props.book.link} target="_blank">More info</a>
    //   <button onClick={props.handleClick}>{props.action}</button>
    // </div>

      <div className="container">
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-3">
              <img src={props.book.image} width="50%" height="350em" className="card-img" alt="book" />
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <h5 className="card-title">{props.book.title}</h5>
                <h6>{props.book.author}</h6>
                <p className="card-text">{props.book.description}</p>
                <a href={props.book.link} target="_blank" className="btn btn-primary m-2">More info</a>
                <button onClick={props.handleClick} className="btn btn-success m-2">{props.action}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Results