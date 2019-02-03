import React, { Component } from 'react';

export class BooleanField extends Component {

  render() {
    return (
      <div>
        <p>"<span>{this.props.fieldName}</span>": <span>{this.props.fieldData.toString()}</span></p>
      </div>
    );
  }
}
