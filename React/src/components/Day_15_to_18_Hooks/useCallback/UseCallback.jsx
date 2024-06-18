import React, { useCallback, useState } from 'react'

function UseCallback() {

    const [count, setCount] = useState(0);

  
    const handleClick = useCallback(() => {
        setCount(count + 1);
      
    }, [count]);


    return (
        <div>

            <div>
                <h3>useCallback Hook </h3>
                <p>Count: {count}</p>
                
                <button onClick={handleClick}>Increment Count</button>
            </div>

        </div>
    )
}

export default UseCallback;
