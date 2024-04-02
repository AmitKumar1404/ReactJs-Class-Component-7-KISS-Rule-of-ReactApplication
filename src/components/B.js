// 1. Import Area
// 2. import someDefaultImport from someloccation/somelibrary
import C from './C';
import { Component } from "react";

// 2. Class definition Area
// 2. Class Component
// class Child extends Parent { }
export class B extends Component
{
    // 1. Properties/Variable
    name='Abhijeet';

    // 2. Constructor
    constructor()
    {
        super();
        this.address='Delhi'
    }
    // 3. Methods
    render()
    {
      // Every function/method should return something
      // In order to access any member of a class you can have to use this.member
      // this.member
      return <span>B - {this.name} {this.props.surname}  from {this.address} <C>Sharma</C> </span>
    }
}

// 3. Export Area