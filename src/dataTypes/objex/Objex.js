import React, { Component } from 'react';
import { LeftBrace } from './LeftBrace';
import { RightBrace } from './RightBrace';
import { AddFieldButton } from './AddFieldButton';

export class Objex extends Component {
constructor(props) {
  super(props);
  this.buildObjex=this.buildObjex.bind(this)
  this.addObjexFields=this.addObjexFields.bind(this)
}

addObjexFields(objex) {
  for (var key in objex) {
    return(
      <div>
        <p>"<span>{key}</span>"</p>
      </div>
    )
    // console.log("Key: " + key);
    // console.log("Value: " + objex[key]);
    // console.log(typeof objex[key])
    // console.log(Object.prototype.toString.call(objex[key]))
  }
}

buildObjex(objex) {
  return (
      <div>
        <LeftBrace></LeftBrace>
        {this.addObjexFields(objex)}
        <AddFieldButton setEvent={this.props.setEvent}></AddFieldButton>
        <RightBrace></RightBrace>
      </div>
  )
}


  render() {
    return (
      <div>
        {this.buildObjex(this.props.currentObject)}
      </div>
    );
  }
}
