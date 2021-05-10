import React, { Component } from 'react'
import SearchResult from './SearchResult'
import '../App.css'
import * as BooksAPI from '../BooksAPI'
import {Link} from 'react-router-dom'
import BookComp from './BookComp'
class SearchComp extends React.Component{
    state={items:[
        {bookId:'1', bookTitle:'JS Guide', bookAuthors:'Ahmed Nabil', status:'none'},
        {bookId:'2', bookTitle:'C# Guide', bookAuthors:'Omar Nabil', status:'none'},
        {bookId:'3', bookTitle:'React Guide', bookAuthors:'Mayar Nabil', status:'none'}
      ],
    searchQuery:"",
    searchResult:[]
    }
      handleChange=async (e)=>{
        try{
        this.setState({searchQuery:e.target.value})
       const searchResult= await BooksAPI.search(e.target.value)
        console.log(searchResult)
        //to handle notfound books 
        if(searchResult.error){

          console.log("No Books Found")
          
          this.setState({searchResult:[]})
        }
        else{
          console.log("Books Found")
          this.setState({searchResult})
        }

      }
      catch(error){console.log(error)}
    }
     // resultedItems=this.state.items
    render(){
   // function SearchComp(){
   // console.log(this.state.bookId)
        return(
            <div className="search-books">
            <div className="search-books-bar">
              {/* <button className="close-search" onClick={() => window.location.href='/'}>Close</button> */}
              <Link to="/" className="close-search" >Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" onChange={this.handleChange}/>

              </div>
            </div>


            <div className="search-books-results">
            <ol className="books-grid">
            {this.state.searchResult.map(book => <BookComp key={book.id} {...book} updateBook={this.props.updateBook} />)}
{/* <SearchResult resultedItems={this.state.items}/> */}
  </ol>
            </div>
          </div>
        

)}}
export default SearchComp
