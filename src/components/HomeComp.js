import React, { Component } from 'react'
import CurrentlyReadingComp from './CurrentlyReadingComp'
import WantToReadComp from './WantToReadComp'
import ReadComp from './ReadComp'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'

class HomeComp extends React.Component{
  state={
list:[],
currentlyReadingList:[],
wantToReadList:[],
readList:[]

  }
  async componentDidMount(){
    try{
      const books=await BooksAPI.getAll()
      const currentlyReadingBooks=books.filter((item) => item.shelf ==="currentlyReading")
const wantToReadBooks=books.filter((item) => item.shelf=="wantToRead")
    const readBooks=books.filter((item) => item.shelf=="read")
    this.setState({list:books})
    this.setState({currentlyReadingList:currentlyReadingBooks})
    this.setState({wantToReadList:wantToReadBooks})
    this.setState({readList:readBooks})
console.log(books,currentlyReadingBooks,wantToReadBooks,readBooks)
    }
    catch(error){
      console.log(error)
    }
  }
  /*componentDidMount(){
  
     const books=BooksAPI.getAll()
     this.setState({allBooks:books})
    //const currentlyReadingBooks=Object.values(books).filter((item) => item.shelf ==="currentlyReading")
    //console.log(currentlyReadingBooks) 

console.log(books)
    //const currentlyReadingBooks=allBooks.filter((item) => item.shelf ="currentlyReading")
    //const wantToReadBooks=allBooks.filter((book) => book.shelf=="wantToRead")
    //const readBooks=allBooks.filter((book) => book.shelf=="read")
    const currentlyReadingBooks=books.filter(item => item.length>4)
    console.log(currentlyReadingBooks)

    console.log(this.state.allBooks)
  }*/
  
  
    render(){
      console.log(this.state.list,this.state.currentlyReadingList,this.state.wantToReadList,this.state.readList)
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
              <CurrentlyReadingComp list={this.state.currentlyReadingList}/>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <WantToReadComp list={this.state.wantToReadList}/>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ReadComp list={this.state.readList}/>
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