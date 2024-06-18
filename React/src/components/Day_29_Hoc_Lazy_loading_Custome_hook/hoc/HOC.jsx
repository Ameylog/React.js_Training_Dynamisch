import React from 'react'

function HOC(HocDemo) {
    return function (props) {
        return <HocDemo {...props} />;
    }
}

export default HOC;

export function HocDemo(props) {
    return <div className='text-center'> Hello World, Welcome to {props.name}</div>
}