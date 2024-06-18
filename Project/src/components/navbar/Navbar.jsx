import React, { useContext } from 'react'
import "./Navbar.css"
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Users } from '../../App';
import logo from "../../images/logo2.jpg";
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';
import { MdOutlineLogout } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import CartModal from './CartModel';
import defaultImage from "../../images/profilePhoto.png"

function Navbar() {
    const { setIsLogout, setIsLogin, isLogin, cartItems, showModal, setShowModal, data, setDataMsg, setData2, sampleData,
        setProfileDropDown, profileDropDown } = useContext(Users);

    const navigate = useNavigate()

    const location = useLocation();

    useEffect(() => {
        if (isLogin) {
            toast.success("Login Sucessfully", {
                position: "top-right",
                autoClose: 2000
            })       
        }

    }, [])


    // Filter data based on search term
    const handleSearch = (e) => {
        const Values = e.target.value

        if (Values?.trim()?.length > 0) {
            let array = data;
            const res = array.filter((val, index) => val?.title.toLowerCase().includes(Values?.toLowerCase())
                || val?.brand.toLowerCase().includes(Values?.toLowerCase())
                || val?.category.toLowerCase().includes(Values?.toLowerCase()));

            if (res !== -1) {
                setData2(res);

                if (res?.length === 0) {
                    setDataMsg(true)
                    // console.log(res);
                }
                else if (Values.trim() !== "") {
                    setDataMsg(false)
                    setData2(res)
                    // setData2(data);
                }
            }
            else {
                setDataMsg(true)
                // setData2([])
            }
        } else {
            setData2(data);
            setDataMsg(false);
            // console.log("Data", data);
        }
    }

    // navigation to login page
    const handleLogout = () => {
        setIsLogout(true)
        setIsLogin(false)
        localStorage.removeItem("login");
        localStorage.removeItem("email");
        return navigate("/login")
    }

    const showProfile = (e) => {
        e.stopPropagation();
        setProfileDropDown(true)
    }

    // Total count of items in the cart
    const totalCount = cartItems?.length;

    // prifle Record for user information
    const pofileData = sampleData?.filter((val) => val.email === localStorage.getItem("email"));
    const profilImages = pofileData?.length > 0 ? pofileData[0].file : defaultImage;

    return (
        <div>
            <ToastContainer />

            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse ms-5 checkActive" id="navbarSupportedContent">
                        <div>
                            <img src={logo} alt="Logo" style={{ height: "5vh" }} onClick={() => navigate("")} />
                        </div>

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5 mainNavbar">
                            <li className="">
                                <NavLink
                                    className={({ isActive }) => `nav-link ms-3 ${isActive ? 'active text-primary' : 'text-black'}`}
                                    to="/dashboard" end  >
                                    Home
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => `nav-link ms-3 ${isActive ? 'active text-primary' : 'text-black'}`}
                                    to="/dashboard/product">
                                    Product
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => `nav-link ms-3 ${isActive ? 'active text-primary' : 'text-black'}`}
                                    to="/dashboard/contact" >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>

                        {/* Serahc Field */}
                        <div className="d-flex me-5 w-25"  >
                            {
                                location.pathname === "/dashboard/product" &&

                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Search for Products, Brands and More"
                                    style={{ background: "#DEE8F7" }}
                                    onInput={handleSearch}
                                />
                            }
                        </div>

                        {/* cart */}
                        <div >
                            <div className='me-3'>
                                <FaCartShopping onClick={() => setShowModal(true)} className='fs-3' style={{ cursor: "pointer" }} />
                                <sup style={{ left: "-0.7em" }}>
                                    <span className="badge text-black fs-6 me-2">{totalCount}</span>
                                </sup>
                            </div>
                        </div>

                        {/* Profile */}
                        <div style={{ marginRight: "1.5vw" }}>
                            <div className="dropdown" style={{ width: "45px", height: "45px", borderRadius: "50%" }}  >

                                <img src={profilImages} alt="profilePhoto" width={43} height={43}
                                    style={{ borderRadius: "50%", cursor: "pointer" }} onClick={showProfile}
                                    className='dropdown-toggle'
                                />
                                {
                                    profileDropDown ? <div className='bg-white text-black shadow-lg' style={{ width: "18vw", marginLeft: "-13vw", height: "24vh", zIndex: "2", position: "absolute" }}>


                                        <img src={profilImages} alt="profilePhoto" width={40} height={40}
                                            style={{ borderRadius: "50%", cursor: "pointer" }}
                                            className='dropdown-toggle mt-3 ms-3'

                                        />

                                        <span className='ms-2' style={{ fontSize: "0.95rem" }}>
                                            {localStorage.getItem("email")}
                                        </span>


                                        <li className='nav-link ms-2 py-2 '>
                                            <NavLink className="dropdown-item ms-2" to="/dashboard/profile">Your Account</NavLink>
                                        </li>

                                        <li className='nav-link ms-2 py-2 '>
                                            <NavLink className="dropdown-item ms-2" to="/dashboard/order">Your Placed order</NavLink>
                                        </li>
                                        <hr style={{ marginTop: "0vh" }} />

                                        <li className='nav-link '>
                                            <div className="d-flex ms-3" style={{ cursor: "pointer", marginTop: "-1.4vh" }} onClick={handleLogout}>
                                                <p>
                                                    <MdOutlineLogout className='fs-4 dropdown-item ' title='Logout' style={{ cursor: "pointer", }}
                                                    />
                                                </p>
                                                <p className='ms-1' style={{ marginTop: "-2px" }} >Log out</p>
                                            </div>
                                        </li>

                                    </div> : ""
                                }

                            </div>

                        </div>
                    </div>
                </div>
            </nav>

            <main style={{height:"fit-content"}}>
                <Outlet />
            </main>

            {/* Cart Modal */}
            <CartModal show={showModal} onHide={() => setShowModal(false)} />
        </div>
    )
}

export default Navbar;
