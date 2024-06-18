import React, { useContext, useState } from 'react'
import ContextChild2 from './ContextChild2'
import { UserContext } from './ContextParent'

function ContextChild1() {

    // const { age, setAge } = useContext(UserContext)

    // const demo=useContext(UserContext)


    return (
        <div>
            {/* <p>Age form Child1:- {age}</p>
            <br /><br /> */}

            <ContextChild2 />

            {/* <p>This default Context:- {demo}</p> */}
        </div>
    )
}

export default ContextChild1
