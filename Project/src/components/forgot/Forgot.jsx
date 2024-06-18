import React, { useContext, useState } from 'react'
import "./Forgot.css";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Users } from '../../App';
import { useFormik } from 'formik';
import * as Yup from "yup";
import InputField from '../input_error_component/InputField';
import ErrorMessage from '../input_error_component/ErrorMessage';

function Forgot() {

    const { setSampleData, sampleData, setIsForgot } = useContext(Users);

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            // oldPassword: "",
            password: "",
            confirmPassword: ""
        },

        validationSchema: Yup.object({
            email: Yup.string().max(300)
                .email("Invalid email address")
                .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Invalid email address")
                .test('email exists', 'Email not exist', function (value) {
                    const email = value;
                    if (sampleData?.length > 0) {
                        const exitedRecordIndex = sampleData.findIndex(record => record.email === email);
                        if (exitedRecordIndex !== -1) {
                            // Email already exists
                            return true;
                        }
                    }
                    return false; // Email doesn't exist
                })
                .required("Email is required"),

            // oldPassword:Yup.String()
            // .min(8, "Must be at least 8 charater")
            // .max(16, "Must be less than 16 character")
            // .matches(/[!@#$%^&*(),.?":{}|<>]/, "Must conatin at least on charcater")
            // .matches(/[0-9]/, "Must contain at least one number")
            // .matches(/[A-Z]/, "Must contain at least one Uppercase")
            // .matches(/[a-z]/, "Must contain at least lowercase")
            // .test(),

            password: Yup.string()
                .min(8, "Must be at least 8 charater")
                .max(16, "Must be less than 16 character")
                .matches(/[!@#$%^&*(),.?":{}|<>]/, "Must conatin at least on charcater")
                .matches(/[0-9]/, "Must contain at least one number")
                .matches(/[A-Z]/, "Must contain at least one Uppercase")
                .matches(/[a-z]/, "Must contain at least lowercase")
                .test("Not match", "New password cannot same as old ", () => {
                    const user = sampleData.find((val) => val.email === formik.values.email);
                    if (!user) {
                        // console.error('User not found');
                        return false;
                    }
                    // Check if the new password matches the old password
                    if (user.password !== formik.values.password) {
                        return true; // New password is different from the old password
                    } else {
                        return false; // New password is the same as the old password
                    }
                })
                .required("Password is required"),

            confirmPassword: Yup.string()
                .min(8, "Must be at least 8 charater")
                .max(16, "Must be less than 16 character")
                .matches(/[!@#$%^&*(),.?":{}|<>]/, "Must conatin at least on charcater")
                .matches(/[0-9]/, "Must contain at least one number")
                .matches(/[A-Z]/, "Must contain at least one Uppercase")
                .matches(/[a-z]/, "Must contain at least lowercase")
                .oneOf([Yup.ref('password')], 'Passwords must match')
                .required("Password is required")
        }),

        validateOnBlur: false,
        onSubmit: (values, { resetForm }) => {
            const { email, password } = values;
            const exitedRecordIndex = sampleData.findIndex(record => record?.email === email);

            if (exitedRecordIndex !== -1) {

                const updatedData = [...sampleData];
                updatedData[exitedRecordIndex].password = password;
                setSampleData(updatedData);
                setIsForgot(true)
                return navigate("/login");

            } else {
                toast.warning("Invalid Email and password", {
                    position: "top-center",
                });

            }
        }

    });

    //^ password Eye icon button
    const [passwordEye, setPasswordEye] = useState("password");
    const [cnfpasswordEye, setCnfPasswordEye] = useState("password");


    //* togggle function
    const togglePasswordVisibility = (eyeType, setEyeType) => {
        setEyeType(eyeType === "password" ? "text" : "password");
    };

    return (
        <div>
            <ToastContainer />
            <div className='forgetContainer'>
                <div className='forgetForm shadow-lg rounded'>
                    <form onSubmit={formik.handleSubmit}>
                        <h3>Forgot Password</h3>

                        <InputField
                            type="email"
                            id="email"
                            name="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Email"
                            className="forgotEmail"
                            labelClassName="forgetlabel"
                        />
                        <ErrorMessage touched={formik.touched.email} error={formik.errors?.email} />

                        <InputField
                            type={passwordEye}
                            id="password"
                            name="password"
                            label="Password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Password"
                            toggleVisibility={() => togglePasswordVisibility(passwordEye, setPasswordEye)}
                            withEyeIcon
                            eyeType={passwordEye}
                            className="forgotPassword"
                            labelClassName="forgetlabel"
                        />
                        <ErrorMessage touched={formik.touched.password} error={formik.errors?.password} />

                        <InputField
                            type={cnfpasswordEye}
                            id="confirmPassword"
                            name="confirmPassword"
                            label="Confirm Password"
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Confirm Password"
                            withEyeIcon
                            toggleVisibility={() => togglePasswordVisibility(cnfpasswordEye, setCnfPasswordEye)}
                            eyeType={cnfpasswordEye}
                            className="forgotConfirmPassword"
                            labelClassName="forgetlabel"
                            onPaste={(e) => { e.preventDefault(); return false }}
                        />
                        <ErrorMessage touched={formik.touched.confirmPassword} error={formik.errors.confirmPassword} />

                        <div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                            <button className='buttons btn btn-success rounded border-0 text-white px-4 py-2 mb-2' type='submit'>Change Password</button>
                        </div>

                        <div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                            <small><Link to="/login" style={{ textDecoration: "none" }}>Back to Login</Link></small>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Forgot;
