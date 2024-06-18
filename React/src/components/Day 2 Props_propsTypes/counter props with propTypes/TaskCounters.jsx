import React from 'react'
import propTypes from 'prop-types'

function TaskCounters({ increment, counter}) {
    return (

        <div>
            <h3>Props Types and Default Props</h3>
            <p>Counter:- {counter}</p>
            <button onClick={increment}>Incremnet</button>
        </div>

    )
}

TaskCounters.propTypes = {
    increment: propTypes.func,
    counter: propTypes.number

}

TaskCounters.defaultProps={
    counter:0,
  
}
export default TaskCounters;