import React,{Component} from 'react'
import SearchComp from './components/SearchComp'
import HomeComp from './components/HomeComp'
import WrongRouteComp from './components/WrongRouteComp'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <BrowserRouter>
      <div className="app">
        <Switch>
        <Route exact path="/" component={HomeComp} />
        <Route path="/search" component={SearchComp} />
        <Route path="/:dynamic" component={WrongRouteComp} />
        </Switch>
    
    {/*    {this.state.showSearchPage ? (
          <SearchComp />) : <HomeComp />} */}
      </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
