import React, { useState } from 'react'

function Objects() {

  const [obj, setObj] = useState({
    fname: "Amey",
    lname: "Shende",
    age: 23,
  })

  const [obj2, setObj2] = useState({
    user1: {
      id: 0,
      age: 34,
      address: {
        city: "Pune",
        pincode: 441545
      }
    },
    user2: {
      id: 1,
      age: 27,
      address: {
        city: "Mumbai",
        pincode: 626146
      }
    }
  }
  )
  const [demoforIn, setDemoForIn] = useState([])

  const [demoforOf, setDemo] = useState([])

  // console.log(obj['fname']);

  const arr = []
  for (const i in obj) {
    arr.push(<li key={i}>{i + ":" + obj[i]}</li>)
  }

  const forIn = () => {
    setDemoForIn([arr])
  }

  const arr2 = [];
  for (const value of Object.values(obj)) {
    arr2.push((<li key={value}>{value}</li>))
    // console.log(value);
  }

  const forOf = () => {
    setDemo([arr2])
  }


  const arr3 = [];
  Object.entries(obj).forEach((val, key) => {
    arr3.push(<li key={key}>{val.join(":")}</li>)
    //  console.log(val.join(":"));
  })
  // console.log(arr3);

  // console.log(Object.entries(obj).length);

  const arr4 = [];
  Object.keys(obj2).forEach((key) => {
    arr4.push(
      <p>{key}:- </p>,
      <li>{obj2[key].age}</li>,
      <li>{obj2[key].address.city}</li>,
      <li>{obj2[key].address.pincode}</li>)
  })
  return (
    <div>
      <h3>Object Looping</h3>

      <p><i>For in loop</i></p>
      <button onClick={forIn}>For In Loop</button>
      <p>{demoforIn}</p>

      <p><i>For of loop</i></p>
      <button onClick={forOf}>For Of Loop</button>
      <p>{demoforOf}</p>

      <p><i>For Each</i></p>
      <p>{arr3}</p>

      <p><i>Map</i></p>
      {
        Object.entries(obj).map((val, key) => {
          return <li key={key}>{val.join(":")}</li>
        })
      }

      <br /><br />
      <p><i>Nested Object</i></p>
      {
        Object.keys(obj2).map((key) => {
          return <ul key={key.id}>
            <p>{key}:- </p>
            <li>Age:- {obj2[key].age}</li>
            <li>Address:- {obj2[key].address.city}</li>
            <li>Pincode:-{obj2[key].address.pincode}</li>
          </ul>
        })
      }

      <br /><br />

      <p>Nested For Each</p>
      {arr4}

    </div>
  )
}

export default Objects