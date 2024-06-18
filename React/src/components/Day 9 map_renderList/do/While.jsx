import React, { useState } from 'react'

function While() {

    const [arr, setArr] = useState([7, 8, 4, 5, 42, 7]);

    const changeArr = () => {
        setArr(["Apple", "Banana", "Lemon"])
    }

    const whileLoop = [];

    let i = 0;
    while (i < arr.length) {
        whileLoop.push(<li >{arr[i]}</li>)
        i++;
    }


    const doWhileLoop = [];
    let j = 0;
    do {
        doWhileLoop.push(<li >{arr[j]}</li>)
        j++;
    } while (j<arr.length);

    
    return (
        <div>
    
            <h3>While Loop</h3> <br />

            <ul>{whileLoop}</ul>
            <button onClick={changeArr}>Change the array</button>
            <br /> <br />

            <h3>Do While Loop</h3> <br />
            <ul>{doWhileLoop}</ul>
        </div>
    )
}

export default While
