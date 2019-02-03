import React, { Component } from 'react';

export class ObjectName extends Component {
  constructor(props) {
    super(props);
    this.setObjectName=this.setObjectName.bind(this)
  }

  setObjectName(name) {
    if (name) {
      return (
        <p>{name}: </p>
      )
    }
  }
  render() {
    return (
      <div>
        {this.setObjectName(this.props.name)}
      </div>
    );
  }
}
