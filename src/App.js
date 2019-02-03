import React, { Component } from 'react';
import { Objex } from './dataTypes/objex/Objex';

class App extends Component {
  constructor(props) {
    super(props);
    this.setEvent=this.setEvent.bind(this)
  }

  componentWillMount() {
    // this.setState({
    //   currentObject: {
    //     "string": "potato",
    //     "number": 1,
    //     "boolean": true,
    //     "List": ["potato", 1, true, ["potato", 1, true], {"string": "potato", "number": 1, "boolean": true}],
    //     "Object": {"string": "potato", "number": 1, "boolean": true}
    //   }
    // })
    // this.setState({
    //   currentObject: {
    //   }
    // })
    this.setState({
      currentObject: {
        "string": "potato",
        "number": 1,
        }
    })
  }

  setEvent(event) {
    this.setState({currentEvent: event});
  }

  render() {
    return (
      <div>
       <Objex setEvent={this.setEvent} currentObject={this.state.currentObject}></Objex>
      </div>
    );
  }
}

export default App;
