import React, { useState } from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import InputComponent from './InputComponent';
import ErrorCompoennt from './ErrorCompoennt';


function FormFormikYup() {

    const formik = useFormik({
        validateOnBlur: true,
        initialValues: {
            fname: '',
            email: '',
            password: '',
            confirmPassword: '',
            mob: '',
            city: '',
            dob: null,
            gender: "",
            country: "",

        },
        // validate,
        validationSchema: Yup.object({
            fname: Yup.string()
                .max(15, "Must be 15 charcatre or less")
                .matches(/^[a-zA-Z][a-zA-Z\s]*$/, "Invalid name")
                .required("Name is required"),

            email: Yup.string()
                .email("Invalid email address")
                .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Invalid email address")
                .required("Email is required"),

            password: Yup.string()
                .min(8, "must be at least 8 charater")
                .max(16, "Must be less than 16 character")
                .matches(/[!@#$%^&*(),.?":{}|<>]/, "Must conatin at least on charcater")
                .matches(/[0-9]/, "Must contain at least one number")
                .matches(/[A-Z]/, "Must contain at least one Uppercase")
                .matches(/[a-z]/, "Must contain at least lowercase")
                .required("Password is required"),

            confirmPassword: Yup.string()
                .min(8, "must be at least 8 charater")
                .max(16, "Must be less than 16 character")
                .matches(/[!@#$%^&*(),.?":{}|<>]/, "Must conatin at least on charcater")
                .matches(/[0-9]/, "Must contain at least one number")
                .matches(/[A-Z]/, "Must contain at least one Uppercase")
                .matches(/[a-z]/, "Must contain at least lowercase")
                .oneOf([Yup.ref('password')], 'Passwords must match')
                .required("Confirm Password is required"),

            mob: Yup.string()
                .matches(/^\d{10}$/, "Must be 10 digits")
                .required("Mobile number required"),

            city: Yup.string()
                .matches(/^[a-zA-Z][a-zA-Z\s]*$/, "Invalid city name")
                .max(15, "Must be 15 charcatre or less")
                .required("City is required"),

            dob: Yup.date()
                .min("2000-01-01")
                .required("Date of birth required"),

            gender: Yup.string()
                .oneOf(['male', 'female'], "Gender is required")
                .required("Gender is required"),

            country: Yup.string()
                .required("Select the country"),

        }),

        // validateOnBlur: false,
        onSubmit: (values, { resetForm }) => {
            console.log(JSON.stringify(values, null, 2));
            alert(JSON.stringify(values, null, 2));
            console.log("Files", values);
            // console.log("dob", values.dob);
            resetForm();
        },
    });

    //^ password Eye icon button
    const [passwordEye, setPasswordEye] = useState("password")
    const [cnfpasswordEye, setCnfPasswordEye] = useState("password")

    return (
        <div className='d-flex justify-content-center '>
            <div className='bg-white w-md-25 w-lg-25 mt-1 pb-4 pt-3 col-10 col-sm-6 col-md-5 col-lg-4 border-1 shadow rounded'>

                <form action="" onSubmit={formik.handleSubmit} onReset={formik.handleReset}>

                    <h3>SignUp</h3>

                    {/* //*Name */}
                    <InputComponent
                        type={"text"}
                        id={"fname"}
                        name={"fname"}
                        formik={formik}
                        placeholder={"Enter your name"}
                        style={{ width: "15vw", height: "5vh" }}
                        labelName={"Name"}
                        labelStyle={{ marginRight: "12vw" }}
                    />

                    <ErrorCompoennt error={formik.errors.fname} />

                    {/* //* Email */}

                    <InputComponent
                        type={"email"}
                        id={"email"}
                        name={"email"}
                        formik={formik}
                        placeholder={"Enter your email address"}
                        style={{ width: "15vw", height: "5vh" }}
                        labelName={"Email Address"}
                        labelStyle={{ marginRight: "8.5vw" }}
                    />

                    <ErrorCompoennt error={formik.errors.email} />

                    {/* //* Password */}
                    <InputComponent
                        type={passwordEye}
                        id={"password"}
                        name={"password"}
                        formik={formik}
                        placeholder={"Enter your password"}
                        style={{ width: "15vw", height: "5vh" }}
                        labelName={"Password"}
                        labelStyle={{ marginRight: "10.5vw" }}
                    />

                    {passwordEye === "password" ?
                        <span style={{ position: "absolute", transform: "translateX(-23px)", }} >
                            <FaEyeSlash onClick={() => setPasswordEye("text")}
                            /></span>
                        : <span style={{ position: "absolute", transform: "translateX(-23px)", }} >
                            <FaEye onClick={() => setPasswordEye("password")} /></span>
                    }

                    <ErrorCompoennt error={formik.errors.password} />

                    {/* //* Confirm Password */}

                    <InputComponent
                        type={cnfpasswordEye}
                        id={"comfirmPassword"}
                        name={"confirmPassword"}
                        formik={formik}
                        placeholder={"Enter your confirm password"}
                        style={{ width: "15vw", height: "5vh" }}
                        labelName={"Confirm Password"}
                        labelStyle={{ marginRight: "7vw" }}
                    />
                    {cnfpasswordEye === "password" ?
                        <span style={{ position: "absolute", transform: "translateX(-23px)", }} >
                            <FaEyeSlash onClick={() => setCnfPasswordEye("text")}
                            /></span>
                        : <span style={{ position: "absolute", transform: "translateX(-23px)", }} >
                            <FaEye onClick={() => setCnfPasswordEye("password")} /></span>
                    }
                    <ErrorCompoennt error={formik.errors.confirmPassword} />

                    {/* //* Mobile */}

                    <InputComponent
                        type={"number"}
                        id={"mob"}
                        name={"mob"}
                        formik={formik}
                        placeholder={"Enter your mobile number"}
                        style={{ width: "15vw", height: "5vh" }}
                        labelName={"Mobile No"}
                        labelStyle={{ marginRight: "10vw" }}
                    />

                    <ErrorCompoennt error={formik.errors.mob} />

                    {/* //* City */}
                    <InputComponent
                        type={"text"}
                        id={"city"}
                        name={"city"}
                        formik={formik}
                        placeholder={"Enter your city name"}
                        style={{ width: "15vw", height: "5vh" }}
                        labelName={"City"}
                        labelStyle={{ marginRight: "13vw" }}
                    />
                    <ErrorCompoennt error={formik.errors.city} />


                    {/* //* Dob */}
                    <InputComponent
                        type={"date"}
                        id={"dob"}
                        name={"dob"}
                        formik={formik}
                        placeholder={"Enter your city name"}
                        style={{ width: "15vw", height: "5vh" }}
                        labelName={"Date of Birth"}
                        labelStyle={{ marginRight: "9vw" }}
                    />
                    <ErrorCompoennt error={formik.errors.dob} />


                    {/* //* Gender */}
                    {/* <div>
                        <label htmlFor="gender">Gender</label>

                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            id="male"
                            onChange={formik.handleChange}
                            style={{ marginLeft: "10px" }} />
                        <label htmlFor="male" style={{ marginLeft: "10px" }}>Male</label>

                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            id="gender"
                            onChange={formik.handleChange}
                            style={{ marginLeft: "10px" }} />
                        <label htmlFor="female" style={{ marginLeft: "10px" }}>Female</label>
                    </div>
                    {formik.errors.gender ? <div style={{ color: "red" }}>{formik.errors.gender}</div> : null} */}

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <label htmlFor='gender'>Gender</label> <br />
                        <InputComponent
                            type={"radio"}
                            id={"male"}
                            name={"gender"}
                            formik={formik}
                            style={{ marginLeft: "10px" }}
                            labelName={"Male"}
                            labelStyle={{ marginLeft: "10px" }}
                            value={"male"}

                        />

                        <InputComponent
                            type={"radio"}
                            id={"female"}
                            name={"gender"}
                            formik={formik}
                            style={{ marginLeft: "10px" }}
                            labelName={"Female"}
                            labelStyle={{ marginLeft: "10px" }}
                            value={"female"}

                        />
                    </div>
                    <ErrorCompoennt error={formik.errors.dob} />


                    {/* //* dropdown country */}
                    <div>
                        <select
                            id="country"
                            name="country"
                            onChange={formik.handleChange}
                            value={formik.values.country}
                            style={{ width: "15vw", height: "5vh" }} >

                            <option value="">Select Country</option>
                            <option value="India">India</option>
                            <option value="USA">United States</option>
                            <option value="UK">United Kingdom</option>
                            <option value="Canada">Canada</option>

                        </select>
                    </div>
                    {formik.errors.country ? <div style={{ color: "red" }}>{formik.errors.country}</div> : null}



                    {/* //* Checkbox */}
                     {/* <div>
                        <label>Interests:</label>
                        <label>
                            <input
                                type="checkbox"
                                name="interests"
                                value="java"
                                checked={formik.values.interests.includes('java')}
                                onChange={formik.handleChange}
                                className='ms-1'
                            />
                            Java
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="interests"
                                value="js"
                                checked={formik.values.interests.includes('js')}
                                onChange={formik.handleChange}
                                className='ms-1'
                            />
                            Js
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="interests"
                                value="python"
                                checked={formik.values.interests.includes('python')}
                                onChange={formik.handleChange}
                                className='ms-1'
                            />
                            Python
                        </label><br />
                        {formik.errors.interests ? <div style={{ color: "red" }}>{formik.errors.interests}</div> : null}
                    </div> */}


                    {/* //* File */}
                    {/* <div>
                        <label htmlFor="file" style={{ marginRight: "10vw" }}>Upload File</label><br />

                        <input
                            id="file"
                            name="file"
                            type="file"
                            style={{ width: "16vw" }}
                            onChange={(event) => formik.setFieldValue('file', event.currentTarget.files[0])}
                        />
                        {formik.errors.file ? <div style={{ color: "red" }}>{formik.errors.file}</div> : null}
                    </div>  */}

                

                    <div className='mt-4'>
                        <button type='submit' className='btn bg-success text-white'>Submit</button>
                        <button type='reset' className='btn bg-warning text-white ms-4'>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormFormikYup;
