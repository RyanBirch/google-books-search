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

    // <form onSubmit={this.handleSubmit}>
    //   Find a book: 
    //   <input 
    //     type="text" 
    //     value={this.state.searchTerm}
    //     name="searchTerm"
    //     onChange={this.handleInputChange}
    //   />
    //   <button type="submit">Search</button>
    // </form>
  )
}

export default Form