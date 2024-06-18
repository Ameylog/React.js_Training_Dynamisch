import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./NavbarMain.css";
import HomeScreen from './HomeScreen';
import { navlinkObj } from "../../components/data/NavlinkObject.js";

function NavbarMain() {

  const headerStyle = {
    background: "white",
    boxShadow: " 0 2px 4px 0 rgba(0,0,0,.2)",
    height: "7vh",
    paddingTop: "8px",
    position: "fixed",
    width: "100vw",
    zIndex: "1"
  }

  return (

    <div style={{ marginTop: "-18px" }}>

      {/*  Navbar  */}
      <div style={headerStyle}>
        <HomeScreen />
      </div>

      <div id='mains'>
        {/*  Sidebar */}
        <nav>
          <ul type="none" >
            {
              navlinkObj.map((val, index) => {
                return <React.Fragment key={index}>
                  <p id="dayHeading">{val.title}</p>

                  <li>
                    <NavLink to={val.to} >{val.name}</NavLink>
                  </li>
                </React.Fragment>
              })
            }
          </ul>
        </nav>

        {/*  Child component */}
        {/* <main >
            <Outlet />
        </main> */}
        <div style={{marginLeft:"10vw",marginTop:"8vh"}}>
          <Outlet />
        </div>

      </div>

    </div>

  )
}

export default NavbarMain;
