import React from 'react'

function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      Find a book: 
      <input 
        type="text" 
        value={props.searchTerm}
        name="searchTerm"
        onChange={props.handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default Form