import React, { Component } from 'react';
import { ObjectName } from './ObjectName'
import { LeftBrace } from './LeftBrace';
import { RightBrace } from './RightBrace';
import { AddFieldButton } from './AddFieldButton';
import { Field } from './Field';


export class Objex extends Component {
constructor(props) {
  super(props);
  this.buildObjex=this.buildObjex.bind(this)
  this.addObjexFields=this.addObjexFields.bind(this)
}

addObjexFields(objex) {
  let fields=[]
  for (var key in objex) {
    fields.push([key,objex[key],Object.prototype.toString.call(objex[key])])
  }

  return(
    <div>
    {fields.map((field) => (
      <Field key={field[0]} fieldName={field[0]} fieldData={field[1]} fieldType={field[2]}></Field>
    ))}
    </div>
  )
}

buildObjex(objex,name) {
    return (
        <div>
          <ObjectName name={name}></ObjectName>
          <LeftBrace></LeftBrace>
          <AddFieldButton setEvent={this.props.setEvent}></AddFieldButton>
          {this.addObjexFields(objex)}
          <RightBrace></RightBrace>
        </div>
    )

}


  render() {
    return (
      <div>
        {this.buildObjex(this.props.currentObject,this.props.objectName)}
      </div>
    );
  }
}
