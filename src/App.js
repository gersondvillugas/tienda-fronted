import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header'
import Login from './components/Login';
import Top from './components/Top';
import Products from './components/Product'
import Productdetail from './components/Productdetails'
import {BrowserRouter as Router,Route} from 'react-router-dom'

function App() {


  return (
 
 
  <Router>
         <Header />
         <Top/>
  
       <div className="container p-4">
        {/* <Route exact  path="/" component={NoteList}/>
        <Route exact path="/edit/:id" component={CreateNote}/> */}
        <Route exact path="/products" component={Products}/>
        <Route exact path="/products/:id" component={Productdetail}/>
       </div>

    </Router> 
    
  );
}

export default App;
