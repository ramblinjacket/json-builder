import React, { Component } from 'react';
import { LeftBrace } from './LeftBrace';
import { RightBrace } from './RightBrace';
import { AddField } from './AddField';

export class Objex extends Component {
  render() {
    return (
      <div>
        <LeftBrace></LeftBrace>
        <AddField></AddField>
        <RightBrace></RightBrace>
      </div>
    );
  }
}
