import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Login.css";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Users } from '../../App';
import LoginImage1 from "../../images/LoginImage.png";

function Login() {

  const { isLogout, setIsLogout, sampleData, isForgot, setIsForgot, setUser } = useContext(Users);

  const navigate = useNavigate();

  const [logginObj, setLoginObj] = useState({
    email: "",
    password: "",
  })


  //^ All form Error
  const [errors, setErrors] = useState({});

  //^ password Eye icon button
  const [passwordEye, setPasswordEye] = useState("password")


  //*------------------Logout Notification ----------------
  useEffect(() => {
    if (isLogout) {
      toast.info("You have been logged out!", {
        position: "top-center",
      })
    }

    setTimeout(() => {
      setIsLogout(false)
    }, 3000)

    if (isForgot) {
      toast.info("Password have been change", {
        position: "top-center",
      })
    }

    setTimeout(() => {
      setIsForgot(false)
    }, 3000)
  }, [isLogout, setIsLogout, isForgot, setIsForgot])


  //*---------------------Submit  Login function -------------
  const handleLogin = (e) => {
    e.preventDefault();

    const isValid = validateForm();
    if (isValid) {

      const exitedRecordIndex = sampleData.findIndex((record) => record.email === logginObj.email);

      const exitedRecordPassword = sampleData.findIndex((record) => record.password === logginObj.password);

      // Record are match
      if (exitedRecordIndex !== -1 && exitedRecordPassword !== -1) {
        // setIsLogin(true)
        
        setUser(true);
        navigate("/dashboard")

      } else {
        toast.warning("Invalid Email and password", {
          position: "top-center",
        })
      }
      setLoginObj({
        email: "",
        password: ""
      })

      setErrors({})
    } else {
      toast.warning("Invalid Email and password", {
        position: "top-center",
      })
    }
  }

  //*--------------------- Valid function--------------------------------
  //^ Email Validation Funtion
  const isValidEmail = (email) => {
    // Regular expression for basic email validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
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


  //*-------------------------------- Form Validation --------------------------------
  const validateForm = () => {
    let newErrors = {};

    //^ Email
    if (!logginObj.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(logginObj.email)) {
      newErrors.email = "Invalid email";
    }

    //^ Password
    if (!logginObj.password) {
      newErrors.password = "Password is required";
    } else {
      const passwordErrors = isValidPassword(logginObj.password);
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
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  //*-------------------------- Email finder [Already email exits]-------------
  const existEmail = (email) => {

    if (sampleData > 0) {
      const exitedRecordIndex = sampleData.findIndex((record) => record.email === logginObj.email);
      if (exitedRecordIndex !== -1) {
        return true;
      }
      return false;
    }
  }


  //*---------------------login onChanage function ----------------------
  const handlerChange = (e) => {
    const { name, value } = e.target;

    const newErrors = { ...errors };

    setLoginObj((prevFormData) => ({
      ...prevFormData,
      [name]: value.trim(), // Trim the value
    }))

    switch (name) {
      case "email":
        newErrors.email = value === "" ? "Email is required" : ((existEmail(value)) ? "Email already exist" : ((!isValidEmail(value)) ? "Please enter a valid email address" : ""))
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
        break;
      default:
        break;
    }
    setErrors(newErrors);

  };

  return (
    <div>
      <ToastContainer />

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center", marginTop: "20vh" }}>

        {/* Login Form */}
        <div style={{ border: "1px solid white", width: "400px", borderRadius: "5px", paddingBottom: "10px" }} className='shadow-lg bg-white'>

          <form action="" className='loginForm mt-3'>

            <h3 style={{ textAlign: "center" }}>Login Form</h3>

            <div>
              <label htmlFor="email" className='loginlabel'>Email</label>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={logginObj.email}
                  className='loginEmail'
                  onChange={handlerChange}
                  placeholder='abcd@example.com'
                  required
                  maxLength={300} />

                <div className="error_box">
                  {errors.email && <small className="error">{errors.email}</small>}
                </div>
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className='loginlabel'>Password</label>
              <div>
                <input
                  type={passwordEye}
                  name="password"
                  id="password"
                  value={logginObj.password}
                  className='loginPassword'
                  onChange={handlerChange}
                  placeholder='**********'
                  required
                />
                {passwordEye === "password" ?
                  <span style={{ position: "absolute", transform: "translateX(-23px)", }} >
                    <FaEyeSlash onClick={() => setPasswordEye("text")} style={{ height: "3.5em" }}
                    /></span>
                  : <span style={{ position: "absolute", transform: "translateX(-23px)", }} >
                    <FaEye onClick={() => setPasswordEye("password")} style={{ height: "3.5em" }} /></span>
                }
                <div className="error_box">
                  {errors.password && <small className="error">{errors.password}</small>}
                </div>

              </div>
            </div>

            <div style={{ marginTop: "20px" }}>
              <small><Link to="/forgot" style={{ textDecoration: "none", marginLeft: "50px", }}>Forgot password?</Link></small>
            </div>

            {/* Login button */}
            <div className='loginButton'>
              <button onClick={handleLogin} className='Loginbtn bg-success border-0 rounded px-5 py-2 text-white'>Login</button>
            </div>

            {/* Links */}
            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
              <small>Don't have account? <Link to="/signUp" style={{ textDecoration: "none" }}>SignUp</Link></small>
            </div>
          </form>
        </div>
        
        <hr style={{height:"368px",border:"none",borderLeft:"1px solid black"}} />

        {/* Image Container */}
        <div style={{ border: "1px solid white", width: "400px", height:"368", borderRadius: "5px",}}
        >
          <img src={LoginImage1} alt="LoginImage" width={400} height={368} className='shadow-lg'/>
        </div>

      </div>


    </div>
  )
}

export default Login;
