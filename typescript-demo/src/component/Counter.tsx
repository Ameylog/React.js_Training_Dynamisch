import React, { useState } from 'react';



const Counter: React.FC= () => {

    const [count, setCount] = useState<number>(0);

    // Functions to increment and decrement the count
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Counter App</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button> <br />
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;


