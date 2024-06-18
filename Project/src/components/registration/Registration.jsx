import React, { useContext, useEffect, useRef, useState } from 'react';
import "./Registration.css";
import { Link, useNavigate } from 'react-router-dom';
// import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Users } from "../../App.js";
import { useFormik } from 'formik';
import * as  Yup from "yup";
import InputField from '../input_error_component/InputField.jsx';
import ErrorMessage from '../input_error_component/ErrorMessage.jsx';
import axios from 'axios';

function Registration() {

    const { setSampleData, sampleData, setIsRegister } = useContext(Users);

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            fname: "",
            email: "",
            password: "",
            confirmPassword: "",
            gender: "",
            dob: '',
            mob: '',
            country: "",
            interests: [],
            file: "",
        },

        validationSchema: Yup.object({
            fname: Yup.string()
                .max(15, "Must be 15 character or less")
                .matches(/^[a-zA-Z][a-zA-Z\s]*$/, "Invalid name")
                .required("Name is required"),

            email: Yup.string().max(300)
                .email("Invalid email address")
                .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Invalid email address")
                .test('email exists', 'Email Already Exist', function (value) {
                    const email = value;
                    if (sampleData.length > 0) {
                        const exitedRecordIndex = sampleData?.findIndex(record => record.email === email);
                        if (exitedRecordIndex !== -1) {
                            // Email already exists
                            return false;
                        }
                    }
                    return true; // Email doesn't exist
                })
                .required("Email is required"),

            password: Yup.string()
                .min(8, "Must be at least 8 charater")
                .max(16, "Must be less than 16 character")
                .matches(/[!@#$%^&*(),.?":{}|<>]/, "Must conatin at least on charcater")
                .matches(/[0-9]/, "Must contain at least one number")
                .matches(/[A-Z]/, "Must contain at least one Uppercase")
                .matches(/[a-z]/, "Must contain at least lowercase")
                .required("Password is required"),

            confirmPassword: Yup.string()
                .min(8, "Must be at least 8 charater")
                .max(16, "Must be less than 16 character")
                .matches(/[!@#$%^&*(),.?":{}|<>]/, "Must conatin at least on charcater")
                .matches(/[0-9]/, "Must contain at least one number")
                .matches(/[A-Z]/, "Must contain at least one Uppercase")
                .matches(/[a-z]/, "Must contain at least lowercase")
                .oneOf([Yup.ref('password')], 'Passwords must match')
                .required("Password is required"),

            gender: Yup.string()
                .oneOf(['male', 'female'], "Gender is required")
                .required("Gender is required"),

            dob: Yup.date()
                .max(new Date().toISOString().split("T")[0], "Must be upto today")
                .required("Date of birth required"),

            mob: Yup.string()
                .matches(/^[6-9]\d{9}$/, "Must be 10 digits")
               
                .required("Mobile number required"),


            country: Yup.string()
                .required("Select the country"),

            interests: Yup.array()
                .min(1, "select at least one")
                .required("Interest is required"),

            file: Yup.mixed()
                .required('File is required'),

        }),

        // validateOnBlur: false,
        onSubmit: (values, { resetForm }) => {
            const { fname, email, password, gender, mob, interests, country, dob, file } = values;

            const exitedRecordIndex = sampleData?.findIndex(record => record?.email === email);

            if (exitedRecordIndex !== -1) {
                toast.warning("Email already exists", {
                    position: "top-center",
                });

            } else {
                // console.log([...sampleData, { fname, email, password, gender, mob, interests, country, dob, file }]);
                // setSampleData([...sampleData, { ...values }]);

                const users = {
                    id: sampleData.length + 1,
                    fname: fname,
                    email: email,
                    password: password,
                    gender: gender,
                    mob: mob,
                    interests: interests,
                    country: country,
                    dob: dob,
                    file: file
                }
       
                setSampleData((prevUsers) => [...prevUsers, users]);

                // console.log("vales", values);
                setIsRegister(true);
                resetForm()
                return navigate("/login")
            }
        }
    })

    const fnameInput = useRef();

    //^ password Eye icon button
    const [passwordEye, setPasswordEye] = useState("password");
    const [cnfpasswordEye, setCnfPasswordEye] = useState("password");

    useEffect(() => {
        fnameInput.current.focus();
    }, [])


    //* togggle function
    const togglePasswordVisibility = (eyeType, setEyeType) => {
        setEyeType(eyeType === "password" ? "text" : "password");
    };

    //^ style
    const style1 = {
        marginTop: "4px", marginBottom: "10px", width: "80%", padding: "5px"
    };

    return (
        <div className='d-flex justify-content-center mt-5'>
            <ToastContainer />
            <div className='col-sm-10 col-md-8 col-lg-6 border bg-white shadow pb-3 mb-3 '>
                <form onSubmit={(e) => formik.handleSubmit(e)} onReset={formik.handleReset} className='ms-5 registerForm'>

                    <h3 className='mb-2 pt-3 me-4 text-center'>Signup</h3>
                    <div className='container'>

                        <div className='row' style={{ marginLeft: "18px", marginTop: "5px" }}>
                            <div className='col-12 col-xs-6 col-sm-6 col-md-6'>
                                <InputField
                                    label="Name*"
                                    id="fname"
                                    name="fname"
                                    type="text"
                                    value={formik.values.fname}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder='Enter a name'
                                    ref={fnameInput}
                                    style={style1}
                                />
                                <ErrorMessage touched={formik.touched?.fname} error={formik.errors.fname} />
                            </div>

                            <div className='col-12 col-xs-6 col-sm-6 col-md-6'>
                                <InputField
                                    label="Email*"
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder='abcd@example.com'
                                    style={style1}
                                />
                                <ErrorMessage touched={formik.touched?.email} error={formik.errors.email} />
                            </div>
                        </div>

                        <div className='row' style={{ marginLeft: "18px", marginTop: "5px" }}>
                            <div className='col-12 col-xs-6 col-sm-6 col-md-6'>
                                <InputField
                                    label="Password*"
                                    id="password"
                                    name="password"
                                    type={passwordEye}
                                    value={formik.values?.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder='Enter password'
                                    style={style1}
                                    toggleVisibility={() => togglePasswordVisibility(passwordEye, setPasswordEye)}
                                    eyeType={passwordEye}
                                    withEyeIcon
                                />
                                <ErrorMessage touched={formik.touched?.password} error={formik.errors.password} />
                            </div>

                            <div className='col-12 col-xs-6  col-sm-6 col-md-6'>
                                <InputField
                                    label="Confirm Password*"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type={cnfpasswordEye}
                                    value={formik.values?.confirmPassword}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder='Enter confirm Password'
                                    style={style1}
                                    toggleVisibility={() => togglePasswordVisibility(cnfpasswordEye, setCnfPasswordEye)}
                                    eyeType={cnfpasswordEye}
                                    withEyeIcon
                                    onPaste={(e) => { e.preventDefault(); return false }}
                                />
                                <ErrorMessage touched={formik.touched?.confirmPassword} error={formik.errors.confirmPassword} />
                            </div>
                        </div>

                        <div className='row' style={{ marginLeft: "18px", marginTop: "5px" }}>
                            <div className='col-12 col-xs-6 col-sm-6 col-md-6'>
                                <label htmlFor="gender">Gender*</label><br />
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    id="male"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{ marginLeft: "5px" }}
                                />
                                <label htmlFor="male" style={{ marginRight: "10px" }}>Male</label> <br />

                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    id="female"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{ marginLeft: "5px" }}
                                />
                                <label htmlFor="female">Female</label>
                                <ErrorMessage touched={formik.touched?.gender} error={formik.errors.gender} />
                            </div>

                            <div className='col-12 col-xs-6 col-sm-6 col-md-6'>
                                <InputField
                                    label="Date Of Birth*"
                                    id="dob"
                                    name="dob"
                                    type="date"
                                    value={formik.values?.dob}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={style1}
                                />
                                <ErrorMessage touched={formik.touched.dob} error={formik.errors.dob} />
                            </div>
                        </div>

                        <div className='row' style={{ marginLeft: "18px", marginTop: "5px" }}>
                            <div className='col-12 col-xs-6 col-sm-6 col-md-6'>
                                <InputField
                                    label="Mobile Number*"
                                    id="mob"
                                    name="mob"
                                    type="text"
                                    value={formik.values.mob}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder='Enter mobile number'
                                    style={style1}
                                />
                                <ErrorMessage touched={formik.touched?.mob} error={formik.errors.mob} />
                            </div>

                            <div className='col-12 col-xs-6 col-sm-6 col-md-6'>
                                <label htmlFor="country">Country*</label><br />
                                <select
                                    name="country"
                                    id="country"
                                    value={formik.values.country}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={style1}
                                >
                                    <option value="">Select a country</option>
                                    <option value="India">India</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Russia">Russia</option>
                                </select>
                                <ErrorMessage touched={formik.touched?.country} error={formik.errors.country} />
                            </div>
                        </div>

                        <div className='row' style={{ marginLeft: "18px", marginTop: "5px" }}>
                            <div className='col-12 col-xs-6 col-sm-6 col-md-6'>

                                <label>Interested Products* </label> <br />
                                <label style={{ display: "inline-block", marginRight: "10px" }}>
                                    <input
                                        type="checkbox"
                                        name="interests"
                                        value="Electronics"
                                        checked={formik.values.interests.includes('Electronics')}
                                        onChange={formik.handleChange}
                                        className='ms-2'
                                    />
                                    Electronics
                                </label>

                                <label style={{ display: "inline-block", marginRight: "10px" }}>
                                    <input
                                        type="checkbox"
                                        name="interests"
                                        value="Furniture"
                                        checked={formik.values.interests.includes('Furniture')}
                                        onChange={formik.handleChange}
                                        className='ms-2'
                                    />
                                    Furniture
                                </label>

                                <label style={{ display: "inline-block", marginRight: "10px" }}>
                                    <input
                                        type="checkbox"
                                        name="interests"
                                        value="Beauty Products"
                                        checked={formik.values.interests.includes('Beauty Products')}
                                        onChange={formik.handleChange}
                                        className='ms-2'
                                    />
                                    Beauty Products
                                </label>
                                <ErrorMessage touched={formik.touched?.interests} error={formik.errors.interests} />
                            </div>

                            {/* Image */}
                            <div className='col-12 col-xs-6 col-sm-6 col-md-6'>
                                <InputField
                                    label="Upload a Image*"
                                    id="file"
                                    name="file"
                                    type="file"
                                    accept="image/*"
                                    onChange={(event) => {
                                        const file = event.currentTarget.files[0];
                                        const reader = new FileReader();
                                        reader.onloadend = () => {
                                            // formik.setFieldValue('file', file);
                                            formik.setFieldValue('file', reader.result);

                                        };
                                        reader.readAsDataURL(file);
                                    }}
                                    onBlur={formik.handleBlur}
                                    style={style1}
                                />
                                <ErrorMessage touched={formik.touched.file} error={formik.errors.file} />
                            </div>
                        </div>

                        <div className='row mt-2' style={{ marginLeft: "8vw", marginTop: "5px" }}>
                            <div className='col-12 col-xs-6 col-sm-12 col-md-12'>
                                <button type="submit" className='btn btn-success ms-3 px-5 py-2'>Register</button>
                                <button type="reset" className='btn btn-danger ms-5 px-5 py-2'>Reset</button><br />
                                <div className='mt-2'>
                                    <small className='ms-5'>Already have an account?
                                        <Link to="/login" className='ms-1'>Login</Link>
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Registration;