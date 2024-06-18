import React, { useState } from 'react'

function Callback() {

    const [text, setText] = useState("Hello");
    const [flagComp, setFlagComp] = useState('Parent');

    function handledClick(value) {
        setText("I am Amey")
        console.log("Value:-", value);

        setFlagComp(value)
        console.log(text);
    }

    return (
        <div>
            <h3>This is Parent</h3>
            {flagComp === 'Parent' && text}
            <Child1
                handledClick={handledClick}
                flagComp={flagComp}
                text={text}
            ></Child1>
        </div>
    )
}

export default Callback

function Child1({ handledClick, text, flagComp }) {
    return (
        <div>
            <h3>This is Child1</h3>
            {flagComp === 'Child1' && text}

            <Child2
                handledClick={handledClick}
                text={text}
                flagComp={flagComp}
            ></Child2>

        </div>
    )
}
function Child2({ handledClick, text, flagComp }) {
    return (
        <div>
            <h3>This is Child2</h3>
            {flagComp === "Child2" && text}
            <Child3
                handledClick={handledClick}
                flagComp={flagComp}
                text={text}
            ></Child3>

        </div>
    )
}

function Child3({ handledClick, text, flagComp}) {
    return (
        <>
            <h3>This is Child3</h3>
            {flagComp === "Child3" && text}
            <Child4
                handledClick={handledClick}
                flagComp={flagComp}
                text={text}
            ></Child4>

        </>
    )
}

function Child4({ handledClick, text, flagComp}) {
    const [value, setValue] = useState("Parent");

    const handledChange = (e) => {
        setValue(e.target.value)
    }

    // console.log(value);
    return (
        <div>
            <h3>This is Child4</h3>

            {flagComp === "Child4" && text}

            <br /><br />
            
            <select name="child" id="child" onChange={handledChange}>
                <option value="Parent">Parent</option>
                <option value="Child1">Child1</option>
                <option value="Child2">Child2</option>
                <option value="Child3">Child3</option>
                <option value="Child4">Child4</option>
            </select>
            <br /><br />

            <button onClick={() => handledClick(value)}>Click me </button>

        </div>
    )
}

