import React, { useContext } from 'react'
import "./Navbar.css";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Users } from '../../App';

function Navbar() {

    const { setIsLogout, setIsLogin } = useContext(Users);

    const navigate = useNavigate()

    // navigation to login page
    const handleLogout = () => {
        setIsLogout(true)
        setIsLogin(false)
        return navigate("/")
    }

    return (
        <div>
            {/* <h3>Navbar</h3> */}

            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">

                <div className="container-fluid">

                    <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link className="nav-link text-black" aria-current="page" to="">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-black ms-3" to="about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-black ms-3" to="contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-black ms-3" to="product">Product</Link>
                            </li>
                        </ul>

                        <button className="btn btn-outline-success me-5" type="button"
                            onClick={handleLogout}>Logout</button>

                    </div>
                </div>

            </nav>

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Navbar;
