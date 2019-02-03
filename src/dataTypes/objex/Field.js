import React, { Component } from 'react';
import { StringField } from './StringField';
import { NumberField } from './NumberField';
import { BooleanField } from './BooleanField';
import { Objex } from './Objex';




export class Field extends Component {
  constructor(props) {
    super(props);
    this.buildField=this.buildField.bind(this)
  }

  buildField(fieldName, fieldData, fieldType) {
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
      case "[object Array]": //not right yet
        return(
          <BooleanField fieldName={fieldName} fieldData={fieldData}></BooleanField>
      )
      case "[object Object]":
          console.log(fieldName)
          return (
            <Objex currentObject={fieldData} objectName={fieldName}></Objex>
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
