import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header'
import Login from './components/Login';
import Top from './components/Top';

function App() {
  return (
    <div className="App">
      <Header />
      <Top/>
      <Login/>
     
    </div>
  );
}

export default App;
