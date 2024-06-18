import React, {useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function UseRef() {

    const [count, setCount] = useState(0)

    const count2 = useRef(0)
    // const count = {current: 0}

    const [inputValue, setInputValue] = useState("")

    const inputText = useRef(0);

    const changeColor = () => {
        inputText.current.style.color = "red";
    }

    useEffect(() => {
    //  setCount(count => count + 1);

       count2.current = count2.current + 1;
    },[count]);

    return (
        <div>
            <h3>useRef Hook</h3><br />
            <p>Counter</p>
            <p>Using State {count}</p>

            <input ref={inputText}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} />

            <br /> <br />


            <button onClick={changeColor}>Change Color</button> 
            <br /><br />

            
            <button onClick={() => setCount(count + 1)}>Counter Increment</button>

         
            <p>Using useRef {count2.current}</p>
            <br />



            <PreviousValueComponent value={count} />

        </div>
    )
}

export default UseRef

const PreviousValueComponent = ({ value }) => {
    const valuesOF = useRef();
    
    useEffect(() => {
        console.log(value);
        valuesOF.current = value;
    }, [value]);

    return (
        <div>
            <p>Current Value: {value}</p>
            <p>Previous Value: {valuesOF.current}</p>
        </div>
    );
};

//The useRef Hook allows you to persist values between renders
//store a mutable value that does not cause a re-render when updated.
//It can be used to access a DOM element directly.
// return on one value i.e current  [object]
// keep track of previous state values.

//------- Imp for Forward Ref  -------------------------------

// Ref is not forwarded by default: When you pass a ref as a prop to a child component, it does not automatically become a ref to the DOM element within that child component. Instead, it remains a prop and doesn't get attached to the DOM element.

// Use React.forwardRef: To forward refs to child components, React provides React.forwardRef, a special function that allows you to pass refs down to child components. This way, the ref can be attached to a DOM element within the child component.
 
// syntax 

// const ChildComponent = React.forwardRef((props, ref) => {
//     return <div ref={ref}>Child Component</div>;
//   });

// wrap all component inside forwardRed , if not want write props  the use props={props variable nameinside curly barcket }