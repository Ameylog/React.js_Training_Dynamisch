import React, { useEffect, useState } from 'react'

function Api() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/todos")
        // .then(res=>res.json())
        // .then(data=> setData(data))

        apiData()
    }, [])

    const apiData = async () => {
        try {
            const api = await fetch("https://jsonplaceholder.typicode.com/todos");
            const result = await api.json();
            setData([...result])       // multiple record
            // setData([result])       // single record
            // console.log("Result:-", result);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h3>Fetch Api in useEffect</h3>
            <div className='d-flex justify-content-center align-items-center mt-3'>
                <table className="table w-50" border={{ border: "1px solid black" }}>
                    <thead>
                        <tr>
                            <th scope="col">User Id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((val) => {
                            return <tr key={val.id}>
                                <td >{val.userId}</td>
                                <td >{val.title}</td>
                                <td >{val.completed.toString()}</td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Api
