// 1. Import area

// 2. Function definition area

//  ES6 2015 Fat Arrow function
let C=(props)=>
{
  let name="Vishnu";
  console.log('Hi', props);
  return <span>C - {name} {props.children}</span>
}
// 3. Export area

// 3.1 default
export default C;
// 3.2 name export