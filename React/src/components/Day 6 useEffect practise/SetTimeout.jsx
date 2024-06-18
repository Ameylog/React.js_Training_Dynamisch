import React, { useEffect, useState } from 'react'

function SetTimeout() {
    const [date, setDate] = useState(new Date())

    const [text, setText] = useState("Wait")
    const [text2, setText2] = useState("")

    const [count, setCount] = useState(5)

    useEffect(() => {
        const idx = setTimeout(() => {
            setDate(new Date())
            
        }, 1000)

        return () => {
            // console.log("Hii");
            clearTimeout(idx)
        }
    }, [date])


    useEffect(() => {
        setTimeout(() => {
            setText("")
            setText2("Welcome to Pune")
        }, 5000)

        setTimeout(()=>{
            if (count > 0) {
                setCount(count - 1)
            }
        },1000)

    },[text2,text,count])
    
    return (
        <div>
            <h3>Hello</h3>
            <h3>{`Hrs ${(date.getHours()) % 12} :Min ${date.getMinutes()} : Sec ${date.getSeconds()}`} </h3>
            <br /><br />

            {text} {(count!== 0 )?(count)+" ...": " "}
            <p>{text2}</p>

        </div>
    )
}

export default SetTimeout
