import React, { useState } from 'react'

function For() {

    const [array, setArray] = useState([1, 23, 4, 63, 55]);

    let element = [];
    array.forEach((val, index) => {
        // console.log(val)
        element.push(<li key={index}>{val}</li>)
    })


    const forLoop = [];

    for (let i = 0; i < array.length; i++) {
        // forLoop.push(array[i])
        forLoop.push(<li>{array[i]}</li>)
        // console.log(array[i])
    }

    const forIn = [];

    for (const i in array) {
        forIn.push(<li>{i}</li>)
    }

    const forOf = [];

    for (const i of array) {
        forOf.push(<li>{i}</li>)
    }


    return (
        <div>
            <h4>For loop</h4>

            {/* Not show list because for each not retun anything */}
            <ul> {
                array.forEach((val) => {
                    <li>{val}</li>
                })
            }
            </ul>

            <h4>For Each</h4>
            <p>{element}</p>

            <h4>For Loop</h4>
            <p>{forLoop}</p>

            <h4>For In (print index)</h4>
            <p>{forIn}</p>

            <h4>For of (print value)</h4>
            <p>{forOf}</p>


        </div>
    )
}

export default For
