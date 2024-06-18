import React, { createContext, useState } from 'react'
import ContextChild1 from './ContextChild1';


export const UserContext = createContext("light");

function ContextParent() {
    // const [age, setAge] = useState(24);
    const [arrofObj, setArrofObj] = useState([
        { name: "Aarav", age: 28, city: "Mumbai" },
        { name: "Ishaan", age: 31, city: "Delhi" },
        { name: "Priya", age: 26, city: "Bangalore" },
        { name: "Ananya", age: 29, city: "Hyderabad" }
    ]);

    return (
        <div>
            <h3>Context API</h3>
            <br /><br />

            <UserContext.Provider value={{ arrofObj, setArrofObj }}>
                <ContextChild1 />

            </UserContext.Provider>
            
        </div>
    )
}

export default ContextParent


