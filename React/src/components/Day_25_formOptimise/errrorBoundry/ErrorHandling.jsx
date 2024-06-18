import React, {  useState } from 'react'

function ErrorHandling() {

    const [counter, setCounter] = useState(0);

    if (counter > 6) {
        throw new Error("Counter Limit excced !");
    }

    return (
        <div>
            <h3>Counter</h3>
            <p > {counter} </p>

            <button onClick={() => setCounter(counter + 1)}>Increment</button>

        </div>
    )
}

export default ErrorHandling;

//some condition crash app to avoid that we use error boundtry
// show error only perticular component only not crash other App [not effect other componenet]
// cover up some error handle only synchrous
//Not work on Asynchnouses

//String not valid for error boundtry  (show only blank screen)