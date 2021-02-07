import React from 'react';
import logo from './logo.svg';
import { Component } from 'react'
import './App.css';
import List from './components/List';
import Footer from './components/Footer';
import Header from './components/Header';


class App extends Component {

  state = {
    addValue: '',
    list: ''
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <List></List>
        <Footer></Footer>
      </div>
    )
  }
}


export default App;
