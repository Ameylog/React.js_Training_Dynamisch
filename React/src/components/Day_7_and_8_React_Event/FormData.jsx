import React, { useState } from 'react'

function FormData() {

    const [data, setDate] = useState({
        fname: "",
        email: "",
        dob: "",
        mob: ""
    })

    const [record, setRecords] = useState([]);

    const hanlderChange = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target
        setDate({ ...data, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setRecords(prev => [...prev, data])
        setDate({
            fname: "",
            email: "", 
            dob: "",
            mob: "",
            city:""
        })
    }

    const style1 = {
        marginTop: "10px",
        marginBottom: "10px"

    }

    return (
        <div>
            <div className=' border border-0 bg-white shadow-lg' style={{marginLeft:"20vw",width:"25vw"}}>
                {/* {console.log(data)} */}

                <form action="" onSubmit={(e) => handleSubmit(e)} className='ms-1 me-1'>

                    <h3 className='mt-3 mb-2 pt-3'>Registration form</h3>

                    <input type="text" id='fname'
                        name="fname"
                        onChange={hanlderChange} placeholder='name'
                        style={style1}
                        value={data.fname}
                        required
                    />
                    <br />

                    <input type="email"
                        id="email" name='email'
                        onChange={hanlderChange} placeholder='email'
                        style={style1}
                        value={data.email}
                        required
                    />
                    <br />

                    <input type="date" id='dob'
                        name="dob"
                        onChange={hanlderChange} placeholder='dob'
                        style={style1}
                        value={data.dob}
                        required
                    />
                    <br />

                    <input type="tel"
                        id="mob" name="mob"
                        onChange={hanlderChange} placeholder='mobile number'
                        style={style1}
                        required
                        value={data.mob}
                        maxLength={10}
                        minLength={10}
                    />
                    <br />

                    <input type="text"
                        id='city' name='city'
                        onChange={hanlderChange} placeholder='city'
                        style={style1}
                        value={data.city}
                        required
                    />

                    <br /><br />
                    <button
                        type='submit'
                        className='bg-warning border-0 mb-3 py-2 px-3 rounded'>
                        Submit
                    </button>

                    <button
                        type='reset'
                        className='bg-success border-0 mb-3 mx-2 py-2 px-3 rounded text-white'>
                        Reset
                    </button>
                </form>
            </div>

            <table className="table mt-4" border={{ border: "1px solid black" }} style={{marginLeft:"10vw",width:"50vw"}}>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Date of Birth</th>
                        <th scope="col">Mobile No</th>
                        <th scope="col">City</th>
                    </tr>
                </thead>
                <tbody>
                    {record.map((val, index) => {
                        return (
                            <tr key={index}>
                                <td>{val.fname}</td>
                                <td>{val.email}</td>
                                <td>{val.dob}</td>
                                <td>{val.mob}</td>
                                <td>{val.city}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default FormData;
