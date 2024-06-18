import React, { useEffect, useState } from 'react'

function EnvironmentFile() {

    const [data, setData] = useState([]);


    useEffect(() => {
        apiData()
    }, [])

    const URL = process.env.REACT_APP_TODOS_API;

    const apiData = async () => {
        try {
            const api = await fetch(URL);
            const result = await api.json();
            setData([...result])
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <h3>React Envirnment variable (.env)file Acess</h3>

            <p>React title :- {process.env.REACT_APP_TITLE}</p>
            <p>React descpition :- {process.env.REACT_APP_DESCRIPTION}</p>

            <p>Render accorrding to Node Env</p>
            
            {process.env.NODE_ENV === 'development' ?
                process.env.REACT_APP_DEV_MODE : process.env.REACT_APP_PRO_MODE}

            <h3>Fetch Api from .env</h3>
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

export default EnvironmentFile;

// If you are using some external APIs for data you must use the .env file to store your sensitive credentials like API keys.

// Environment variables can also help us to store our API link in one location so that we don’t have to change the link in each file manually

// React enforces the prefix REACT_APP

// Store APi in .env file

// After Any change in .env restart server 