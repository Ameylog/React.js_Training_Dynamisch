import React, { useCallback, useState } from 'react'

function ParentChild() {
    const [age, setAge] = useState(0);
    const [count, setCount] = useState(5);

    const demo = useCallback(() => {
        setAge(age => age + 1)
        // console.log(age);
    }, [])

    const demo1 = useCallback(() => {
        setCount(count => count + 1)
    }, [])

    return (

        <div>

            <h3>Parent</h3>

            <Child age={age} demo={demo} />
            {/* {console.log(age)} */}
            <br /><br />

            <Child2 count={count} demo1={demo1} />
        </div>
    )

}

export default ParentChild

const Child = React.memo(({ age, demo }) => {

    console.log("age:-",age);
    return (
        <>
            <p>Age: {age}</p>
            <button onClick={demo}>Increment</button>
        </>
    )
})

const Child2 = React.memo(({ count, demo1 }) => {
    console.log("count:-",count);
    return (
        <>
            <p>count: {count}</p>
            <button onClick={demo1}>Increment</button>
        </>
    )
})
