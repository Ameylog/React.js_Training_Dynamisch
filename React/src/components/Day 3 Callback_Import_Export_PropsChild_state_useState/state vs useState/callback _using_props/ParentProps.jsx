import React, { useState } from 'react'

export default function ParentProps() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <h3>Props using callback</h3> <br />
            <ChildProps count={count} setCount={setCount} />
        </div>
    )
}

function ChildProps({ count, setCount }) {

    return (
        <>
            <h4>This is Child Componet</h4>
            <p>Count:-{count}</p>

            <button onClick={() => setCount(count + 1)}>Clike me</button>
        </>
    )
} 