import React, { Component } from 'react';
import { StringField } from './StringField';
import { NumberField } from './NumberField';
import { BooleanField } from './BooleanField';



export class Field extends Component {
  constructor(props) {
    super(props);
    this.buildField=this.buildField.bind(this)
  }

  buildField(fieldName, fieldData, fieldType) {
    console.log(fieldType)
    console.log(fieldData)

    switch(fieldType) {
      case "[object String]":
        return(
          <StringField fieldName={fieldName} fieldData={fieldData}></StringField>
        )
      case "[object Number]":
        return(
          <NumberField fieldName={fieldName} fieldData={fieldData}></NumberField>
        )
      case "[object Boolean]":
        return(
          <BooleanField fieldName={fieldName} fieldData={fieldData}></BooleanField>
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
