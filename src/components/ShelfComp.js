import React, { Component } from 'react'
import { update } from '../BooksAPI'
import BookComp from './BookComp'
class ShelfComp extends React.Component{
 
    render(){
      return(
          <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.shelfName}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.list && this.props.list.map(book => <BookComp key={book.id} {...book} updateBook={this.props.updateBook} />)}
            {/* <BookComp shelfName={this.props.shelfName} list={this.props.list}/>*/}
            </ol>
            </div>
          </div>
      )
    }}
      
export default ShelfComp