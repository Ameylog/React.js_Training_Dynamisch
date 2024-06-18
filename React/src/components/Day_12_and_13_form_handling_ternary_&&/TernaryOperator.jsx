import React, { useState } from 'react'

function TernaryOpetor() {

  // counter useState
  const [counter, setCounter] = useState(5)

  // marks useState => store marks taken from input prompt
  const [mark, setMark] = useState("")

  // Function increment  => increment counter value by 1 is min >=5 and  max<20
  const increment = () => (counter >= 5 && counter < 20) ? setCounter(counter + 1) : alert("maximum number reach");

  // Function decrement => decrease counter by 1 until not equal to5
  const decrement = () => (counter !== 5) ? setCounter(counter - 1) : alert("minimum number Reach");

  const age = 17;

  // Function  marks => 
  const marks = () => setMark(parseInt(prompt("Enter marks")));

  // conditionalExpression ? truthyValue : falsyValue
  return (

    <>
      <h3>Counter</h3>
      <div className='d-flex justify-content-center align-item-center mt-5'>

        <button onClick={increment} className='btn bg-success text-white px-3 py-2'>+</button> <br /><br />

        <p className='mx-3'>{counter}</p>
        <button onClick={decrement} className='btn bg-danger text-white px-3 py-2'>-</button>
      </div>
      <br />

      <h3>Age validate</h3>
      <p>Age:- {age}</p>

      {age >= 18
        ? <span className='bg-success text-white'>You are Eligible for vote</span>

        : <span className='bg-danger text-white text-white'>You are not Eligible for vote</span>
      }

      <br /><br />

      <h3>Nested Ternary</h3>

      <button onClick={marks}>Take input</button>
      <p>Marks:- {mark}</p>

      {
        (mark !== "")
          ? ((mark >= 70) ? "Excellent" : ((mark >= 50) ? "Average" : "Do better"))
          : ""
      }


    </>
  )
}

export default TernaryOpetor;

//* &&   Logical AND assignment
// let a = 1;
// let b = 0;

// a &&= 2;
// console.log(a);
// Expected output: 2


// 0, NaN, null, undefined, false   => falsy value
//* if  lefthand &&=righthand
//* lefthand => falsy  return lefthand value
//* lefthand => assign rightValue to lefthand variable

// let x = 6;
// let y = 3;
// (x < 10 && y > 1)  // return true

// Logical AND assignment short-circuits, meaning that x &&= y is equivalent to x && (x = y), except that the expression x is only evaluated once.

//* ??   nullish coalescing 
// const foo = null ?? 'default string';
// console.log(foo);
//  Expected output: "default string"

// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

//* || 
// let x = 0;
// x ||= 2;
// console.log(x); // Output will be 2

//* lefthand truthy  return lefthand value
//* lefthand falsy  return righthand value