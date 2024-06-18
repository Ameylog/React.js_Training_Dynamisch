import React, { useEffect, useState } from 'react'

function Card2({ arrObj }) {

    const [originalData, setOriginalData] = useState([])

    useEffect(() => {
        setOriginalData(arrObj)
    }, [arrObj])

    const max = originalData?.reduce((max, p) => p.salary > max ? p.salary : max, originalData[0]?.salary)
    // console.log("Max:", max);

    const min = originalData?.reduce((min, p) => p.salary < min ? p.salary : min, originalData[0]?.salary)
    // console.log("min:-", min);

    return (

        <div className='mt-4  m-3 bg-success py-4 px-4'>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                
                {
                    originalData?.map((val, index) => {

                        return <div className="card  mt-3 shadow-sm ms-3"
                            style={{ width: "22vw", height: "35vh" }}
                            key={index}>


                            <div className="card-body">

                                {(max === min) ? "" : ((val.salary === min) ? <p className='bg-danger text-white w-100'>Lowest Salary</p> : "")}
                                {(max === min) ? "" : ((val.salary === max) ? <p className='bg-primary text-white w-100'>Highest Salary</p> : "")}

                                {/*// title */}
                                <h5 className="card-title text-capitalize"> {val.name}</h5>

                                <div className='d-flex justify-content-around mt-2 '>
                                    <p className='text-start '>
                                        <b> Age-</b> {val?.age}
                                    </p>

                                    <p className='text-end'>
                                        <b>Gender:- </b> {val?.gender}
                                    </p>
                                </div>

                                <div className='d-flex justify-content-around'>
                                    <p className='text-start '>
                                        <b>Education:-</b> {val.education}
                                    </p>
                                    <p className='text-end'>
                                        <b>Salary:- </b>{val?.salary}
                                    </p>
                                </div>

                                <div className='d-flex justify-content-around'>
                                    <p className='text-start'>
                                        <b>City:- </b>{val?.city}
                                    </p>
                                    <p className='text-end'>
                                        <b>Weight:- </b>{val?.weight}
                                    </p>
                                </div>
                            </div>

                        </div>
                    })
                }
            </div>

        </div>
    )
}

export default Card2;