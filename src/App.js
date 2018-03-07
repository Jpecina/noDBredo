import React, { Component } from 'react';
import MainPage from './Components/MainPage/MainPage';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <MainPage/>
      </div>
    );
  }
}

export default App;
