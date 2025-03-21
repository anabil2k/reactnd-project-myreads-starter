import React, { Component } from 'react'

class SearchResult extends React.Component{
 
    render(){
        console.log(this.props.resultedItems)
        const receivedResult=this.props.resultedItems.map((item)=>{
        return(
            <li key={item.bookId}>
<div className="book">
  <div className="book-top">
    <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")' }}></div>
    <div className="book-shelf-changer">
      <select>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  </div>
  <div className="book-title">{item.bookTitle}</div>
  <div className="book-authors">{item.bookAuthors}</div>
</div>
</li>


        )

    }

        )
        
        return(
            <ol className="books-grid">
{receivedResult}
</ol>
        )}}

        export default SearchResult