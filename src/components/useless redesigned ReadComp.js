import React, { Component } from 'react'
class ReadComp extends React.Component{
  render(){
    console.log("rCOMP :",this.props.list)
    const readingCompBooks=this.props.list.map((item)=>{
      return(
         
          <li key={item.id}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${item.imageLinks.thumbnail})` }}></div>
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
            <div className="book-title">{item.title}</div>
            <div className="book-authors">{item.authors}</div>
          </div>
        </li>
      )})

      return(
<ol className="books-grid">
                  {readingCompBooks}
                  </ol>
                 ) }}

                    export default ReadComp;