import React, { Component } from 'react';

export class AddField extends Component {
	addField = () => {
		console.log("AddFieldClicked")
	}

  render() {
    return (
      <div>
        <button onClick={this.addField}>Add Field</button>
      </div>
    );
  }
}
