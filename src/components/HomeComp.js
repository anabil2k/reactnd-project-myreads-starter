import React, { Component } from 'react'
import CurrentlyReadingComp from './CurrentlyReadingComp'
import WantToReadComp from './WantToReadComp'
import ReadComp from './ReadComp'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import TitleComp from './TitleComp'
import ShelfComp from './ShelfComp'

class HomeComp extends React.Component{
  state={
list:[],
currentlyReadingList:[],
wantToReadList:[],
readList:[],
addBooks: list =>{
  const currentlyReadingBooks=list.filter((item) => item.shelf ==="currentlyReading")
  const wantToReadBooks=list.filter((item) => item.shelf==="wantToRead")
  const readBooks=list.filter((item) => item.shelf==="read")
 this.setState({list:list})
    this.setState({currentlyReadingList:currentlyReadingBooks})
    this.setState({wantToReadList:wantToReadBooks})
    this.setState({readList:readBooks})
// this.setState({list,currentlyReadingBooks,wantToReadBooks,readBooks})
}
,
updateBook:(book,newShelf,allShelves) =>{
console.log(newShelf)
const newBooks=this.state.list.map(allBooks =>{
  const foundID=allShelves[newShelf].find(
    bookID=>bookID === allBooks.id
  );
  if (foundID){allBooks.shelf=newShelf;}
  return allBooks;})
 // this.state.addBooks(newBooks)
 const currentlyReadingBooks=newBooks.filter((item) => item.shelf ==="currentlyReading")
  const wantToReadBooks=newBooks.filter((item) => item.shelf==="wantToRead")
  const readBooks=newBooks.filter((item) => item.shelf==="read")
 this.setState({list:newBooks})
    this.setState({currentlyReadingList:currentlyReadingBooks})
    this.setState({wantToReadList:wantToReadBooks})
    this.setState({readList:readBooks})

}}


  
  async componentDidMount(){
    try{
      const books=await BooksAPI.getAll()
      const currentlyReadingBooks=books.filter((item) => item.shelf ==="currentlyReading")
    const wantToReadBooks=books.filter((item) => item.shelf==="wantToRead")
    const readBooks=books.filter((item) => item.shelf==="read")
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
 <TitleComp title="MyReads" />
      <div className="list-books-content">
        <div>
          <ShelfComp shelfName="Currently Reading" list={this.state.currentlyReadingList} updateBook={this.state.updateBook}/>
          <ShelfComp shelfName="Want to Read" list={this.state.wantToReadList} updateBook={this.state.updateBook}/>
          <ShelfComp shelfName="Read" list={this.state.readList} updateBook={this.state.updateBook}/>
        </div>
      </div>
      <div className="open-search">
        {/* <button onClick={() => window.location.href='/search'}>Add a book</button> */}
        <Link to="/search" className="open-search">Add a Book</Link>
      </div>
    </div>
 )}}
  export default HomeComp