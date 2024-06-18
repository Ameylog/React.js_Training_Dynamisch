import React, { useState } from 'react'

function MapDemo() {
    const [array, setArray] = useState([4, 5, 66, 98, 30, 44])

    const [arrObj, setArrObj] = useState([
        {
            id: 0,
            name: "John Doe",
            city: "New York",
            age: 25,
            country: "USA",
            pincode: undefined
        },
        {
            id: 1,
            name: "Alice Smith",
            city: "London",
            age: 29,
            country: "UK",
            pincode: undefined
        },
        {
            id: 2,
            name: "Ved shinde",
            city: "Dubai",
            age: 30,
            country: "UAE",
            pincode: undefined
        },
        {
            id: 3,
            name: "Maria Patil",
            city: "Pune",
            age: 35,
            country: "India",
            pincode: undefined
        },
        {
            id: 4,
            name: "Raj Shinde",
            city: "Mumbai",
            age: 37,
            country: "India",
            pincode: 441754
        }

    ])

    const user = {
        login: {
            fname: "Amey",
            age: 25,
            address: {
                city: "Pune",
                state: "Maharastra"
            }
        },
        signup: "signup page"
    }

    
    const renderArray = array.map((val, index) =>
        <li key={index}>{val}</li>
    )

    const changeArray = () => {
        setArray(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])

    }
    const sum = array.reduce((acc, curr) => acc + curr, 0)


    const filterArrObj = arrObj.filter((val) => val.age > 30).map((ele, index) => {
        return <div>
            <li>{ele.name}</li>
        </div>
    }
    )

    const maxAge = arrObj.reduce((acc, curr) => {
        if (curr.age > acc) {
            return curr.age;
        }
        return acc;
    }, 0)

    return (
        <>
            <h2>Map</h2>

            {/* <ul>{
                array.map((val, index) =>
                    <li key={index}>{val}</li>
                )
            }
            </ul> */}
            {renderArray}

            <button onClick={changeArray}>Change Array</button>

            <br /><br />

            <p> <i>Array of Object</i></p>

            <div className='d-flex justify-content-center align-items-center' >

                <table className='table w-25'>
                    <thead>
                        <th >Name</th>
                        <th>City</th>
                        <th>Country</th>
                    </thead>
                    <tbody>
                        {
                            arrObj.map((val, index) => {
                                return <tr key={val.id}>
                                    <td> {val.name} </td>
                                    <td>{val.city} </td>
                                    <td>{val.country}</td>
                                    <td> {val.pincode} </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
            <br /><br />

            <p>
                <i> Recoreds that have Age greater than 30 </i>
            </p>

            {filterArrObj}
            <br /><br />

            <p><i>Maximum age from array of object</i></p>
            <p>Max age:- {maxAge}</p>

            <br />
            <h2>Filter</h2>
            {array?.filter((val) => val > 20).map((ele, index) => <li key={index}>{ele}</li>)
            }

            <br /><br />

            <h2>Reduce</h2>
            <p>Sum :- {sum} </p>


            <h2>Option Channing ? </h2>
            {/* return undefined id property is null od undefined */}
            <h4>user details</h4>

            <p>Name:- {user.login.fname}</p>
            <p>Age:- {user?.login?.age}</p>
            <p>City:-{user.login.address?.city}</p>
            {console.log(user.login.address?.city)}
            <p>Signup:- {user?.signup}</p>


            <h2>Render Child Components</h2>
            <Child num={array}></Child>


        </>
    )
}

export default MapDemo;


function Child({ num }) {
    return (
        <>
            {
                num.sort((a, b) => a - b).map((val, index) => <li key={index}>{val * 2}</li>)

            }
        </>
    )
}

// To retun single jsx and pass key to
// <div> , <tr> , <Fragment>
// key should be unique and mostly use database id .

