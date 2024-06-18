import React, { useEffect, useState } from 'react'

function SetInterval() {
    const [count, setCount] = useState(0);

    const [watch, setWatch] = useState(new Date())

    useEffect(() => {
        const idI = setInterval(() => {
            setCount(count => count + 1)
        }, 1000);

        return () => clearInterval(idI);
    }, [])

    useEffect(() => {
        const timer=setInterval(() => {
            setWatch(new Date())
            
        }, 1000)

        return ()=> clearInterval(timer)
    },[])

    return (
        <div>
            <h1>Counter:- {count}</h1>
            <br /><br />

            <h2>Time</h2>
            {console.log(watch)}
            <h3>{`${(watch.getHours()) % 12} : ${watch.getMinutes()} : ${watch.getSeconds()} `}
            {(watch.getHours()>=0 && watch.getHours()<12)? "AM":"PM"}  </h3>

        </div>
    )
}

export default SetInterval
