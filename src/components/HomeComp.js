import React, { Component } from 'react'
//import CurrentlyReadingComp from './useless redesigned CurrentlyReadingComp'
//import WantToReadComp from './useless redesigned WantToReadComp'
//import ReadComp from './useless redesigned ReadComp'
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
// To update shelves by moving books between Shelves 
updateBook:(book,newShelf,allShelves) =>{
const newBooks=this.state.list.map(items =>{
  const foundID=allShelves[newShelf].find(
    bookID=>bookID === items.id
  )
  if (foundID){items.shelf=newShelf}
  return items})
 // Adding the new Books to their corresponding shelves
 const currentlyReadingBooks=newBooks.filter((item) => item.shelf ==="currentlyReading")
  const wantToReadBooks=newBooks.filter((item) => item.shelf==="wantToRead")
  const readBooks=newBooks.filter((item) => item.shelf==="read")
 this.setState({list:newBooks})
    this.setState({currentlyReadingList:currentlyReadingBooks})
    this.setState({wantToReadList:wantToReadBooks})
    this.setState({readList:readBooks})

}}


  //To ensure that every book would be in its correct shelf when opening the home page
 /* async componentDidMount(){
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

  }*/

  componentDidMount(){
    
     BooksAPI.getAll().then((books)=>{
     const currentlyReadingBooks=books.filter((item) => item.shelf ==="currentlyReading")
   const wantToReadBooks=books.filter((item) => item.shelf==="wantToRead")
   const readBooks=books.filter((item) => item.shelf==="read")
   this.setState({list:books})
   this.setState({currentlyReadingList:currentlyReadingBooks})
   this.setState({wantToReadList:wantToReadBooks})
   this.setState({readList:readBooks})
console.log(books,currentlyReadingBooks,wantToReadBooks,readBooks)
}
)

 }

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