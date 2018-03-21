import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (){
    super();

    this.state = {
      bands:["Pink Floyd","The Who", "The Clash", "Rolling Stones", "The Beatles"]
    }
  }


  render() {
    let ListOfBands = this.state.bands.map((e,i)=>{
      return (
      <h1 key={i}>{e}
      </h1>)
    })




    return (
      <div className="App">
      {ListOfBands}
    
      </div>
    );
  }
}

export default App;
