import React, { useEffect, useState } from 'react'

function Resize() {
    const [size, setSize] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth)

        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);

        }
    }, []);

    return (
        <div>
            <h3>Window Resize Event</h3><br />
            
            <h4>Window width: {size}px</h4>
            {size > 768 ? (<p>This is a wis screen layout</p>) : (<p>This is mobile-View.</p>)}


        </div>
    )
}

export default Resize
