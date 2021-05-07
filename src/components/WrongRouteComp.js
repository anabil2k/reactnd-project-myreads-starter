import React, { Component } from 'react'
import {Link} from 'react-router-dom'

/*  class SearchComp extends React.Componenet{
    render()*/
    function WrongRouteComp(props){
        return(
            <div>
           <h2> 
               <p>Note: '/{props.match.params.dynamic}' is an invalid route</p>   
           </h2>
           <h3><p>Please click any of the following links to proceed: </p></h3>
           <ul>
               <li><Link exact to='/'>MyReads</Link></li>
               <li><Link to='/search'>Add Books</Link></li>
               
               </ul>
            </div>

        )}
        export default WrongRouteComp