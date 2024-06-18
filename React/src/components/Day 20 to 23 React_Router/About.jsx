import React from 'react'
import { useLocation } from 'react-router-dom'

function About() {

    const location = useLocation();   // return location object that can conatin current path ,URL, search ,state

    return (
        <div>
            <div>
                <h3>About Page</h3>

                <div style={{ width: "60vw", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "20%" }}>
                    <p style={{ textAlign: "justify", fontSize: "medium", marginTop: "10px" }}>
                        JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.
                    </p>


                </div>

                <br /><br />
                {/* <p>Location is {location.key}</p> */}
                <p>Current path :- {location.pathname}</p>
                <p>Current search :- {location.search}</p>
                <p>Current hash route:-  {location.hash}</p>
                <p>Current State:-  {location.state}</p>
                <p>Current key:-  {location.key}</p>


            </div>

        </div>
    )
}

export default About;
