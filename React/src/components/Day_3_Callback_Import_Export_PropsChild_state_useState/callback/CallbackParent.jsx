import React, { useState } from 'react'

function CallbackParent() {

  const [data, setData] = useState("")
  const showData = (data) => {
    // console.log("Child Data:- ", data);
    setData(data);
  }

  return (
    <div>
      <h3>Callback [child to parent]</h3>
      
      <p>{data}</p>
      <CallbackChild showData={showData} />
    </div>
  )
}

export default CallbackParent


function CallbackChild({ showData }) {
  const str = "Hello, I am child of callback";

  return (
    <div>
      <h5>Child Component</h5>
      <button onClick={() => showData(str)}>Click me</button>
    </div>
  )
}