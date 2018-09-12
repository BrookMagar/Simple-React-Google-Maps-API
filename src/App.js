import React, { Component } from 'react';
import MapContainer from './screens/maps';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Google Map with React</h1>
      </header>
      <div>
      <MapContainer />
      </div>
      </div>
      );
    }
  }


export default App;
