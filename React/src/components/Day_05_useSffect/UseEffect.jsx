import React, { useEffect, useState } from 'react'

function UseEffect() {

    const [text, setText] = useState("Hello");
    const [count,setCount]=useState(0);

    const handleText = () => {
        setText("Welcome");
        setCount(count+1)
    }

    // const handleText2 = () => {
    //     setText("Welcome To pune")
    // }

    
    //^ execute any state in component
    useEffect(()=>{
        console.log(count);
        console.log("Inside Effect Block"); 
    })

    //^ execute at onces when compoent is render
    // useEffect(()=>{
    //     // console.log(count);
    //     console.log("Inside Effect Block");
    // },[])

    //^ execute only when text state change 
    // useEffect(() => {
    //     // console.log(count);
    //     console.log("Inside Effect Block");
    // }, [text])

    //^ unmounting  
    // useEffect(()=>{
    //     console.log("Inside Effect ");   
    //     // Before return execute as a mounting

    //     // write logic of unmounting here 
    //     return ()=>{
    //             console.log("This is unmounting");
    //     }
    // },[]);


    return (
        <div>
            <h3>useEffect</h3> <br />
            <p>Text:- {text} {count}</p>
            <button onClick={handleText}>Change Text</button> <br /><br />
            {/* <button onClick={handleText2}>Change Text</button> */}

        </div>
    )
}

export default UseEffect
