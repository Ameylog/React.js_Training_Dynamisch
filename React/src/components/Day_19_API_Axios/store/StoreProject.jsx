import axios from 'axios';
import React, { useEffect, useState } from 'react'

function StoreProject() {

    const [data, setData] = useState([]);

    useEffect(() => {

        getApi();
    }, [])

    const getApi = async () => {
        try {
            const responce = await axios.get("https://fakestoreapi.com/products");
            const result = await responce.data;
            console.log([...result]);
            setData([...result]);

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <h3>Store Project</h3>

            <div className="">
                {
                    data.map((val) => {
                        return <div class="card mb-3 mx-2" key={val.id} style={{width:"300px",height:"300px"}}>
                            <img src={val.image} className="card-img-top w-25 m-4" alt={val.title} />

                            <div className="card-body" style={{width:"",height:""}}>
                                <h5 className="card-title fs-6">{val.title}</h5>
                                <p className="card-text fs-6">{val.description}</p>
                                <p href="#" className="btn btn-primary">${val.price}</p>
                            </div>

                        </div>
                    })
                }
            </div>


        </div >
    )
}

export default StoreProject

// category: "men's clothing"
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) "
// id: 1
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price: 109.95
// rating: {rate: 3.9, count: 120}
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" 