import React, { useLayoutEffect, useState } from 'react'

function FormHandling() {
    const [htmlFormData, setFormData] = useState([])

    const [fname, setFname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("male");
    const [mob, setMob] = useState("");
    const [filedata, setFiledata] = useState("");
    const [shortNote, setShortNote] = useState("");




    const [err, setErr] = useState("")

    const inputStyle = {
        marginLeft: "2vw",
    };

    useLayoutEffect(() => {
        document.body.style.backgroundColor = "#2596be"

        // cleup function
        return () => {
            document.body.style.backgroundColor = "";
        };
    }, []);

    const handlefname = (e) => {

        const value = e.target.value;
        // console.log(value);
        const reges = /^[a-zA-Z]+$/
        if (!reges.test(value) && value.trim() !== 0) {
            setErr("Enter the valid name")
            setFname("")
        } else {

            setFname(value)
            setErr("")
        }
    }

    const handleEmail = (e) => {
        const value = e.target.value;
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(value) && value.trim() !== 0) {
            setErr("Enter the valid email")
            setEmail("")
        } else {

            setEmail(value)
            setErr("")
        }

    }


    return (
        <>

            <div className='d-flex justify-content-center align-item-center mt-2 '>

                <div className='w-25 bg-white rounded shadow-lg' style={{ background: "" }}>

                    <form htmlFor="" className='needs-validation'>
                        <h3 className='mt-4'>Registration Form</h3>

                        {/* //& Name */}
                        <div className="mb-3 w-75 mt-2">
                            <label htmlFor="fname" className=" form-label " style={{ marginRight: "11rem" }}>Name</label>

                            <input type="text"
                                className={`form-control ${err ? 'is-invalid' : ''}`}
                                id="fname" name="fname" placeholder="Enter the name"
                                style={inputStyle}
                                required
                                onInput={handlefname}
                            />
                            <div className='invalid-feedback'>
                                {/* <p>enter a valid name </p> */}
                                {err !== "" ? <small>{err}</small> : ""}
                            </div>
                            {/* {fname} */}

                        </div>

                        {/* //& Email */}
                        <div className="mb-3 w-75">
                            <label htmlFor="email" className=" form-label"
                                style={{ marginRight: "8rem" }}>Email address</label>

                            <input type="email"
                                className={`form-control ${err ? 'is-invalid' : ''}`}
                                name='email' id="email" placeholder="name@example.com"
                                style={inputStyle} required
                                onInput={handleEmail}
                            />

                            <div className='invalid-feedback'>
                                {err !== "" ? <small>{err}</small> : ""}
                            </div>
                        </div>

                        {/* //& Password */}
                        <div className="mb-3 w-75 ">
                            <label htmlFor="password" className=" form-label" style={{ marginRight: "10rem" }}>Password</label>

                            <input type="password"
                                className={`form-control ${err ? 'is-invalid' : ''}`}
                                id="password" name="password"
                                style={inputStyle} required placeholder='**********' max={20} min={8} />

                            <div className='invalid-feedback'>
                                {err !== "" ? <small>{err}</small> : ""}
                            </div>

                        </div>

                        {/* //& Gender */}
                        <div className='w-75 d-flex mb-3 ms-5 '>
                            <label htmlFor="gender">Gender</label>

                            {/* //& male */}
                            <div className=" form-check ms-2">

                                <input
                                    className=" form-check-input 
                                border-dark" type="radio" id="Male" name="gender" value="male" />
                                <label className=" form-check-label" htmlFor='male'>
                                    Male
                                </label>
                            </div>

                            {/* //& Female */}
                            <div className=" htmlForm-check ms-2">

                                <input className=" form-check-input  border-dark" type="radio" id="female" name="gender" value="female" />
                                <label className=" form-check-label" htmlFor="female">
                                    Female
                                </label>
                            </div>

                            {err !== "" ? <small>{err}</small> : ""}
                        </div>

                        {/* //& Mobile Number */}
                        <div className="mb-3 w-75 ">
                            <label htmlFor="mob"
                                className=" form-label"
                                style={{ marginRight: "7rem" }}>Mobile Number</label>

                            <input type="mob"
                                className={`form-control ${err ? 'is-invalid' : ''}`}
                                id="mob" name="mob" max={10} min={10}
                                style={inputStyle} required placeholder="enter mobile number" />


                            <div className='invalid-feedback'>
                                {err !== "" ? <small>{err}</small> : ""}
                            </div>
                        </div>


                        {/* //& Add Note */}
                        <div className="mb-3 w-75 ">
                            <label htmlFor="short_note" className=" form-label"
                                style={{ marginRight: "9rem" }}>Add a Note</label>

                            <textarea
                                className={`form-control ${err ? 'is-invalid' : ''}`}
                                id="short_note" name="short_note" rows="3"
                                style={inputStyle} required placeholder='write a message'></textarea>

                            <div className='invalid-feedback'>
                                {err !== "" ? <small>{err}</small> : ""}
                            </div>
                        </div>

                        <button className='btn btn-success mb-3'>Submit</button>
                    </form >
                </div>

            </div >

        </>
    )
}

export default FormHandling;



// /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)       // email

// let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;     // password
// return pattern.test(password);