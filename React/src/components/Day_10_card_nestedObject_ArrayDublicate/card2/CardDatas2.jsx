import React, { useEffect, useState } from 'react'
import Card2 from './Card2';
import data from "./data"
import { ageArray, salaryArray, weightArray, educationArray, cityArray } from "./data"

// console.log(educationValues);
// console.log(ageArray);
function CardDatas2() {

    const [arrObj, setArrObj] = useState(data);

    const [nameOption, setNameOption] = useState('');
    const [genderOption, setGenderOption] = useState("")
    const [ageOption, setAgeOption] = useState('');
    const [cityOption, setCityOption] = useState('');
    const [salaryOption, setSalaryOption] = useState('');
    const [weightOption, setWeightOption] = useState('');
    const [educationOption, setEducationOption] = useState('');


    useEffect(() => {

        // console.log(data);
        let res = data?.filter((val) => {
            
            if (nameOption !== '' && !val.name.toLowerCase().includes(nameOption)) {
                return false;
            }
            if (genderOption !== '' && val.gender?.toLowerCase() !== genderOption?.toLowerCase()) {
                return false;
            }
            if (cityOption !== '' && val.city.toLowerCase() !== cityOption.toLowerCase()) {
                return false;
            }
            if (ageOption !== '' && parseInt(val.age) !== parseInt(ageOption)) {
                return false;
            }
            if (salaryOption !== '' && parseInt(val.salary )!== parseInt(salaryOption)) {
                return false;
            }
            if (weightOption !== '' && parseInt(val.weight) !== parseInt(weightOption)) {
                return false;
            }
            if (educationOption !== '' && val.education.toLowerCase() !== educationOption.toLowerCase()) {
                return false;
            }
            return true;
        })

        console.log(res);
        setArrObj([...res]);

    }, [nameOption, cityOption, ageOption, genderOption, educationOption, salaryOption, weightOption])


    const handleSelectCity = (e) => {
        const values = e.target.value.toLowerCase()
        setCityOption(values)
    }

    const handleSelectAge = (e) => {
        const values = e.target.value
        setAgeOption(values)
    }

    const searchInput = (e) => {
        const values = e.target.value
        console.log(values);
        setNameOption(values)
    }

    const handleRadio = (e) => {
        const values = e.target.value
        setGenderOption(values)
    }

    const handleSelectWeight = (e) => {
        const values = e.target.value
        // console.log("values:- ", values);
        setWeightOption(values)
    }

    const handleSelectSalary = (e) => {
        const values = e.target.value
        console.log(values);
        setSalaryOption(values)
    }

    const handleSelectEducation = (e) => {
        const values = e.target.value
        setEducationOption(values)
    }

    const handleReset = () => {
        setAgeOption("")
        setEducationOption("")
        setGenderOption("")
        setSalaryOption("")
        setCityOption("")
        setNameOption("")
        setArrObj(data)
        setWeightOption("")
    }

    return (
        <>
            <div className='mt-3 bg-danger text-white'>

                <div className='d-flex'>
                    {/* Search Field */}
                    <div className='ms-3'>
                        <label htmlFor="searchField">Search</label>
                        <input type="search"
                            onInput={searchInput}
                            placeholder='search name'
                            id="searchField"
                            name="searchField"
                            className="form-control"
                            value={nameOption} />
                    </div>

                    {/* Gender */}
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
                            value={cityOption}
                            onChange={handleSelectCity}
                        >
                            <option disabled value="">Select</option>
                            {
                                cityArray?.map((val, index) => <option key={index} value={val} className='text-capitalize'>{val}</option>)
                            }


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
                            value={ageOption}>
                            <option value="" disabled >Select an age</option>
                            {
                                ageArray?.map((val, index) => <option key={index} value={val}>{val}</option>)
                            }
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
                            value={weightOption}>

                            <option disabled
                                value="">Select</option>
                            {
                                weightArray?.map((val, index) => <option key={index} value={val}>{val}</option>)
                            }
                        </select>
                    </div>

                    {/* Select salary */}
                    <div className='ms-3'>
                        <label htmlFor="select_salary">Select the salary (Rs)</label>

                        <select
                            className="form-select"
                            name="select_salary"
                            id="select_salary"
                            onChange={handleSelectSalary}
                            value={salaryOption}>

                            <option disabled value="">Select</option>
                            {
                                salaryArray?.map((val, index) => <option key={index} value={val}>{val}</option>)
                            }

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
                            value={educationOption}>

                            <option disabled value="">Select</option>
                            {
                                educationArray?.map((val, index) => <option key={index} value={val}>{val}</option>)
                            }

                        </select>
                    </div>

                </div>

                <button type="reset" className=' btn bg-warning ms-4 border-0 rounded  py-2 '
                    onClick={handleReset}>Reset
                </button>


                <Card2 arrObj={arrObj} />

            </div >

        </>
    )
}

export default CardDatas2;
