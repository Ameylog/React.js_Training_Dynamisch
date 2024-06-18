import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Login.css";
import { Users } from '../../App';
import LoginImage1 from "../../images/LoginImage.png";
import { useFormik } from 'formik';
import * as Yup from "yup";
import InputField from '../input_error_component/InputField';
import ErrorMessage from '../input_error_component/ErrorMessage';


function Login() {

  const { isLogout, setIsLogout, sampleData, isForgot, setIsForgot, setIsLogin, isRegister, setIsRegister } = useContext(Users);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },

    validationSchema: Yup.object({
      email: Yup.string().max(300)
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Invalid email address")
        .test('email-exists', 'Email not exist', function (value) {
          const email = value;

          if (sampleData?.length > 0) {
            const exitedRecordIndex = sampleData?.findIndex(record => record.email === email);
            if (exitedRecordIndex !== -1) {
              // Email already exists
              return true;
            }
          }
          return false; // Email doesn't exist
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
    }),


    onSubmit: (values, { resetForm }) => {
      const { email, password } = values;

      const exitedRecordIndex = sampleData?.findIndex(record => record.email === email && record.password === password);

      if (exitedRecordIndex !== -1) {
        // setUser(true);
        localStorage.setItem("login", "true")
        localStorage.setItem("email", `${email}`)
        setIsLogin(true);

        navigate("/dashboard", { replace: true });
        resetForm()
      } else {
        toast.warning("Invalid Email and password", {
          position: "top-center",
        });

      }
    }

  })

  //^ password Eye icon button
  const [passwordEye, setPasswordEye] = useState("password")

  //*-----------Logout Notification ----------------

  useEffect(() => {
    if (isLogout) {
      toast.success("You have been logged out!", {
        position: "top-center",
        autoClose: 1000
      })
    }
    if (localStorage.getItem("login")) {
      return navigate('/dashboard');
    }

    setTimeout(() => {
      setIsLogout(false)
    }, 3000)

    if (isForgot) {
      toast.info("Password have been change", {
        position: "top-center",
        autoClose: 1000
      })
    }

    setTimeout(() => {
      setIsForgot(false)
    }, 3000)

    if (isRegister) {
      toast.success("Registration successful", {
        position: "top-center",
        autoClose: 2000
      });
    }
    setTimeout(() => {
      setIsRegister(false)
    }, 3000)

  }, [])

  const togglePasswordVisibility = (eyeType, setEyeType) => {
    setEyeType(eyeType === "password" ? "text" : "password");
  };


  return (
    <div>
      <ToastContainer />

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center", marginTop: "20vh" }}>

        {/* Login Form */}
        <div style={{ border: "1px solid white", width: "400px", borderRadius: "5px", paddingBottom: "10px" }} className='shadow-lg bg-white'>

          <form action="" className='loginForm mt-3' onSubmit={formik.handleSubmit}>

            <h3 style={{ textAlign: "center" }}>Login</h3>

            <InputField
              type="email"
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="loginEmail px-2"
              labelClassName="loginlabel"
              onBlur={formik.handleBlur}
              placeholder="Email"
            />
            <ErrorMessage touched={formik.touched.email} error={formik.errors.email} />

            <InputField
              type={passwordEye}
              id="password"
              name="password"
              label="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='loginPassword px-2'
              labelClassName="loginlabel"
              placeholder="Password"
              withEyeIcon
              toggleVisibility={() => togglePasswordVisibility(passwordEye, setPasswordEye)}
              eyeType={passwordEye}
            />
            <ErrorMessage touched={formik.touched.password} error={formik.errors.password} />

            <div style={{ marginTop: "20px" }}>
              <small><Link to="/forgot" style={{ textDecoration: "none", marginLeft: "50px", }}>Forgot password?</Link></small>
            </div>

            {/* Login button */}
            <div className='loginButton'>
              <button type='submit' className='Loginbtn btn btn-success border-0 rounded px-5 py-2 text-white'>Login</button>
            </div>

            {/* Links */}
            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
              <small>Don't have an account? <Link to="/signUp" style={{ textDecoration: "none" }}>SignUp</Link></small>
            </div>
          </form>
        </div>

        {/* Image Container */}
        <div style={{ border: "1px solid white", width: "400px", height: "368", borderRadius: "5px", }}>
          <img src={LoginImage1} alt="LoginImage" width={400} height={368} className='shadow-lg' loading='lazy' />
        </div>

      </div>
    </div>

  )
}

export default Login;
