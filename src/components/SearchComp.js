import React, { Component } from 'react'
import SearchResult from './SearchResult'
import '../App.css'
import * as BooksAPI from '../BooksAPI'
import {Link} from 'react-router-dom'
class SearchComp extends React.Component{
    state={items:[
        {bookId:'1', bookTitle:'JS Guide', bookAuthors:'Ahmed Nabil', status:'none'},
        {bookId:'2', bookTitle:'C# Guide', bookAuthors:'Omar Nabil', status:'none'},
        {bookId:'3', bookTitle:'React Guide', bookAuthors:'Mayar Nabil', status:'none'}
      ]}
      handleChange=async (e)=>{
       const searchResult= await BooksAPI.search(e.target.value)
        console.log(searchResult)

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
           
              
<SearchResult resultedItems={this.state.items}/>
  
            </div>
          </div>
        

)}}
export default SearchComp
