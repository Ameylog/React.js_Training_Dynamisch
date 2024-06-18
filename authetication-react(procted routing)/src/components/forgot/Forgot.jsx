import React, { useContext, useState } from 'react'
import "./Forgot.css";
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Users } from '../../App';

function Forgot() {

    const { setSampleData, sampleData, setIsForgot }=useContext(Users);
    const navigate = useNavigate();

    const [forgetObj, setForgetObj] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    //^ All form Error
    const [errors, setErrors] = useState({});

    //^ password Eye icon button
    const [passwordEye, setPasswordEye] = useState("password");
    const [cnfpasswordEye, setCnfPasswordEye] = useState("password");


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

        //^ Email
        if (!forgetObj.email) {
            newErrors.email = "Email is required";
        } else if (!isValidEmail(forgetObj.email)) {
            newErrors.email = "Invalid email";
        }
        //^ Password
        if (!forgetObj.password) {
            newErrors.password = "Password is required";
        } else {
            const passwordErrors = isValidPassword(forgetObj.password);
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
        if (!forgetObj.confirmPassword) {
            newErrors.confirmPassword = "Confirm password is required";
        } else if (forgetObj.confirmPassword !== forgetObj.password) {
            newErrors.confirmPassword = "Passwords must match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    //*--------------------- Email finder [Already email exits]-------------
    const existEmail = (email) => {
        return sampleData?.some(record => record?.email === email);
    };

    //*--------------------------- handle Change Function --------------
    const handlerChange = (e) => {
        const { name, value } = e.target;
        let newErrors = { ...errors };

        setForgetObj((prevFormData) => ({
            ...prevFormData,
            [name]: value.trim(),
        }));

        switch (name) {
            case "email":
                newErrors.email = value === "" ? "Email is required" : (!existEmail(value) ? "Email Not exists" : (!isValidEmail(value) ? "Please enter a valid email address" : ""));
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
                if (forgetObj.confirmPassword && value !== forgetObj.confirmPassword) {
                    newErrors.confirmPassword = "Passwords do not match";
                } else {
                    newErrors.confirmPassword = "";
                }
                break;
            case "confirmPassword":
                newErrors.confirmPassword = value.trim() === "" ? "Confirm password is required" : value !== forgetObj.password ? "Passwords must match" : "";
                break;
            default:
                break;
        }
        setErrors(newErrors);
    }

    //*---------------------- Submit function ----------------
    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = validateForm();
        if (isValid) {

            const existingEmailIndex = sampleData.findIndex(item => item?.email === forgetObj?.email);
            
            
            if (existingEmailIndex !== -1) {
                console.log("SampleData:- ", sampleData)

                const updatedData = [...sampleData];
                updatedData[existingEmailIndex].password = forgetObj.password;

                setSampleData(updatedData);
            
                // console.log([...updatedData]);

                //* Forgot password notification
                setIsForgot(true)

                return navigate("/");

            } else {
                toast.warning("Email address not exist!", {
                    position: "top-center",
                });
                setForgetObj({ email: "", password: "", confirmPassword: "" });
                setErrors({});
            }
        } else {
            toast.warning("Invalid Email or password", {
                position: "top-center",

            })
        }
    }

    //* togggle function
    const togglePasswordVisibility = (eyeType, setEyeType) => {
        setEyeType(eyeType === "password" ? "text" : "password");
    };

    return (
        <div>
        <ToastContainer/>
            <div className='forgetContainer'>
                <div className='forgetForm shadow-lg rounded'>
                    <form >

                        <h3 >Forgot Password</h3>
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className='forgetlabel'>Email</label>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className='forgotEmail'
                                    value={forgetObj.email}
                                    onChange={handlerChange}
                                    required
                                    placeholder='abcd@example.com'
                                    maxLength={300} />

                                <div className="error_box">
                                    {errors?.email && <small className="error">{errors?.email}</small>}
                                </div>
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className='forgetlabel'> Password</label>
                            <div>
                                <input
                                    type={passwordEye}
                                    name="password"
                                    id="password"
                                    className='forgotPassword'
                                    value={forgetObj.password}
                                    onChange={handlerChange}
                                    placeholder='**********'
                                    required
                                />
                                <span style={{ position: "absolute", transform: "translateX(-23px)" }}>
                                    {passwordEye === "password" ?
                                        <FaEyeSlash onClick={() => togglePasswordVisibility(passwordEye, setPasswordEye)} style={{height:"3.0em"}} />
                                        :
                                        <FaEye onClick={() => togglePasswordVisibility(passwordEye, setPasswordEye)} />
                                    }
                                </span>
                                <div className="error_box">
                                    {errors?.password && <small className="error">{errors?.password}</small>}
                                </div>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label htmlFor="confirmPassword" className='forgetlabel'>Confirm Password</label>
                            <div>
                                <input
                                    type={cnfpasswordEye}
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    className='forgotConfirmPassword'
                                    value={forgetObj.confirmPassword}
                                    placeholder='**********'
                                    onChange={handlerChange}
                                    required
                                />
                                <span style={{ position: "absolute", transform: "translateX(-23px)" }}>
                                    {cnfpasswordEye === "password" ?
                                        <FaEyeSlash onClick={() => togglePasswordVisibility(cnfpasswordEye, setCnfPasswordEye)} style={{height:"3.0em"}} />
                                        :
                                        <FaEye onClick={() => togglePasswordVisibility(cnfpasswordEye, setCnfPasswordEye)} />
                                    }
                                </span>
                                <div className="error_box">
                                    {errors.confirmPassword && <small className="error">{errors.confirmPassword}</small>}
                                </div>
                            </div>
                        </div>

                        {/* Submit*/}
                        <div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                            <button className='buttons bg-success rounded border-0 text-white px-4 py-2 mb-2' onClick={handleSubmit}>Change Password</button>
                        </div>


                        {/* Login */}
                        <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", }}>
                            <small><Link to="/" style={{ textDecoration: "none" }}>Back to Login </Link>  </small>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Forgot;
