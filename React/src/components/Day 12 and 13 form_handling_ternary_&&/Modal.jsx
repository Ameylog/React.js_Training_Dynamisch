import React from 'react'
import "./Modal.css"
import { FaRegCircleXmark } from "react-icons/fa6";

function Modal({ deleteRecord, email, setShowModal }) {
  return (
    <div id="container">
      <div id="modal_main">

        <FaRegCircleXmark size="80px" style={{ color: "#e60022",borderWidth:"5px",}} />
        
        <h3>Are You Sure?</h3>
        <p>You won't be able to revert this!</p>


        <button id="delete_button" onClick={() => deleteRecord(email)}>Yes, delete it!</button>
        <button id="cancle_button" onClick={() => setShowModal(false)}>Cancle</button>
      </div>


    </div>
  )
}

export default Modal
