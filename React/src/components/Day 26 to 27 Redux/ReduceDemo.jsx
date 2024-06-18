import React from 'react'
import { useSelector } from 'react-redux';

function ReduceDemo() {

    //Get the state from store
    const count = useSelector((state) => state.count);
    const age = useSelector((state) => state.age);
        

    return (
        <div>
            <p>Count:- {count}</p>
          
            <p>Age: {age}</p>
        </div>
    )
}

export default ReduceDemo;


// Redux is more useful when:

// You have large amounts of application state that are needed in many places in the app
// The app state is updated frequently over time
// The logic to update that state may be complex
// The app has a medium or large-sized codebase, and might be worked on by many people