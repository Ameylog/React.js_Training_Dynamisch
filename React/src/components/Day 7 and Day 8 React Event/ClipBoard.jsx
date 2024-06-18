import React, { useState } from 'react'

function ClipBoard() {

  const [mess, setMess] = useState("")

  const handlerSelect = (e) => {

    setMess("Text selected!")
    setTimeout(() => {
      setMess("")
    }, 1000)

  }

  const hanlerPaste = (e) => {
    e.stopPropagation();
    setMess("Text Pasted!")
    setTimeout(() => {
      setMess("")
    }, 1000)

  }

  const handlerCut = (e) => {
    e.stopPropagation();
    setMess("Text Cut!")
    setTimeout(() => {
      setMess("")
    }, 1000)

  }

  const handleSelect1 = (e) => {
    e.stopPropagation();
    setMess("Text Selected!")
    setTimeout(() => {
      setMess("")
    }, 1000)

  }

  return (
    <div>

      <h3>Clipboard Events</h3> <br />
      <div className='mt-1 text-danger fs-5'><p>{mess}</p></div>

      <div>
        <h5>Clipboard operation</h5>
        <p onCopy={handlerSelect} >
          React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.
        </p>

        <input type="text"
          onPaste={hanlerPaste}
          onCut={handlerCut}
          onCopy={handlerSelect} 
        // onSelect={handleSelect1}
        />
      </div>
    </div>
  )
}

export default ClipBoard;
