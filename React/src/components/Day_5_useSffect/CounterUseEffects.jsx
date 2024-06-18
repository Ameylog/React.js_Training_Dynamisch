import React, { useEffect, useState } from 'react'


function CounterUseEffects() {

    const [counter, setCounter] = useState(0);


    const increment = () => {
        (counter < 20) ? setCounter(counter + 1) : alert("Counter greater than 20")
    }
    const decrement = () => {
        (counter > 0) ? setCounter(counter - 1) : alert("Counter less than 0")
    }

    useEffect(() => {
        console.log("Inside effect");
    }, [counter])

    return (
        <div>
            <h3>Counter using useEffect</h3><br />
            <p>Counter :- {counter}</p>  <br />
            <button onClick={increment}>Increment (+)</button> <br /><br />
            <button onClick={decrement}>Decrement(-)</button> <br />

        </div>
    )
}

export default CounterUseEffects;
