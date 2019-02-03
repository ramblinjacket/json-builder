import React, { Component } from 'react';

export class Field extends Component {

  render() {
    return (
      <div>
        <p>"<span>{this.props.fieldName}</span>": <span>{this.props.fieldData}</span></p>
      </div>
    );
  }
}
