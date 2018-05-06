import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {
  render() {
    return (
      <div>Book Detail!</div>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail)
