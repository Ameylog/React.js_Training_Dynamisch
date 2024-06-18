import { NavLink, Outlet } from "react-router-dom";


function DayComponent({ linkObj }) {

    return (
        
        <div className='container mt-4'>
            <div className="d-flex mb-3">
                <div className="w-100" style={{ marginLeft: "20vw" }}  >
                    <nav>
                        <ul className="nav nav-tab bg-light" >
                            {
                                linkObj.map((val, index) => (
                                    <li className="nav-item" key={index}>
                                        <NavLink
                                            to={val.to}
                                            className={({ isActive }) => isActive ? 'nav-link text-primary' : 'nav-link text-black'}
                                        >
                                            {val.name}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
            </div>

            {/* children */}
            <div className=' p-3' style={{ marginLeft: "11vw", width: "80vw" }}>
                <Outlet />
            </div>
        </div>
    );
}

export default DayComponent;