import React, { useContext, useEffect, useRef, useState } from 'react';
import "./Registration.css";
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Users } from "../../App.js";

function Registration() {

    const {setSampleData, sampleData} =useContext(Users);

    const navigate=useNavigate();

    const [data, setDate] = useState({
        fname: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const fnameInput=useRef();
    

    //^ All form Error
    const [errors, setErrors] = useState({});

    //^ password Eye icon button
    const [passwordEye, setPasswordEye] = useState("password");
    const [cnfpasswordEye, setCnfPasswordEye] = useState("password");


    useEffect(()=>{
        fnameInput.current.focus();
    },[])

    //*------------------------ Validation Functions ------------
    //     //^ first Name Validation function
    const isValidFname = (firstName) => {
        const fnameRegex = /^\s*[a-zA-Z]+\s*$/;
        return fnameRegex.test(firstName);
    }

    //^ Email Validation Funtion
    const isValidEmail = (email) => {
        const emailRegex = /^\S+@\S+\.\S+$/;
        return emailRegex.test(email);
    };

    //^ Password validation
    const isValidPassword = (password) => {
        const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
        const numberRegex = /[0-9]/;
        const upperCaseRegex = /[A-Z]/;
        const lowerCaseRegex = /[a-z]/;

        const err = [];

        if (password.length < 8) {
            err.push("Password must be at least 8 characters long");
        }
        if (!symbolRegex.test(password)) {
            err.push("Password must contain at least one symbol");
        }
        if (!numberRegex.test(password)) {
            err.push("Password must contain at least one number");
        }
        if (!upperCaseRegex.test(password)) {
            err.push("Password must contain at least one uppercase letter");
        }
        if (!lowerCaseRegex.test(password)) {
            err.push("Password must contain at least one lowercase letter");
        }

        return err;
    };

    //* ------------- Form Validation ---------------------------
    const validateForm = () => {
        let newErrors = {};
        //^ First Name
        if (!data.fname) {
            newErrors.fname = "First name is required";
        } else if (!isValidFname(data.fname)) {
            newErrors.fname = "Invalid name";
        }
        //^ Email
        if (!data.email) {
            newErrors.email = "Email is required";
        } else if (!isValidEmail(data.email)) {
            newErrors.email = "Invalid email";
        }
        //^ Password
        if (!data.password) {
            newErrors.password = "Password is required";
        } else {
            const passwordErrors = isValidPassword(data.password);
            if (passwordErrors.includes("Password must be at least 8 characters long")) {
                newErrors.password = "Password must be at least 8 characters long";
            } else if (passwordErrors.includes("Password must contain at least one symbol")) {
                newErrors.password = "Password must contain at least one symbol";
            } else if (passwordErrors.includes("Password must contain at least one number")) {
                newErrors.password = "Password must contain at least one number";
            } else if (passwordErrors.includes("Password must contain at least one uppercase letter")) {
                newErrors.password = "Password must contain at least one uppercase letter";
            } else if (passwordErrors.includes("Password must contain at least one lowercase letter")) {
                newErrors.password = "Password must contain at least one lowercase letter";
            }
        }
        //^ Confirm password
        if (!data.confirmPassword) {
            newErrors.confirmPassword = "Confirm password is required";
        } else if (data.confirmPassword !== data.password) {
            newErrors.confirmPassword = "Passwords must match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    //*--------------------- Email finder [Already email exits]-------------
    const existEmail = (email) => {
        return sampleData.some(record => record.email === email);
    };

    //*---------------------------handle Change--------------
    const hanlderChange = (e) => {
        const { name, value } = e.target;
        let newErrors = { ...errors };

        setDate((prevFormData) => ({
            ...prevFormData,
            [name]: value.trim(),
        }));

        switch (name) {
            case "fname":
                newErrors.fname = value.trim() === "" ? "First name is required" : !isValidFname(value.trim()) ? "Invalid name" : "";
                break;
            case "email":
                newErrors.email = value === "" ? "Email is required" : (existEmail(value) ? "Email already exists" : (!isValidEmail(value) ? "Please enter a valid email address" : ""));
                break;
            case "password":
                if (!value.trim()) {
                    newErrors.password = "Password is required";
                } else {
                    const passwordErrors = isValidPassword(value);
                    if (passwordErrors.includes("Password must be at least 8 characters long")) {
                        newErrors.password = "Password must be at least 8 characters long";
                    } else if (passwordErrors.includes("Password must contain at least one symbol")) {
                        newErrors.password = "Password must contain at least one symbol";
                    } else if (passwordErrors.includes("Password must contain at least one number")) {
                        newErrors.password = "Password must contain at least one number";
                    } else if (passwordErrors.includes("Password must contain at least one uppercase letter")) {
                        newErrors.password = "Password must contain at least one uppercase letter";
                    } else if (passwordErrors.includes("Password must contain at least one lowercase letter")) {
                        newErrors.password = "Password must contain at least one lowercase letter";
                    } else {
                        newErrors.password = "";
                    }
                }
                if (data.confirmPassword && value !== data.confirmPassword) {
                    newErrors.confirmPassword = "Passwords do not match";
                } else {
                    newErrors.confirmPassword = "";
                }
                break;
            case "confirmPassword":
                newErrors.confirmPassword = value.trim() === "" ? "Confirm password is required" : value !== data.password ? "Passwords must match" : "";
                break;
            default:
                break;
        }

        setErrors(newErrors);
    };

    //*--------------------------- handle Submit --------------------
    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = validateForm();
        if (isValid) {
            if (existEmail(data.email)) {
                toast.warning("Email already exists", {
                    position: "top-center",
                });
            } else {
                console.log([...sampleData,{...data}]);
                setSampleData([...sampleData, { ...data }]);
                toast.success("Registration successful", {
                    position: "top-center",
                });
                setDate({ fname: "", email: "", password: "", confirmPassword: "" });
                setErrors({});
                navigate("/");
            }
        } else {
            toast.warning("Invalid Form", {
                position: "top-center",

            })
        }
    };

    //*------------------------------ handle Reset ------------------
    const handleReset = () => {
        setDate({ fname: "", email: "", password: "", confirmPassword: "" });
    };

    //* togggle function
    const togglePasswordVisibility = (eyeType, setEyeType) => {
        setEyeType(eyeType === "password" ? "text" : "password");
    };

    //^ style
    const style1 = {
        marginTop: "4px", marginBottom: "10px", width: "80%", padding: "5px"
    };

    return (
        <div>
            <ToastContainer />
            <div className='border border-0 bg-white shadow-lg' style={{ marginLeft: "37vw", width: "25vw", marginTop: "5vw",paddingBottom:"1vw" }}>
                <form action="" onSubmit={(e) => handleSubmit(e)} className='ms-5 registerForm ' >

                    <h3 className='mt-5 mb-2 pt-3 me-4 text-center'>Signup</h3>

                    <div style={{ marginLeft: "18px", marginTop: "5px" }} >

                        {/* First Name */}
                        <label htmlFor="fname">Name</label>
                        <div>
                            <input type="text" id='fname'
                                name="fname"
                                onChange={hanlderChange} placeholder='Enter a name'
                                style={style1}
                                value={data.fname}
                                ref={fnameInput}
                            />
                            <div className="error_box">
                                {errors?.fname && <small className="error">{errors?.fname}</small>}
                            </div>
                        </div>

                        {/* Email */}
                        <label htmlFor="email" >Email</label>
                        <div>
                            <input type="email"
                                id="email" name='email'
                                onChange={hanlderChange} placeholder='abcd@example.com'
                                style={style1}
                                value={data.email}

                            />
                            <div className="error_box">
                                {errors?.email && <small className="error">{errors?.email}</small>}
                            </div>
                        </div>
                        {/* Password */}
                        <label htmlFor="password">Password</label>
                        <div>
                            <input type={passwordEye}
                                id='password'
                                name="password"
                                onChange={hanlderChange} placeholder='Enter password'
                                style={style1}
                                value={data.password}

                            />
                            <span style={{ position: "absolute", transform: "translateX(-23px)" }}>
                                {passwordEye === "password" ?
                                    <FaEyeSlash onClick={() => togglePasswordVisibility(passwordEye, setPasswordEye)} style={{height:"3em"}} />
                                    :
                                    <FaEye onClick={() => togglePasswordVisibility(passwordEye, setPasswordEye)} style={{ height: "3em" }} />
                                }
                            </span>
                            <div className="error_box">
                                {errors?.password && <small className="error">{errors?.password}</small>}
                            </div>
                        </div>
                        {/* confirm password */}
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <div>
                            <input type={cnfpasswordEye}
                                id="confirmPassword" name="confirmPassword"
                                onChange={hanlderChange} placeholder='Enter confirm Password'
                                style={style1}

                                value={data.confirmPassword}

                            />
                            <span style={{ position: "absolute", transform: "translateX(-23px)" }}>
                                {cnfpasswordEye === "password" ?
                                    <FaEyeSlash onClick={() => togglePasswordVisibility(cnfpasswordEye, setCnfPasswordEye)} style={{height:"3em"}} />
                                    :
                                    <FaEye onClick={() => togglePasswordVisibility(cnfpasswordEye, setCnfPasswordEye)} style={{ height: "3em" }} />
                                }
                            </span>
                            <div className="error_box">
                                {errors.confirmPassword && <small className="error">{errors.confirmPassword}</small>}
                            </div>
                        </div>
                        {/* <br /> */}
                        {/* buttons */}
                        <div className='mt-4'>
                            <button
                                type='submit'
                                className='bg-success text-white border-0 mb-3 py-2 px-4 mx-2 rounded'>
                                Submit
                            </button>
                            <button
                                type='reset'
                                className='bg-warning border-0 mb-2 mx-5 py-2 px-4 rounded text-white'
                                onClick={handleReset}>
                                Reset
                            </button>
                            <small style={{marginLeft:"40px"}}>Already have account? <Link to="/" style={{textDecoration:"none"}}>Login</Link></small>
                        </div>
                    </div>

                    {/* <p><Link to="/forgot">Forgot</Link></p> */}
                </form>
            </div>
        </div>
    )
}

export default Registration;

