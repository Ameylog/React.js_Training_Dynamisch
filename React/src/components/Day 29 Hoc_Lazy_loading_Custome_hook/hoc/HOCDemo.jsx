import React from 'react'
import HOC, { HocDemo } from './HOC';

function HOCDemo() {
    //Hoc import 
    const EnhancedComponent = HOC(HocDemo);
    return (
        <div>
            <EnhancedComponent name="pune" />
        </div>
    )
}

export default HOCDemo;