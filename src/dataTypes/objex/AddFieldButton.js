import React, { Component } from 'react';

export class AddFieldButton extends Component {
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
