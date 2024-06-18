import React from 'react'
import { useNavigate } from 'react-router-dom'


function Home() {

    const navigate = useNavigate();

    const handleClick = () => {
        return navigate("/about");
    }

    return (
        <div>
            <div>
                <h3>Home Page</h3>

                <p style={{ marginTop: "15vh" }}>
                    <i>Know more about us</i>,<br />
                    <i>Click below</i>
                </p>

                <button onClick={handleClick}
                    style={{
                        border: "none",
                        background: "#C65BCF",
                        borderRadius: "5%",
                        color: "white",
                        padding: "10px 15px"
                    }}>
                    About
                </button>
             </div>

             
        </div>
    )
}

export default Home
