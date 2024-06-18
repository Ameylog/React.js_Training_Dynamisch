import React from 'react'
import ExportsCompoent, { Car } from './ExportsCompoents'
import { Child1, array, sum } from './Exports'
import { obj as object } from "./Exports"  // give another name

function ImportComponent() {
    return (
        <div>
            <h3>Import and Export</h3> <br />
            
            <h5>This is parent component</h5>

            <ExportsCompoent />
            <Car />
            <Child1 />

            <p> Array :- {array.map((val) => val) + " "}</p>
            <p>Sum is :- {sum(5, 4)}</p>

            <h5>Recived Object:- </h5>
            <p>Name:- {object.first} {object.lastName}</p>
        </div>
    )
}

export default ImportComponent
