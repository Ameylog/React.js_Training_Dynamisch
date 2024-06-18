import React, { useState } from 'react'

function DublicateValue() {
    const [arr, setArr] = useState([10, 2, 5, 3, 2, 8, 3]);


    const newArr = [];
    let count = 0;

    const temp = [];
    arr.map((val, index) => {

        //* dulicate value [ternary opertor]
        // return (!newArr.includes(val))? newArr.push(val): "";

        //* dulicate value
        if (!newArr.includes(val)) {
            newArr.push(val)
        }
        return val;

        //* count and dublicate values
        // if (newArr.includes(val)) {
        //     count++;
        //     temp.push(val)
        // } 
        // else {
        //     newArr.push(val)
        // }
        // return val;

    })

    // console.log(newArr);
    // console.log(temp);

    //^ By using set

    // const newArr2=[new Set(arr)];  // print nested object
    const newArr2 = [...new Set(arr)];
    // console.log("newArray2:- ", newArr2);


    //^ By using filter
    const arr3 = [22, 4, 5, 2, 3, 4, 2];

    const result = arr3.filter((item, index) => {
        return !(arr.indexOf(item) != index)
        // return arr.indexOf(item) != index    // return dublicate array element
    })
    console.log(result);

    //^ By reduce

    const result2 = arr3.reduce((acc, item) => {
        if (!acc.includes(item)) {
            acc.push(item)
        }
        return acc;
    }, [])

    console.log(result2)

    //^ Dublicate character remove
    const str = 'Hello';
    const res = str.split("");
    // console.log(res);
    const res2 = [...new Set(res)].join("")
    // console.log(res2);


    return (
        <div>
            <h3>Remove Dublicate Value from array</h3>

            <h3> original Array</h3>
            <p>{arr.map((val, index) => <li key={index}>{val}</li>)}</p>

            <h3>Element Remove</h3>
            <p>
                {newArr.map((val, index) => <li key={index}>{val}</li>)}
            </p>
        </div>
    )
}

export default DublicateValue
