import React from 'react'

function Results(props) {

  return (
      <div className="container">
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-3">
              <img src={props.book.image} width="100%" height="auto" className="card-img" alt="book" />
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <h5 className="card-title">{props.book.title}</h5>
                <h6>{props.book.author}</h6>
                <p className="card-text">{props.book.description}</p>
                <a href={props.book.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary m-2">More info</a>
                <button onClick={props.handleClick} className={props.action === "Save" ? "btn btn-success m-2" : "btn btn-danger m-2"}>{props.action}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Results