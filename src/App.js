import React, { Component } from 'react';
import { Objex } from './dataTypes/objex/Objex';

class App extends Component {
  constructor(props) {
    super(props);
    this.setObject=this.setObject.bind(this)
  }

  setObject(currentObject) {
    this.setState({currentObject: currentObject});
  }

  buildUI() {
    return (<Objex setObject={this.setObject}></Objex>)
  }

  render() {
    return (
      <div>
        {this.buildUI()}
      </div>
    );
  }
}

export default App;
