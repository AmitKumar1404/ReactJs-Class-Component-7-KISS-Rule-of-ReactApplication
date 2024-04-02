// Import area
import React from 'react';
import ReactDOM from 'react-dom/client';

// You can define a react component using 2 technique
// 1. Functional Component
function A(props) // We will receive a formal argument
{
  let name="Amit"; // Data is available within component
  let surname2 = "Singh";
  // Every function return something
  return <h1>A {name} {props.surname} - <B surname={surname2} /></h1>; // JSX
  // this 'surname' is coming from outside the component with the help of props we will receive it
}

// 2. Class Component
// class Child extends Parent { }
class B extends React.Component
{
    // 1. Properties/Variable
    name='Abhijeet';
    // 2. Constructor

    // 3. Methods
    render()
    {
      // Every function/method should return something
      // In order to access any member of a class you can have to use this.member
      // this.member
      return <span>B - {this.name} {this.props.surname} <C>Sharma</C> </span>
    }
}

//  ES6 2015 Fat Arrow function
let C=(props)=>
{
  let name="Vishnu";
  console.log('Hi', props);
  return <span>C - {name} {props.children}</span>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
let sn="Kumar";
root.render(<A surname={sn} />);

// 3. Export Area