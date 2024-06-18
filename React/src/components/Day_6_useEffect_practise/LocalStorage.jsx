import React, { useEffect, useState } from 'react'

function LocalStorage() {

    const [item, setItem] = useState([]);

    const obj = {
        name: "Amey",
        age: 24,
    }

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(obj))
        document.cookie = "city=pune expairy"
    },[])

    useEffect(() => {
        const items = JSON.parse(localStorage?.getItem('items'));

        if (items) {
            setItem([items]);
        }
        // console.log(items)

        return () => window.localStorage.clear(items)
    }, []);

    const remove = () => {
        window.confirm("Clear local-storage");
        localStorage.clear();
    }

    const showData = () => {
        window.alert(`${document.cookie}`)
    }
    
    return (
        <div>
            <h3>Local-Strorage</h3>

            {item?.map((val, index) => {
                return (
                    <ul key={index}>
                        <li>Name:-{val.name}</li>
                        <li>Age:- {val.age}</li>
                    </ul>
                )
            })}


            <button onClick={showData}>Show Data</button> <br /><br />
            <button onClick={remove}>Remove</button>

        </div>
    )
}

export default LocalStorage
