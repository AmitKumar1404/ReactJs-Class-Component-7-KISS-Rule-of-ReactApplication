// Import area
import React from 'react';
import ReactDOM from 'react-dom/client';

// 1. import { someNamedImport } from somelocation/somelibrary
import { B } from './components/B';


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





const root = ReactDOM.createRoot(document.getElementById('root'));
let sn="Kumar";
root.render(<A surname={sn} />);

// 3. Export Area