import React, { createContext, useState } from "react";
import './App.css';
import Registration from "./components/registration/Registration";
import Login from "./components/login/Login";
import Forgot from "./components/forgot/Forgot";
import { BrowserRouter, Navigate, Route, Routes, } from "react-router-dom";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import Products from "./components/Pages/product/Products";
import Home from "./components/Pages/home/Home";
import About from "./components/Pages/about.jsx/About";

import Contact from "./components/Pages/contact/Contact";
import Dashboard from "./components/Pages/dashboard/Dashboard";
import 'react-toastify/dist/ReactToastify.css';


export const Users = createContext(null);

const sampleData1 = [
    {
        fname: "Amey",
        email: "amey@gmail.com",
        password: "Pass@1234",
    },
    {
        fname: "Amol",
        email: "ameynshende@gmail.com",
        password: "Abcd@1234",
    }
]

function App() {

    const [isLogout, setIsLogout] = useState(false)
    const [isForgot, setIsForgot] = useState(false)

    //^ validate for login
    const [isLogin, setIsLogin] = useState(false);

    const [sampleData, setSampleData] = useState(sampleData1)

    const [user, setUser] = useState(false);

    return (
        <Users.Provider value={{ sampleData, setSampleData, isLogout, isForgot, setIsLogout, setIsForgot, isLogin, user, setUser, setIsLogin, }}>

            <div className="App">

                <BrowserRouter >
                    <Routes>
                        <Route path="/" element={<Login />} index />
                        <Route path="forgot" element={<Forgot />} />
                        <Route path="signUp" element={<Registration />} />
                        <Route path="dashboard" element={<ProtectedRoutes Comp={Dashboard} user={user} />} >
                            <Route element={<Home />} index />
                            <Route path="about" element={<About />} />
                            <Route path="product" element={<Products />} />
                            <Route path="contact" element={<Contact />} />
                            <Route path="*" element={<PageNotFound />} />
                        </Route>
                        <Route path="*" element={<Login />} />
                    </Routes>
                </BrowserRouter>


            </div>
        </Users.Provider>
    );
}

export default App;

export const ProtectedRoutes = ({ Comp, user }) => {
    if (user) {
        return <Comp></Comp>
    }
    else {
        return <Navigate to={'/'} />
    }
}

