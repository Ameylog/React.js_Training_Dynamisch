import React, { useLayoutEffect, useState } from 'react'
import Card from './Card';

import data from "./data"


function CardDatas() {

    const [arrObj, setArrObj] = useState(data);

    const handleSelectCity = (e) => {
        const values = e.target.value
        setArrObj(
            data.filter((val) => {
                return val.city.toLowerCase() === values.toLowerCase()
            })
        )

    }

    const handleSelectAge = (e) => {

        const values = e.target.value
        const [min, max] = values.split("-").map(Number);

        const result = data.filter((val) => {
            return val?.age >= min && val?.age <= max
        })
        setArrObj(result)
    }

    const searchInput = (e) => {
        const Values = e.target.value
        const res = data.filter((val, index) => val?.name.toLowerCase().includes(Values.toLowerCase()))
        setArrObj(res)
    }

    const handleRadio = (e) => {
        const values = e.target.value
        const res = data.filter((val) => val?.gender.toLowerCase() === values.toLowerCase())
        setArrObj(res)
    }

    const handleSelectWeight = (e) => {
        const values = e.target.value
        const [min, max] = values.split("-").map(Number);

        const result = data?.filter((val) => {
            return val?.weight >= min && val?.weight < max
        })
        setArrObj(result)
        // console.log(result);
    }

    const handleSelectSalary = (e) => {
        const values = e.target.value
        const [min, max] = values.split("-").map(Number);

        const result = data?.filter((val) => {
            return val?.salary >= min && val?.salary <= max
        })
        // console.log(result);
        setArrObj(result)
    }

    const handleSelectEducation = (e) => {
        const values = e.target.value
        setArrObj(
            data.filter((val) => {
                return val.education.toLowerCase() === values.toLowerCase()
            })
        )
    }

    // useLayoutEffect(() => {
    //     // document.body.style.backgroundColor = "#dc3545"

    //     return () => {
    //         // document.body.style.backgroundColor = "";
    //     };
    // }, []);

    return (
        <div >
            <h3>Card Data Filtering</h3>
            <div className='mt-3 d-flex justify-content-center align-items-center'>

                <div className='d-flex'>
                    {/* Search Field */}
                    <div className='ms-3'>
                        <label htmlFor="searchField">Search</label>
                        <input type="search" onInput={searchInput} placeholder='search name' id="searchField" name="searchField" className="form-control" />
                    </div>

                    <div className='ms-4'>
                        <label htmlFor='gender'>Select Gender </label>
                        <br />
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            id="male"
                            onChange={handleRadio} className='form-input' />
                        <label htmlFor="male" className='ms-1'>Male</label>
                        <br />

                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            id="female"
                            className='form-input ms-3'
                            onChange={handleRadio}
                        />
                        <label htmlFor="female" className='ms-1'>Female</label>
                    </div>

                    {/* select city */}
                    <div className='ms-2 dropdowm'>
                        <label htmlFor="select_city">Select the City </label>

                        <select
                            name="select_city"
                            className="form-select"
                            id="select_city"
                            onChange={handleSelectCity} defaultValue={"select"}>

                            <option disabled value="select">Select</option>

                            <option value="alibag">Alibag</option>
                            <option value="pune">Pune</option>
                            <option value="jalna">Jalna</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Kolkata">Kolkata</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Jaipur">Jaipur</option>
                            <option value="Ahmedabad">Ahmedabad</option>
                            <option value="Lucknow">Lucknow</option>
                            <option value="Nagpur">Nagpur</option>
                            <option value="Indore">Indore</option>
                            <option value="Surat">Surat</option>
                            <option value="Varanasi">Varanasi</option>
                            <option value="Chandigarh">Chandigarh</option>

                        </select>

                    </div>

                    {/* select age */}
                    <div className='ms-3'>
                        <label htmlFor="select_age">Select the Age</label>

                        <select
                            name="select_age"
                            id="select_age"
                            className="form-select "
                            onChange={handleSelectAge}
                            defaultValue={"select"}>
                            <option disabled
                                value="select">Select</option>

                            <option value="20-30">20-30</option>
                            <option value="31-40">31-40</option>
                            <option value="41-50">41-50</option>
                            <option value="51-60">51-60</option>
                        </select>
                    </div>

                    {/* select Weight */}
                    <div className='ms-3'>
                        <label htmlFor="select_weight">Select the Weight (kg)</label>

                        <select
                            name="select_weight"
                            id="select_weight"
                            className="form-select "
                            onChange={handleSelectWeight}
                            defaultValue={"select"}>

                            <option disabled
                                value="select">Select</option>
                            <option value="30-40">30-40</option>
                            <option value="40-50">40-50</option>
                            <option value="50-60">50-60</option>
                            <option value="60-70">60-70</option>
                            <option value="70-80">70-80</option>
                            <option value="80-90">80-90</option>
                            <option value="90-100">90-100</option>
                        </select>
                    </div>

                    <div className='ms-3'>
                        <label htmlFor="select_salary">Select the salary (Rs)</label>

                        <select
                            className="form-select"
                            name="select_salary"
                            id="select_salary"
                            onChange={handleSelectSalary}
                            defaultValue={"select"}>

                            <option disabled value="select">Select</option>
                            <option value="10000-20000">10000-20000</option>
                            <option value="21000-30000">21000-30000</option>
                            <option value="31000-40000">31000-40000</option>
                            <option value="41000-50000">41000-50000</option>
                            <option value="51000-60000">51000-60000</option>
                            <option value="61000-70000">61000-70000</option>
                            <option value="71000-80000">71000-80000</option>
                            <option value="81000-90000">81000-90000</option>
                            <option value="91000-100000">91000-100000</option>

                        </select>
                    </div>

                    {/* select education */}
                    <div className='ms-2 dropdowm'>
                        <label htmlFor="select_education">Select the Education </label>

                        <select
                            name="select_education"
                            className="form-select"
                            id="select_education"
                            onChange={handleSelectEducation}
                            defaultValue={"select"}>

                            <option disabled value="select">Select</option>

                            <option value="BE">BE</option>
                            <option value="ME">ME</option>
                            <option value="B.Tech">B.Tech</option>
                            <option value="M.Tech">M.Tech</option>
                            <option value="B.Com">B.Com</option>
                            <option value="BCA">BCA</option>
                            <option value="MCA">MCA</option>
                            <option value="BBA">BBA</option>
                            <option value="MBA">MBA</option>
                            <option value="B.Sc">B.Sc</option>
                            <option value="M.Sc">M.Sc</option>
                            <option value="PhD">PhD</option>
                        </select>
                    </div>

                </div>

                <button type="reset" className=' btn bg-success ms-4 border-0 rounded text-white py-2 '
                    onClick={(e) => setArrObj(data)}>Reset</button>


            </div>
            <Card arrObj={arrObj} />

        </div>
    )
}

export default CardDatas;
