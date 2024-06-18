import React from 'react'

// SET THE BY DEFAULT PROPS  
function TaskProps({ name, age =0, job =0, city=0, obj = 9, array = 78, myfun ,component}) {

    return (
        <div>
            <h3>Props</h3>

            <p>Name:{name}</p>
            <p>Age:{age}</p>
            <p>Job:{job}</p>
            <p>City:{city}</p>

            <p>object :{obj.flag}</p>
            <p>Object :{obj.num}</p>

            <p>Array: {array +" "} </p>

            <button onClick={myfun}>Click me</button>

            {/* other way call function */}
            {/* <button onClick={()=>myfun()}>click me</button> */} 

            {component}
        </div>
    )
}

export default TaskProps


// props can pass as primitive [number,string,bool,...],  non-primitive [object , array ] , functions and children
// props can tranfer from parent to child only 
// child to parent not directly but can achived by callback.
// we can set the default value of props at receiving side
// props immutable
// props validation can achived by propsTypes and custome validations