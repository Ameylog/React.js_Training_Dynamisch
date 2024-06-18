import React, { useState } from 'react';

function PropsDriling() {

    const [msg,setMsg]=useState("")

    function hello() {
        // console.log("This is hello Function");
        setMsg("This is hello Function");
    }

    return (
        <div>
            <h3>Props Driling</h3> <br />
            <p>{msg}</p>
            <Child1 hello={hello}><p>This is Child 1</p></Child1>
        </div>
    )
}

export default PropsDriling;

function Child1({ children, hello }) {

    return (
        <>
            {children}
            <Child2 hello={hello}><p>This is Child 2</p></Child2>
        </>
    )
}

function Child2({ children, hello }) {

    return (
        <>
            {children}
            <Child3 hello={hello}><p>This is Child 3</p></Child3>
        </>
    )
}

function Child3(props) {

    return (
        <>
            {props.children}

            {/* Other way to send props in single word*/}
            <Child4 {...props}><p>This is Child 4</p> </Child4>    
        </>
    )
}
function Child4({ children, hello }) {

    return (
        <>
            {children}
            <button onClick={hello}>Click me</button>
            <br />

            
        </>
    )
}