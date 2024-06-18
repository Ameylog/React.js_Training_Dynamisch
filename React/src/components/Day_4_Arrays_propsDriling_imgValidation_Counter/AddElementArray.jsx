import React, { useState } from 'react'

function AddElementArray() {
    const [arr, setArr] = useState([1, 20, 4, 5, 75])

    // arr.push(45);   add element multiple time [infinte loop]

    function add() {
        // setArr([45,...arr])
        setArr([...arr,45])      // add element in end
    }

    // state in functional component are not persist value that the reason , need to destrure old value
    // when add new element in state along with old values

    return (
        <div>
            <h3>Add Element in Array (spread)</h3> <br />
            <p>Array:-{arr+","} </p>
            <p>arr:-{arr.map(val =>val+",") }</p>
            <button onClick={add}>Add</button>
        </div>
    )
}

export default AddElementArray
