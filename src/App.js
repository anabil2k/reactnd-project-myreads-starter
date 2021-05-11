import React,{Component} from 'react'
import SearchComp from './components/SearchComp'
import HomeComp from './components/HomeComp'
import WrongRouteComp from './components/WrongRouteComp'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
 
  render() {
    return (
      //To select which component needs to be shown depending on the URL
      <BrowserRouter>
      <div className="app">
        <Switch>
        <Route exact path="/" component={HomeComp} />
        <Route path="/search" component={SearchComp} />
        {/* to handle wrong typed routes */}
        <Route path="/:dynamic" component={WrongRouteComp} />
        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
