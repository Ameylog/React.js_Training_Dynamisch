import React, { Suspense, createContext, lazy, useEffect, useState } from "react";
import './App.css';
import Spinner from 'react-bootstrap/Spinner';
import Login from "./components/login/Login";
import Home from "./components/Pages/home/Home";
import Dashboard from "./components/Pages/dashboard/Dashboard";
import { productApiGet } from "./components/api/productApiGet";
import { ProtectedRoutes } from "./components/protectedRoute/ProtectedRoutes";
import OrderPage from "./components/Pages/order/OrderPage";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from "react-router-dom";
import profilePhoto from "./images/profilePhoto.png"
import UserProfile from "./components/Pages/profile/UserProfile";

const LazyForgot = lazy(() => import("./components/forgot/Forgot"));
const LazyRegistration = lazy(() => import("./components/registration/Registration"));
const LazyProducts = lazy(() => import("./components/Pages/product/Products"));
const LazyPageNotFound = lazy(() => import("./components/pageNotFound/PageNotFound"));
const LazyContact = lazy(() => import("./components/Pages/contact/Contact"));

// * create context
export const Users = createContext(null);

//* login Data (users Data)
// const sampleData1 = [
//     {
//         fname: "Amey",
//         email: "amey@gmail.com",
//         password: "Pass@1234",
//         mob: "7415007766",
//         gender: "male",
//         dob: "05/01/2000",
//         country: "India",
//         interests: ["Electronics"],
//         file: `${profilePhoto}`
//     },
//     {
//         fname: "Amol",
//         email: "ameynshende@gmail.com",
//         password: "Abcd@1234",
//         mob: "9445678564",
//         gender: "male",
//         dob: "05/01/1998",
//         country: "India",
//         interests: ["Electronics"],
//         file: `${profilePhoto}`
//     }
// ]

// const sampleData1 = JSON.parse(localStorage.getItem("users"));

function App() {

    // logout notification
    const [isLogout, setIsLogout] = useState(false)

    // forgot notification
    const [isForgot, setIsForgot] = useState(false)

    // login notifiaction
    const [isLogin, setIsLogin] = useState(false);

    // registration notfiaction
    const [isRegister, setIsRegister] = useState(false);

    // user data
    // const [sampleData, setSampleData] = useState(sampleData1)
    const [sampleData, setSampleData] = useState(() => {
        const storedUsers = localStorage.getItem('sampleData');
        return storedUsers ? JSON.parse(storedUsers) : []
    })


    // card data [store cart data]
    const [cartItems, setCartItems] = useState([]);

    // Add to cart model
    const [showModal, setShowModal] = useState(false);

    // store api data
    const [data, setData] = useState([]);

    const [data2, setData2] = useState(data);

    // Total price 
    const [totalPrice, setTotalPrice] = useState("");

    const [dataMsg, setDataMsg] = useState(false)
    // const [user, setUser] = useState(false);

    // profile dropdown
    const [profileDropDown, setProfileDropDown] = useState(false);

    useEffect(()=>{
        localStorage.setItem('sampleData', JSON.stringify(sampleData));
    },[sampleData])
   
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="login" element={<Login />} index />
                <Route path="forgot" element={<LazyForgot />} />
                <Route path="signUp" element={<LazyRegistration />} />

                <Route path="dashboard" element={<ProtectedRoutes Comp={Dashboard} />}
                    errorElement={<div><p>Something went wrong please try again</p></div>} >

                    <Route index element={<Home />} />
                    <Route path="contact" element={<LazyContact />} />
                    <Route path="product/:id?" element={<LazyProducts />} loader={productApiGet} />
                    <Route path="order" element={<OrderPage />} />
                    <Route path="profile" element={<UserProfile />} />
                    <Route path="*" element={<LazyPageNotFound />} />
                </Route>

                <Route path="*" element={<Login />} />
            </>
        )
    )
    return (
        <Users.Provider value={{
            sampleData, setSampleData, isLogout, isForgot, setIsLogout, setIsForgot, isLogin, setIsLogin, cartItems, setCartItems, setShowModal, showModal, data, setData, totalPrice, setTotalPrice, dataMsg, setDataMsg, data2, setData2,
            isRegister, setIsRegister, setProfileDropDown, profileDropDown
        }}>

            <div className="App" onClick={(e) => { e.stopPropagation(); setProfileDropDown(false) }}>
                <Suspense fallback=<div style={{ textAlign: "center", marginTop: "10vh" }}>
                    <Spinner animation="border" />

                </div>>
                    <RouterProvider router={router} />
                </Suspense>
            </div>

        </Users.Provider>
    );
}
export default App;

