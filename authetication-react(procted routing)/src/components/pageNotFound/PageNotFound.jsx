import React from 'react'

function PageNotFound() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center", marginTop: "30vh" }}>
            <div >
                <h3 style={{textAlign:"center"}}>404 error</h3>
                <div>
                    <p style={{ fontSize: "x-large", marginTop: "10px" }}>Page Not Found</p>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound
