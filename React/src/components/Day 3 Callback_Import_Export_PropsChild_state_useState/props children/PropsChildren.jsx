
import React from 'react'

function PropsChildren() {
    return (
        <div>
            {/* normal children call  */}
            {/* <Children /> */}

            {/* h3 inside Children tage is called props children access in child Component by props.children */}
            <Children> <p>This is p tag</p> </Children>
        </div>
    )
}
export default PropsChildren


function Children({children}) {
    // when accept as props
    // console.log("Props:- ", props);

    // other way destruring
    // console.log("props Children:- ",children);

    return (
        <div>
            <h3>Props Children</h3> <br />

            {/* {props.children} */}
            <p>This is props Children</p>
            {children}
        </div>
    )
}
