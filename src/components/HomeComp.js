import React, { Component } from 'react'
import CurrentlyReadingComp from './CurrentlyReadingComp'
import WantToReadComp from './WantToReadComp'
import ReadComp from './ReadComp'
import {Link} from 'react-router-dom'

class HomeComp extends React.Component{
    render(){
        return(
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <CurrentlyReadingComp />
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <WantToReadComp />
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ReadComp />
            </div>
          </div>
        </div>
      </div>
      <div className="open-search">
        <button onClick={() => window.location.href='/search'}>Add a book</button>
      </div>
    </div>
 )}}
  export default HomeComp