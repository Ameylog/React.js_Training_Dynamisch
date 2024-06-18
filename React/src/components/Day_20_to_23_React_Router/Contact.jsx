import React from 'react'
import { useParams } from 'react-router-dom'

function Contact() {

    const {contactId,userName} = useParams();

    return (
        <div>
            <div>
                <h3>Contact Detail</h3>

                <p>UserId:-{contactId}</p>
                <p>userName:-{userName}</p>

                <p>Email: info@example.com  </p>

                <p>Phone: +91 1274859646 </p>

                <p>Address:- 123 Main Street, <br />
                    Pune, Maharashtra, India <br />
                </p>

                <p>Fax: +91 9886543510</p>
            </div>
        </div>
    )
}

export default Contact
