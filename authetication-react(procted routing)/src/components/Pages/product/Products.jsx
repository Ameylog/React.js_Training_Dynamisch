import React, { useEffect } from 'react';
import { useState } from 'react';

import axios from "axios";
import './product.css'
import { useLoaderData } from 'react-router-dom';

function Products() {

    const URL = "https://dummyjson.com/products";

    const [apiData, setApiData] = useState([]);

    // const loaderData=useLoaderData();

    useEffect(() => {
        apiGet();
    }, [])

    const apiGet = async () => {
        try {
            const response = await axios.get(URL);
            const res = response.data;
            const res2 = res["products"];
            console.log(res);
            setApiData(res2)

        } catch (error) {
            console.log(error);
        }
    }
    return (
   
        <div className="container">
            <h3 className='text-center'>This Product page</h3>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                {
                    apiData?.map((val) => {
                        return <div key={val.id} className='col'>
                            <div className='d-flex justify-content-around align-items-center ms-2'>
                                <div className='mt-3'>
                                    <div className="product-div shadow-lg" style={{ width: "18rem", height: "470px" }}>
                                        <img className="card-img-top product-img" src={val.images[0]} alt={val.title} />

                                        <div className="card-body">

                                            <h5 className="card-title text-center">{val.title}</h5>
                                            <p className="card-text mx-2">{val.description}</p>

                                            <div className='d-flex justify-content-around'>
                                                <p className="card-text text-success fs-5">{val.discountPercentage}% off</p>
                                                <p className="card-text ms-2">${val.price}</p>
                                            </div>
                                            <p className='text-center'>
                                                <a href="#add" className="btn btn-primary">Add to Cart</a>
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>

    );
}

export default Products;
