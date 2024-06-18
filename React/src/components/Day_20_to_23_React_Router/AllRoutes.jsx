import React from 'react';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import NewProduct from './products/NewProduct';
import CardDatas from "../Day 10 card_nestedObject_ArrayDublicate/cardProject/Card";
import Contact from './Contact';
import About from './About';
import NoPage from './NoPage';
import ImagePreview from '../Day 12 and 13 form_handling_ternary_&&/ImagePreview';
;

function AllRoutes() {

    // const navigator=useNavigate();

    // const router = createBrowserRouter([
    //     {
    //         path: '/',
    //         element: <Navbar />,
    //         children: [
    //             {
    //                 path: "/",
    //                 element: <Home />

    //             },
    //             {
    //                 path: "product",
    //                 // element: <NewProduct />,  // if parent have component then write outlet in the below of component
    //                 children: [
    //                     {
    //                         path: "newProduct",
    //                         element: <NewProduct />
    //                     },
    //                     {
    //                         path: "normalProduct",
    //                         element: <CardDatas />
    //                     }
    //                 ]
    //             },
    //             {
    //                 path: "contact/:contactId",
    //                 element: <Contact />
    //             },
    //             {
    //                 path: "about",
    //                 element: <About />

    //             }, {
    //                 path: "profile",
    //                 children: [
    //                     {
    //                         path: "imageComponent",
    //                         element: <ImagePreview />
    //                     }
    //                 ]
    //             }, {
    //                 path: "*",
    //                 element: <NoPage />
    //             }
    //         ]
    //     }
    // ])

    return (
        <>

            <BrowserRouter>
                <Navbar />
                <br />
                <Routes >
                    <Route path='/' element={<Home />} />

                    <Route path='product'>
                        <Route path='newProduct' element={<NewProduct />} />
                        <Route path='normalProduct' element={<CardDatas />} />
                    </Route>

                    <Route path='contact/:contactId?/:userName?' element={<Contact />} />
                    <Route path='about' element={<About />} />

                    <Route path='profile'>
                        <Route path='imageComponent' element={<ImagePreview />} />
                    </Route>
            
                    <Route path='*' element={<NoPage />} />

                </Routes>
            </BrowserRouter>

            {/* <RouterProvider router={router} /> */}
        </>
    )
}

export default AllRoutes
