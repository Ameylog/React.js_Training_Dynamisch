
import React, { useState } from 'react'
import { NavLink, useNavigate, Outlet } from 'react-router-dom'


function Navbar() {

    const navigate = useNavigate();

    const [isDropDown, setIsDropDown] = useState(false)

    const navbar = {
        background: "#41B06E",
        color: "white",
        height: "7vh",
        position: "fixed",
        width: "100vw",
    }

    const nav_li = {
        marginLeft: "2vw",
        fontSize: "1.2rem",
        paddingTop: "1vh",
        cursor: "pointer",
    }

    const handleSelect = (e) => {
        navigate(`/product/${e.target.value}`);
    };

    return (
        <div>

            <div>
                <nav style={navbar}>
                    <ul type="none" style={{ display: "flex", justifyContent: "left", marginLeft: "80px" }}>

                        {/* Home */}
                        <li style={nav_li} >
                            <NavLink to="/" style={({ isActive }) => {
                                return isActive ? { color: "black", textDecoration: "none" } : { color: "white", textDecoration: "none", }
                            }}>
                                Home
                            </NavLink>
                        </li>

                        {/* select dropdown */}
                        <li style={nav_li}>

                            <select name="selectProduct" id="selectProduct" style={{ background: "#41B06E", color: "white", border: "none", }} onChange={handleSelect}>

                                <option value="select" disabled selected style={{ background: "lightgray", color: "black" }}>Select Product</option>

                                <option value="newProduct" style={{ background: "white", color: "black" }}>New Product</option>
                                <option value="normalProduct"
                                    style={{ background: "white", color: "black" }}>Product</option>

                            </select>

                        </li>

                        {/* About */}
                        <li style={nav_li}>
                            <NavLink to="/about" style={({ isActive }) => {
                                return isActive ? { color: "black", textDecoration: "none" } : { color: "white", textDecoration: "none", }
                            }} state={"Welcome to the About Page "}>
                                About
                            </NavLink>
                        </li>

                        {/* contact */}
                        <li style={nav_li}>
                            <NavLink to="/contact" style={({ isActive }) => {
                                return isActive ? { color: "black", textDecoration: "none" } : { color: "white", textDecoration: "none", }
                            }}
                            >
                                Contact
                            </NavLink>
                        </li>

                        {/* Profile */}
                        <li style={nav_li}
                        onMouseEnter={() => setIsDropDown(true)}
                        onMouseLeave={() => setIsDropDown(false)}
                        // onClick={() => setIsDropDown(true)}  
                        >
                            <NavLink to="/profile" style={({ isActive }) => {
                                return isActive ? { color: "black", textDecoration: "none", } : { color: "white", textDecoration: "none", }
                            }}>
                                Profile
                            </NavLink>

                            {isDropDown &&
                                <div>
                                    <ul type="none"
                                        style={{
                                            background: "white",
                                            width: "150px",
                                            height: "100px",
                                            zIndex: "1",
                                            marginTop: "12px",
                                            textAlign: "left",
                                            boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)"
                                        }}>
                                        <li style={{ color: "black" }}
                                            onClick={() => navigate("/profile/imageComponent")}>
                                            Image
                                        </li>

                                    </ul>
                                </div>
                            }

                        </li>
                    </ul>
                </nav>
            </div >
            <br /> <br />
            {/* Child Component */}
            <main >
                <Outlet />
            </main>
        </div>

    )
}

export default Navbar;

