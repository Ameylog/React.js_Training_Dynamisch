import React, { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { Users } from '../../App';
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


function CartModal({ show, onHide }) {

    const { setTotalPrice, cartItems, setCartItems, setShowModal } = useContext(Users);

    const navigator = useNavigate();

    // Function to decrement item count
    const handleDecrement = (itemId) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId && item.count > 1 ? { ...item, count: item.count - 1 } : item
            )
        );
    };

    // Function to increment item count
    const handleIncrement = (itemId) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId ? { ...item, count: item.count + 1 } : item
            )
        );
    };

    // Delete Id from cart
    const handleDelete = (id) => {
        const updatedrRecord = cartItems?.filter((val, index) => {
            return val.id !== id;
        })
        setCartItems(updatedrRecord)
    }

    const TotalPrice = cartItems?.length > 0 && cartItems?.reduce((total, val) => {
        const totalPrice = parseInt(val.price) * parseInt(val.count) + parseInt(total);
        setTotalPrice(totalPrice);
        return totalPrice
    }, 0)


    return (

        <Modal show={show} onHide={onHide} >
            <Modal.Header closeButton  >
                <Modal.Title style={{ marginLeft: "13vw" }}> Cart </Modal.Title>
                <hr />
            </Modal.Header>

            <Modal.Body >
                {
                    cartItems?.length > 0
                        ? cartItems?.map((item, index) => (
                            <div key={item.id}>
                                <div className="d-flex align-items-center mb-3 ">

                                    <img src={item.thumbnail} alt={item.title} style={{ width: 90, height: 80, marginRight: 15 }} />

                                    <div >
                                        <p style={{ fontSize: "1.2em", textTransform: "capitalize" }}>{item.title}</p>
                                        <p style={{ marginTop: "-15px" }}> Price:- ${item.price} </p>

                                        <div style={{ marginTop: "-15px" }}>

                                            {/* Decrement Count button */}
                                            <button onClick={() => handleDecrement(item.id)} disabled={item.count <= 1}
                                                className='ms-3 rounded bg-white border-1 px-2 py-1 ' >
                                                -
                                            </button>

                                            {/* Product Count */}
                                            
                                            <span className='ms-3 rounded btn border-black px-3 py-1 border-1' style={{width:"3vw"}}>
                                                {item.count}
                                            </span>

                                            {/* Increment Count button */}
                                            <button onClick={() => handleIncrement(item.id)}
                                                className='ms-3 rounded bg-white border-1 px-2 py-1' >
                                                +
                                            </button>

                                            <span>
                                                <MdDelete style={{ marginLeft: "10vw", width: "1.5em", height: "1.5em", color: "red", cursor: "pointer", }} onClick={() => handleDelete(item.id)} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {cartItems && cartItems?.length - 1 === index ? " " : <hr />}
                            </div>
                        ))
                        : <p className='text-center fs-5 fst-italic'> Cart is empty</p>

                }
            </Modal.Body>

            <Modal.Footer  >
                {
                    cartItems?.length > 0
                        ? <div style={{ textAlign: 'left', fontWeight: "bold", display: "flex", justifyContent: "space-between", marginRight: "1vw" }}>

                            {/* Placed order button */}
                            <button className='bg-success text-white border-0 px-5 py-1 rounded-1'
                                style={{ marginRight: "5vw" }} onClick={() => { navigator("order"); setShowModal(false); }}>
                                Place Order
                            </button>

                            <p style={{ fontSize: "1.1em" }}>
                                Total Amount:- ${TotalPrice}
                            </p>
                        </div>
                        : ""
                }
            </Modal.Footer>
        </Modal>
    );
}

export default CartModal;
