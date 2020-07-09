import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header'
import Login from './components/Login';
import Top from './components/Top';
import Products from './components/Product'
function App() {
  return (
    <div className="App">
      <Header />
      <Top/>
      <div>
         <h1 style={{color:'#D7D7D7'}}>  Products</h1>
      </div>
       <Products/>
     {/* <Login/> */}
     
    </div>
  );
}

export default App;
