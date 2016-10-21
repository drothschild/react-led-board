import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Flag from './Flag'
import ColorPicker from './ColorPicker'

class App extends Component {
  constructor(props) {
        super(props);
    const defaultColor= "blue"
    this.state = {
      color: defaultColor 
    }
  };

  updateColor(color) {
   this.setState ({
       color: color
      });
 };


  render() {
    const onChangeColor= this.updateColor.bind(this);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="Primary-flag">
          <Flag color={this.state.color} editable={true} />
        </div>
        <ColorPicker color={this.state.color} onChange={onChangeColor}/>

      </div>
    );
  }
}

export default App;
