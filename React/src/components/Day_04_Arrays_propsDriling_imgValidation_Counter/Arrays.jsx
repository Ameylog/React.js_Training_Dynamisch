import React, { useEffect } from 'react'
import { useState } from 'react'

function Arrays() {
    const [array1, setArray1] = useState([5, 3, 4, 78, 65])
    const [array2, setArray2] = useState([5, 3, 4, 78, 65])

    const [array3, setArray3] = useState([])
    // const [array3, setArray3] = useState([...array1,...array2])  

    const mergeArray = () => {
        // setArray3([array1, array2])    // copy both array  create nested array without spread
        setArray3([...array1,...array2])  // copy only values
    } 

    useEffect(()=>{
        console.log(array3.flat());
        // console.log(array3);
    },[])

    // setArray3([...array1,...array2])   // infine loop

    return (
        <div>
            <h3>Merage Array using spread</h3><br />
            <p>Array1:- {array1 + " "}</p>
            <p>Array2:- {array2 + " "}</p>
            <button onClick={mergeArray}>Merge</button>
            
            <p>Array3:- {array3 + " "}</p>
        </div>
    )
}

export default Arrays;
