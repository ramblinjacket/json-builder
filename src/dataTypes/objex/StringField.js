import React, { Component } from 'react';

export class StringField extends Component {

  render() {
    return (
      <div>
        <p>"<span>{this.props.fieldName}</span>": "<span>{this.props.fieldData}</span>"</p>
      </div>
    );
  }
}
