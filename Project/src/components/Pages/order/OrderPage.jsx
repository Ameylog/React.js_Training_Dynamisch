import React, { useContext, } from 'react'
import { Users } from '../../../App'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function OrderPage() {
    const { cartItems, totalPrice } = useContext(Users);

    const navigate = useNavigate();

    const handlePayment = () => {
        toast.success("Order has be placed", {
            position: "top-center",
            autoClose: 2000
        })
    }
    return (
        <div>
            <div className="container">
                <ToastContainer />
                <div>
                    <div className="card col-lg-7 mt-3 m-auto mb-3">
                        <div className="card-body ">
                            <h3 className='text-center mb-3'>Placed Orders</h3>
                            <hr />
                            {
                                cartItems.length > 0
                                    ? cartItems?.map(item => (

                                        <div key={item.id}>
                                            <div className="d-flex align-items-center mb-3">

                                                <img src={item.thumbnail} alt={item.title} style={{ width: 80, height: 70, marginRight: 15 }} />

                                                <div>
                                                    <p style={{ fontSize: "1em", textTransform: "capitalize", marginTop: "-2.5vh" }}>{item.title}</p>
                                                    <p style={{ marginTop: "-2.5vh" }}>Price:- ${item.price} </p>
                                                    <p style={{ marginTop: "-2.5vh" }}>Quanity:- {item.count}</p>

                                                    <p style={{ marginTop: "-2.5vh" }}>
                                                        Total:- ${parseInt(item.count) * (parseInt(item.price))}
                                                    </p>
                                                </div>

                                            </div>
                                            <hr />
                                        </div>
                                    ))
                                    : <p className='text-center fs-5 fst-italic'>No placed order</p>
                            }

                            {cartItems.length > 0 ?
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <p style={{ fontSize: "1.2em" }}>Total Price:- ${totalPrice} </p>
                                    <button className='bg-success border-0 rounded text-white px-2 py-2 text-center' onClick={handlePayment}>Proceed to Payment</button>
                                </div>
                                : ""
                            }

                        </div>

                    </div>
                    <div className='d-flex justify-content-center'>
                        <button type='button' className='btn btn-success rounded mt-4 col-md-2'
                            onClick={(e) => navigate("/dashboard")}
                        >Back to home</button>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default OrderPage
