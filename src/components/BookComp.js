import React, { Component } from 'react'
import { update } from '../BooksAPI'
class BookComp extends React.Component{
   handleStatusChange=async e=>{
     try{
   //e.preventDefault()
      e.persist()
      const shelf=e.target.value
      const book=this.props
    const result= await update(book,shelf)
    this.props.updateBook(book,shelf,result)
    console.log("shelf name: ",e.target.value," ,book obj :",book,", result is:",result)
  }
  catch(error){
    console.log(error)
  }
  }
    render(){
    //  console.log(this.props.shelfName,this.props.list)
    //  const ShowingBooks=this.props.list.map((item)=>{
        return(
           
            <li key={this.props.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                  <select onChange={this.handleStatusChange} value={this.props.shelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{this.props.title}</div>
              <div className="book-authors">{this.props.authors}</div>
            </div>
          </li>
        )}}

        

                    export default BookComp;