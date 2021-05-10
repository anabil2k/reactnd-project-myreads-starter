import React, { Component } from 'react'
import { update } from '../BooksAPI'
class BookComp extends React.Component{
   handleStatusChange=async e=>{
     try{
   
      e.persist()
      const shelf=e.target.value
      const book=this.props
    const result= await update(book,shelf)
    console.log("shelf name: ",e.target.value," ,book obj :",book,", result is:",result)
  }
  catch(error){
    console.log(error)
  }
  }
    render(){
      console.log(this.props.shelfName,this.props.list)
      const ShowingBooks=this.props.list.map((item)=>{
        return(
           
            <li key={item.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${item.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                  <select onChange={this.handleStatusChange}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{item.title}</div>
              <div className="book-authors">{item.authors}</div>
            </div>
          </li>
        )})

        return(
<ol className="books-grid">
                    {ShowingBooks}
                    </ol>
                   ) }}

                    export default BookComp;

                    /////////////////
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