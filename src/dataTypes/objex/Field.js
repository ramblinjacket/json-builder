import React, { Component } from 'react';
import { StringField } from './StringField';
import { NumberField } from './NumberField';



export class Field extends Component {
  constructor(props) {
    super(props);
    this.buildField=this.buildField.bind(this)
  }

  buildField(fieldName, fieldData, fieldType) {
    console.log(fieldType)

    switch(fieldType) {
      case "[object String]":
        return(
          <StringField fieldName={fieldName} fieldData={fieldData}></StringField>
        )
      case "[object Number]":
        return(
          <NumberField fieldName={fieldName} fieldData={fieldData}></NumberField>
        )
      default:
      return(
        <p>"<span>{fieldName}</span>": <span>{fieldData}</span></p>
      )
    }

  }

  render() {
    return (
      <div>
        {this.buildField(this.props.fieldName,this.props.fieldData,this.props.fieldType)}
        
      </div>
    );
  }
}
