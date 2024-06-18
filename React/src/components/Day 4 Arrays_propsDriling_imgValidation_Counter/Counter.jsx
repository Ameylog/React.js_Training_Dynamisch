import React from 'react'
import { useState } from 'react'

function Counter() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        (counter === 20) ? setCounter(0) : setCounter(counter + 2)
    }
    const decrement = () => {
        (counter === 0) ? setCounter(20) : setCounter(counter - 2)
    }
    return (
        <div>
            <h3>Counter</h3> <br />
            <p>Counter work only 0 to 20,<br /> after 20 reset to 0 and vice versa</p>
            <p>Counter:- {counter}</p>
            <button onClick={increment}>Increment (+)</button> <br /> <br />
            <button onClick={decrement}>Decrement (-)</button>
        </div>
    )
}

export default Counter
