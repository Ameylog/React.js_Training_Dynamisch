import { useEffect, useRef, useState } from "react";
import "./Form.css";
import Modal from "./Modal";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { BsArrowUpShort } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { fireEvent } from "@testing-library/react";


const Form = () => {
    //^ render arr of object
    const [data, setData] = useState([])

    //^ delete pop up box
    const [showModel, setShowModal] = useState(false);

    //^ formDat object
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        age: "",
        gender: "",
        interests: [],
        birthDate: "",
    });

    //^ All form Error
    const [errors, setErrors] = useState({});

    //^ password Eye icon button
    const [passwordEye, setPasswordEye] = useState("password")
    const [cnfpasswordEye, setCnfPasswordEye] = useState("password")

    const firstNameFocus = useRef();


    useEffect(() => {
        firstNameFocus.current.focus();
        setData([])
    }, [])

    const todaysDate = new Date().toISOString().split('T')[0];

    //*------------------------- Validation Functions ---------------------------------

    //^ first Name Validation function
    const isValidFname = (firstName) => {
        const fnameRegex = /^\s*[a-zA-Z]*$/;
        return fnameRegex.test(firstName);
    }

    //^ last Name Validation function
    const isValidLname = (lastName) => {
        const lnameRegex = /^\s*[a-zA-Z]*$/;
        return lnameRegex.test(lastName);
    }

    //^ Email Validation Funtion
    const isValidEmail = (email) => {
        // Regular expression for basic email validation
        const emailRegex = /^\S+@\S+\.\S+$/;
        return emailRegex.test(email);
    };

    //^ phoneNumber Vallidation function
    const isValidPhoneNumber = (phoneNumber) => {
        // Regular expression for basic phone number validation (10 digits)
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phoneNumber);
    };

    //^ Password validation
    const isValidPassword = (password) => {
        // Regular expressions for password validation
        const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
        const numberRegex = /[0-9]/;
        const upperCaseRegex = /[A-Z]/;
        const lowerCaseRegex = /[a-z]/;

        const err = [];

        // Check each condition and push corresponding error messages to the array
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

        // Return the array of error messages
        return err;
    };

    //^ Age validation function 
    const isValidAge = (age) => {
        return parseInt(age) >= 18 && parseInt(age) <= 60;
    };

    //*-------------------------------- Form Validation --------------------------------
    const validateForm = () => {
        let newErrors = {};

        //^ First Name
        if (!formData.firstName) {
            newErrors.firstName = "First name is required";
        }
        else if (!isValidFname(formData.firstName)) {
            newErrors.firstName = "Invalid name";
        }

        //^ Last Name
        if (!formData.lastName) {
            newErrors.lastName = "Last name is required";
        } else if (!isValidLname(formData.lastName)) {
            newErrors.lastName = "Invalid Name";
        }

        //^ Email
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = "Invalid email";
        }

        //^ Phone Number
        if (!formData.phoneNumber) {
            newErrors.phoneNumber = "Phone number is required";

        } else if (!isValidPhoneNumber(formData.phoneNumber)) {
            newErrors.phoneNumber = "Phone number must be 10 digits";
        }

        //^ Password
        if (!formData.password) {
            newErrors.password = "Password is required";
        } else {
            const passwordErrors = isValidPassword(formData.password);
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
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Confirm password is required";
        } else if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = "Passwords must match";
        }

        //^ Age
        if (!formData.age) {
            newErrors.age = "Age is required";
        } else if (!isValidAge(formData.age)) {
            newErrors.age =
                "You must be at least 18 years old and not older than 60 years";
        }

        //^ Gender
        if (!formData.gender) {
            newErrors.gender = "Gender is required";
        }

        //^ Check box
        if (formData.interests.length === 0) {
            newErrors.interests = "Select at least one interest";
        }

        //^ Date of Birth
        if (!formData.birthDate) {
            newErrors.birthDate = "Date of birth is required";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // console.log(errors);

    //*----------------- Submition function------------------------
    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = validateForm();
        if (isValid) {

            const exitedRecordIndex = data.findIndex((record) => record.email === formData.email);

            // Record not exited if -1
            if (exitedRecordIndex !== -1) {
                const updateData = [...data];
                updateData[exitedRecordIndex] = formData;
                setData(updateData);
            }
            else {
                setData([...data, formData]);
            }

            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                password: "",
                confirmPassword: "",
                age: "",
                gender: "",
                interests: [],
                birthDate: "",
            })

            setErrors({})
        } else {
            console.log("Form Validation Failed");
        }
    };

    //*-------------------------- Filter-----------------------------
    const handleFilter = (e) => {
        const data1 = [...data]
        const value = e.target.value;

        const filter = data1.filter((val) => val.firstName.includes(value));
        setData(filter);

    }

    //*-------------------------- Email finder [Already email exits]-------------
    const existEmail = (email) => {

        if (data > 0) {
            const exitedRecordIndex = data.findIndex((record) => record.email === formData.email);
            if (exitedRecordIndex !== -1) {
                return true;
            }
            return false;
        }
    }

    //*----------------------------onChange Handling function --------------------------
    const handleChange = (e) => {
        const { name, value } = e.target;

        let newErrors = { ...errors };

        // Update formData based on the input name
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value.trim(), // Trim the value
        }));

        // Validate the input based on its name
        switch (name) {
            case "firstName":
                newErrors.firstName = value.trim() === "" ? "First name is required" : !isValidFname(value.trim()) ? "Invalid name" : "";
                break;
            case "lastName":
                newErrors.lastName = value.trim() === "" ? "Last name is required" : !isValidLname(value.trim()) ? "Invalid name" : "";
                break;
            case "email":
                newErrors.email = value === "" ? "Email is required" : ((existEmail(value)) ? "Email already exist" : ((!isValidEmail(value)) ? "Please enter a valid email address" : ""))
                break;
            case "phoneNumber":
                newErrors.phoneNumber = value === "" ? "Phone number is required" : !isValidPhoneNumber(value) ? "Phone number must be 10 digits" : "";
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
                // console.log(formData.confirmPassword!=value);
                if(formData.confirmPassword && value!=formData.confirmPassword){
                    newErrors.confirmPassword="Password does not match";
                }else{
                    newErrors.confirmPassword="";
                }
                // console.log(errors);
                break;

            case "confirmPassword":
                newErrors.confirmPassword = value.trim() === "" ? "Confirm password is required" : value !== formData.password ? "Passwords must match" : "";
                break;

            case "age":
                newErrors.age = value.trim() === "" ? "Age is required" : !isValidAge(value) ? "You must be at least 18 years old and not older than 60 years" : "";
                break;
            case "gender":
                newErrors.gender = value.trim() === "" ? "Gender is required" : "";
                break;
            case "birthDate":
                newErrors.birthDate = value.trim() === "" ? "Date of birth is required" : "";
                break;
            default:
                break;
        }

        // Update the errors state
        setErrors(newErrors);

        // setFormData({
        //     ...formData,
        //     [name]: value,
        // });
    };

    //*--------------------------------- CheckBox Handling function --------------------------------
    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        let updatedInterests = [...formData.interests];
        if (checked) {
            updatedInterests.push(name);
        } else {
            updatedInterests = updatedInterests.filter(
                (interest) => interest !== name
            );
        }

        setFormData({
            ...formData,
            interests: updatedInterests,
        });
    };

    //*---------------------- Edit Record function-----------------
    const updateRecord = (email) => {
        const recordToUpdate = data.find((record) => record.email === email);
        // console.log("recordToUpdate",recordToUpdate);
        if (recordToUpdate) {
            setFormData({
                ...recordToUpdate,
                confirmPassword: recordToUpdate.password,
            });
        } else {
            console.log("Record not found");
        }

    }

    //*------------------------ Delete Record function-----------------------
    const deleteRecord = (email) => {

        const filterRecord = data.filter((record) => record.email !== email)
        // console.log(filterRecord);
        setData([...filterRecord])
        setShowModal(false)
    }

    //*-------------------------- Reset Function------------------
    const handleReset = () => {
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            password: "",
            confirmPassword: "",
            age: "",
            gender: "",
            interests: [],
            birthDate: "",
        })
    }

    //*--------------------------Sorting-----------------------------
    const sortingRecord = (val) => {
        const record = [...data];
        // const val = e.target.value;
        // console.log(val);

        function sort() {
            if (val === "firstName" || val === "lastName") {
                const tdata = record.sort((a, b) => {
                    const nameA = a[val]?.toLowerCase();
                    const nameB = b[val]?.toLowerCase();
                    if (nameA < nameB) return -1;
                    if (nameA > nameB) return 1;
                    return 0;
                });
                setData(tdata);
            }

            if (val === "age") {
                const ageData = record.sort((a, b) => {
                    const age1 = parseInt(a.age);
                    const age2 = parseInt(b.age);
                    if (age1 > age2) return 1;
                    if (age1 < age2) return -1;
                    return 0;
                });
                // console.log("ageData",ageData);
                setData(ageData);
            };

            if (val === "phoneNumber") {
                const phoneData = record.sort((a, b) => {
                    const phoneA = a[val];
                    const phoneB = b[val];
                    return phoneA.localeCompare(phoneB); // Use localeCompare for string comparison
                });
                setData(phoneData);
            };
            if (val === "gender") {
                const genderData = record.sort((a, b) => {
                    // Assuming gender field contains "male" and "female"
                    const genderA = a[val];
                    const genderB = b[val];
                    return genderA.localeCompare(genderB);
                });
                setData(genderData);
            }
            if (val === "birthDate") {
                const sortedData = record.sort((a, b) => {
                    const dateA = new Date(a[val]);
                    const dateB = new Date(b[val]);
                    return dateA - dateB;
                });
                setData(sortedData)
            };
        }
        sort();
    }

    return (
        <div id="formValidation">
            <div className="main_div">
                <form className="form  bg-white" onSubmit={handleSubmit}>
                    <h3>Registartion Form</h3>

                   
                        {/* //& firstName */}

                        <div className="component ">
                            <label >First Name:</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                placeholder="Enter your first name"
                                onChange={handleChange}
                                style={{ marginLeft: "5px" }}
                                ref={firstNameFocus}
                            />
                            <div className="error_box">
                                {errors?.firstName && <small className="error">{errors.firstName}</small>}
                            </div>
                        </div>

                        {/* //& lastName */}
                        <div className="component ">
                            <label>Last Name:</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                placeholder="Enter your last name"
                                onChange={handleChange}
                                style={{ marginLeft: "5px" }}
                            />
                            <div className="error_box">
                                {errors.lastName && <small className="error">{errors.lastName}</small>}
                            </div>
                        </div>

                        {/* //& Email */}
                        <div className="component ">
                            <label>Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                placeholder="Enter your email"
                                maxLength={300}
                                onChange={handleChange}
                                style={{ marginLeft: "5px" }}
                            />
                            <div className="error_box">
                                {errors.email && <small className="error">{errors.email}</small>}
                            </div>
                        </div>

                        {/* //& Phone Number */}
                        <div className="component ">
                            <label>Phone Number:</label>
                            <input
                                type="number"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                placeholder="Enter your phone number"
                                onChange={handleChange}
                                style={{ marginLeft: "5px" }}
                            />
                            <div className="error_box">
                                {errors.phoneNumber && <small className="error">{errors.phoneNumber}</small>}
                            </div>
                        </div>

                        {/* //& Password */}
                        <div className="component " style={{ position: "relative", marginBottom:"40px" }}>
                            <label>Password:</label>

                            <input
                                type={passwordEye}
                                name="password"
                                value={formData.password}
                                placeholder="Enter your password"
                                onChange={handleChange}
                                style={{ marginLeft: "5px", }}

                            />
                            {passwordEye === "password" ?
                                <span style={{ position: "absolute", transform: "translateX(-23px)", }} >
                                    <FaEyeSlash onClick={() => setPasswordEye("text")}
                                    /></span>
                                : <span style={{ position: "absolute", transform: "translateX(-23px)", }} >
                                    <FaEye onClick={() => setPasswordEye("password")} /></span>
                            }

                            <div className="error_box">
                                {errors.password && <small className="error">{errors.password}</small>}
                            </div>
                        </div>

                        {/* //& Confirm Password */}
                        <div className="component " style={{ position: "relative" }}>
                            <label>Confirm Password:</label>

                            <input
                                type={cnfpasswordEye}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                placeholder="Confirm your password"
                                onChange={handleChange}
                                style={{ marginLeft: "5px" }}
                            />
                            {cnfpasswordEye === "password" ?
                                <span style={{ position: "absolute", transform: "translateX(-23px)", }} >
                                    <FaEyeSlash onClick={() => setCnfPasswordEye("text")}
                                    /></span>
                                : <span style={{ position: "absolute", transform: "translateX(-23px)", }} >
                                    <FaEye onClick={() => setCnfPasswordEye("password")} /></span>
                            }

                            <div className="error_box">
                                {errors.confirmPassword && (
                                    <small className="error">{errors.confirmPassword}</small>
                                )}
                            </div>
                        </div>

                        {/* //& Age */}
                        <div className="component ">
                            <label>Age:</label>
                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                placeholder="Enter your age"
                                onChange={handleChange}
                                style={{ marginLeft: "5px" }}
                            />
                            <div className="error_box">
                                {errors.age && <small className="error">{errors.age}</small>}
                            </div>
                        </div>

                        {/* //& Gender */}
                        <div className="component ">
                            <label>Gender:</label>
                            <input type="radio"
                                id="Male"
                                name="gender"
                                value="Male"
                                checked={formData.gender === 'Male'}
                                onChange={handleChange}
                                style={{ marginLeft: "5px" }}
                            />
                            <label htmlFor="male">Male</label>

                            <input
                                type="radio"
                                value="Female"
                                id="Female"
                                name="gender"
                                checked={formData.gender === 'Female'}
                                onChange={handleChange}
                                style={{ marginLeft: "5px" }} />
                            <label htmlFor="female">Female</label>

                            <div className="error_box">
                                {errors.gender && <small className="error">{errors.gender}</small>}
                            </div>
                        </div>

                        {/* //& Interests */}
                        <div className="component ">
                            <label>Interest:</label>
                            <label style={{ marginLeft: "5px" }}>
                                <input
                                    type="checkbox"
                                    name="Java"
                                    value="Java"
                                    checked={formData.interests.includes("Java")}
                                    onChange={handleCheckboxChange}
                                />
                                Java
                            </label>

                            <label style={{ marginLeft: "5px" }}>
                                <input
                                    type="checkbox"
                                    name="Javascript"
                                    value="Javascript"
                                    checked={formData.interests.includes("Javascript")}
                                    onChange={handleCheckboxChange}
                                />
                                Javascript
                            </label>

                            <label style={{ marginLeft: "5px" }}>
                                <input
                                    type="checkbox"
                                    name="Python"
                                    value="Python"
                                    checked={formData.interests.includes("Python")}
                                    onChange={handleCheckboxChange}
                                />
                                Python
                            </label>

                            <div className="error_box">
                                {errors.interests && <small className="error ">{errors.interests}</small>}
                            </div>
                        </div>

                        {/* //& Date of Birth */}
                        <div className="component ">
                            <label>Date of Birth:</label>
                            <input
                                type="date"
                                name="birthDate"
                                value={formData.birthDate}
                                placeholder="Enter your date of birth"
                                min="1990-01-01"
                                max={todaysDate}
                                onChange={handleChange}
                                style={{ marginLeft: "5px" }}

                            />
                            <div className="error_box">
                                {errors.birthDate && <small className="error ">{errors.birthDate}</small>}
                            </div>
                        </div>

                    {/* //& Submit Button */}
                    <button type="submit">Submit</button>
                    <button type="reset" onClick={handleReset}>Reset</button>
                </form>
            </div >

            <br /><br />

            {/* //* Table */}
            <div className="table_data">

                <div style={{ textAlign: "left", marginLeft: "20px", position: "relative" }}>
                    <label htmlFor="searchRecord">Search</label>
                    <div>
                        {/* <CiSearch style={{ position: "absolute", transform: "translateX(18px)", marginTop: "5px" }} /> */}
                        <input type="search" id="searchRecord" name="searchRecord" style={{ marginLeft: "0px" }} onChange={handleFilter}
                            placeholder="search a name"
                        />
                    </div>
                </div>

                <br />
                <table >
                    <thead>
                        <tr>
                            <th> First Name
                                <button onClick={() => sortingRecord('firstName')} style={{ border: "none" }}>
                                    <BsArrowUpShort style={{ color: "#121212" }} />
                                </button>
                            </th>

                            <th> Last Name
                                <button onClick={() => sortingRecord('lastName')} style={{ border: "none" }}>
                                    <BsArrowUpShort style={{ color: "#121212" }} />
                                </button>
                            </th>

                            <th style={{ padding: "0px 120px" }}>Email</th>

                            <th> Phone Number
                                <button onClick={() => sortingRecord('phoneNumber')} style={{ border: "none" }}>
                                    <BsArrowUpShort style={{ color: "#121212" }} />
                                </button>
                            </th>

                            <th>Password</th>

                            <th> Age
                                <button onClick={() => sortingRecord('age')} style={{ border: "none" }}>
                                    <BsArrowUpShort style={{ color: "#121212" }} />
                                </button>
                            </th>

                            <th> Gender
                                <button onClick={() => sortingRecord('gender')} style={{ border: "none" }}>
                                    <BsArrowUpShort style={{ color: "#121212" }} />
                                </button>
                            </th>

                            <th>Interests</th>

                            <th> Date of Birth
                                <button onClick={() => sortingRecord('birthDate')} style={{ border: "none" }}>
                                    <BsArrowUpShort style={{ color: "#121212" }} />
                                </button>
                            </th>

                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            data.map((val, index) => {
                                return <tr key={index}>
                                    <td>{val.firstName}</td>
                                    <td>{val.lastName}</td>
                                    <td>{val.email}</td>
                                    <td>{val.phoneNumber}</td>
                                    <td>{val.password}</td>
                                    <td>{val.age}</td>
                                    <td>{val.gender}</td>
                                    <td>{val.interests?.join(",")}</td>
                                    <td>{val.birthDate}</td>

                                    <td>
                                        <div style={{ display: "flex", justifyContent: "center" }}>
                                            {/* //^ Edit button */}
                                            <div>
                                                <MdEdit style={{ color: "#000000", fontSize: "25px" }} onClick={() => updateRecord(val.email)} />
                                            </div>

                                            {/* //^ Delete button */}
                                            <div>
                                                <MdDelete style={{ color: "#ff0a0a", fontSize: "25px", marginLeft: "8px" }}
                                                    onClick={() => setShowModal(true)} />
                                                {showModel && <Modal deleteRecord={deleteRecord} email={val.email} setShowModal={setShowModal} />}
                                            </div>
                                        </div>
                                    </td>

                                </tr>
                            })

                        }
                    </tbody>
                </table>

            </div>
        </div >
    );
};

export default Form;