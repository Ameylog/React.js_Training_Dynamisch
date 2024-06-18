import React, { useState } from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

//^ validation
// const validate = values => {
//     const errors = {};

//     if (!values.fname) {
//         errors.fname = "Name is required";
//     } else if (values.fname.length > 15) {
//         errors.fname = "Mush be 15 charachter or less";
//     }

//     if (!values.email) {
//         errors.email = "Email address required";
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email address';
//     }

//     if (!values.password) {
//         errors.password = "Password is required";
//     } else if (values.password < 8) {
//         errors.password = "Password must be min 8"
//     }

//     if (!values.mob) {
//         errors.mob = "Mobile number is required";
//     }

//     if (!values.city) {
//         errors.city = "City is required";
//     }

//     if (!values.dob) {
//         errors.dob = "Date of birth is required";
//     }

//     return errors;
// }

//^ Yup Validation


function FormikYupForm() {

    const formik = useFormik({
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
            interests: [],
            file: '',
            ageGroup: 'below18',
            customAge: '',

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

            interests: Yup.array()
                .min(1, "select at least one")
                .required("Interest is required"),

            file: Yup.mixed()
                .test('fileSize', 'File size is too large', (value) => {
                    if (!value) return true;
                    return value.size <= 1024 * 1024 * 2; // 2 MB
                })
                .test('fileType', 'Invalid file type', (value) => {
                    if (!value) return true;
                    return ['image/jpeg', 'image/png', 'application/pdf'].includes(value.type);
                }).required("File is required"),

            ageGroup: Yup.string().required('Please select an age group'),
            customAge: Yup.string().when('ageGroup', (ageGroup, customAge) => {
                if (ageGroup === 'above18') {
                    return customAge.required('Enter your PAN Number');
                }
                return customAge;
            })
        }),

        onSubmit: (values, { resetForm }) => {
            console.log(JSON.stringify(values, null, 2));
            console.log("Files", values.file);
            console.log("dob", values.dob);
            resetForm()
        },
    });

    //^ password Eye icon button
    const [passwordEye, setPasswordEye] = useState("password")
    const [cnfpasswordEye, setCnfPasswordEye] = useState("password")

    return (
        <div className='d-flex justify-content-center '>
            <div className='bg-white shadow w-md-25 w-lg-25 mt-1 pb-4 pt-3 col-10 col-sm-6 col-md-5 col-lg-4 rounded'>

                <form action="" onSubmit={formik.handleSubmit} onReset={formik.handleReset}>

                    <h3>SignUp</h3>

                    {/* //*Name */}
                    <label htmlFor="fname" style={{ marginRight: "12vw" }}>Name</label> <br />
                    <input
                        type="text"
                        id="fname"
                        name='fname'
                        onChange={formik.handleChange}


                        value={formik.values.fname}
                        style={{ width: "15vw", height: "5vh" }}
                        placeholder="Enter your name"
                    />
                    {formik.errors.fname ? <div style={{ color: "red" }}>{formik.errors.fname}</div> : null}

                    {/* //* Email */}
                    <label htmlFor="email" style={{ marginRight: "8.5vw" }}>Email Address</label> <br />
                    <input
                        type="email"
                        id="email"
                        name='email'
                        onChange={formik.handleChange}

                        value={formik.values.email}
                        style={{ width: "15vw", height: "5vh" }}
                        placeholder="Enter your email address"
                    />
                    {formik.errors.email ? <div style={{ color: "red" }}>{formik.errors.email}</div> : null}

                    {/* //* Password */}
                    <label htmlFor="password" style={{ marginRight: "10.5vw" }}>Passwrod</label><br />
                    <input
                        type={passwordEye}
                        id="passsword"
                        name='password'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        style={{ width: "15vw", height: "5vh" }}
                        placeholder="Enter your password"
                    />
                    {passwordEye === "password" ?
                        <span style={{ position: "absolute", transform: "translateX(-23px)", }} >
                            <FaEyeSlash onClick={() => setPasswordEye("text")}
                            /></span>
                        : <span style={{ position: "absolute", transform: "translateX(-23px)", }} >
                            <FaEye onClick={() => setPasswordEye("password")} /></span>
                    }

                    {formik.errors.password ? <div style={{ color: "red" }}>{formik.errors.password}</div> : null}

                    {/* //* Confirm Password */}
                    <label htmlFor="comfirmPassword" style={{ marginRight: "7vw" }}>Confirm Passwrod</label><br />
                    <input
                        type={cnfpasswordEye}
                        id="comfirmPassword"
                        name='confirmPassword'
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword}
                        style={{ width: "15vw", height: "5vh" }}
                        placeholder="Enter your confirm password"
                    />
                    {cnfpasswordEye === "password" ?
                        <span style={{ position: "absolute", transform: "translateX(-23px)", }} >
                            <FaEyeSlash onClick={() => setCnfPasswordEye("text")}
                            /></span>
                        : <span style={{ position: "absolute", transform: "translateX(-23px)", }} >
                            <FaEye onClick={() => setCnfPasswordEye("password")} /></span>
                    }
                    <br />
                    {formik.errors.confirmPassword ? <div style={{ color: "red" }}>{formik.errors.confirmPassword}</div> : null}

                    {/* //* Mobile */}
                    <label htmlFor="mob" style={{ marginRight: "10vw" }}>Mobile No</label> <br />
                    <input
                        type="number"
                        id="mob"
                        name='mob'
                        onChange={formik.handleChange}

                        value={formik.values.mob}
                        style={{ width: "15vw", height: "5vh" }}
                        placeholder="Enter your mobile number"
                    />

                    <br />
                    {formik.errors.mob ? <div style={{ color: "red" }}>{formik.errors.mob}</div> : null}

                    {/* //* City */}
                    <label htmlFor="city" style={{ marginRight: "13vw" }}>City</label> <br />
                    <input
                        type="text"
                        id="city"
                        name='city'
                        onChange={formik.handleChange}

                        value={formik.values.city}
                        style={{ width: "15vw", height: "5vh" }}
                        placeholder="Enter your city"
                    /> <br />
                    {formik.errors.city ? <div style={{ color: "red" }}>{formik.errors.city}</div> : null}

                    {/* //* Dob */}
                    <label htmlFor="dob" style={{ marginRight: "9vw" }}>Date of Birth</label> <br />
                    <input
                        type="date"
                        id="dob"
                        name='dob'
                        onChange={formik.handleChange}
                        value={formik.values.dob}
                        style={{ width: "15vw", height: "5vh" }}
                    /> <br />
                    {formik.errors.dob ? <div style={{ color: "red" }}>{formik.errors.dob}</div> : null}

                    {/* //* Gender */}
                    <div>
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
                    {formik.errors.gender ? <div style={{ color: "red" }}>{formik.errors.gender}</div> : null}

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
                    <div>
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
                    </div>


                    {/* //* File */}
                    <div>
                        <label htmlFor="file" style={{ marginRight: "10vw" }}>Upload File</label><br />
                        <input
                            id="file"
                            name="file"
                            type="file"
                            style={{ width: "16vw" }}
                            onChange={(event) => formik.setFieldValue('file', event.currentTarget.files[0])}
                        />
                        {formik.errors.file ? <div style={{ color: "red" }}>{formik.errors.file}</div> : null}
                    </div>

                    {/* //* Age */}
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="ageGroup"
                                value="below18"
                                onChange={formik.handleChange} />
                            Below 18
                        </label>
                        <label style={{ marginLeft: "5px" }}>
                            <input
                                type="radio"
                                name="ageGroup"
                                value="above18"
                                onChange={formik.handleChange} />

                            Above 18
                        </label>
                    </div>

                    {formik.values.ageGroup === 'above18' && (
                        <div>
                            <input
                                type="text"
                                name="customAge"
                                onChange={formik.handleChange}
                                placeholder='Enter your PAN number' />
                            {formik.errors.customAge ? <div style={{ color: "red" }}>{formik.errors.customAge}</div> : null}
                        </div>
                    )}

                    <div className='mt-4'>
                        <button type='submit' className='btn bg-success text-white'>Submit</button>
                        <button type='reset' className='btn bg-warning text-white ms-4'>Reset</button>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default FormikYupForm
