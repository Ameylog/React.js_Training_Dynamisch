import React, { useContext, useState } from 'react'
import { UserContext } from './ContextParent';

function ContextChild2() {

    // const { age, setAge } = useContext(UserContext);

    // const [age2, setAge2] = useState(age);

    const { arrofObj, setarrofObj } = useContext(UserContext);

    return (
        <div>

            {/* <p>Age from Child2:- {age}</p>

            <button onClick={() => setAge(age + 1)}>Increment Age</button> */}

            {/* <p>Age:{age2}</p>
            <button onClick={() => setAge2(age2 + 1)}>Increment Age</button> */}

            <h5>List of People (Child Components)</h5><br />
            
            {arrofObj.map((val, index) => (
                <ui key={index}>
                    <li>Name: {val.name}</li>
                    <li>Age: {val.age}</li>
                    <li>City: {val.city}</li>
                    <br />
                </ui>

            ))}

            <br /><br />

        </div>
    )
}

export default ContextChild2
