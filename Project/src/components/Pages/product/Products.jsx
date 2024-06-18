import React, { useEffect, useState } from 'react';
import './product.css'
import { useLoaderData } from 'react-router-dom';
import { useContext } from 'react';
import { Users } from '../../../App';
import { FaStar } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { toast } from 'react-toastify';


function Products() {

    const { cartItems, setCartItems, data, setData, dataMsg, data2, setData2 } = useContext(Users);

    const loaderData = useLoaderData();

    // sort ascendinga and descending
    const [sortOrder, setSortOrder] = useState('');

    //select category
    const [selectCategory, setSelectCategory] = useState('');

    // price range
    const [price, setPrice] = useState(0);

    // rating 
    const [selectedRatings, setSelectedRatings] = useState([]);

    useEffect(() => {
        if (loaderData) {
            setData(loaderData);
            setData2(loaderData);
        }
    }, [])

    // add to cart function
    const addToCart = (product) => {
        const existingItem = cartItems.find(item => item.id === product.id);

        if (existingItem) {
            const updatedCart = cartItems.map(item => item.id === product.id ? { ...item, count: item.count + 1 } : item);
            setCartItems(updatedCart);
            toast.warning("Already in card", {
                position: "top-center",
                autoClose: 1000
            });
        } else {
            setCartItems([...cartItems, { ...product, count: 1 }]);
            toast.success("Product added in cart", {
                position: "top-center",
                autoClose: 1000
            })
        }
    };

    // sort function
    const handleSortChange = (e) => {
        const value = e.target.value;
        setSortOrder(value);
        // sortCartData(value);
    };

    const handleCategory = (e) => {
        const value = e.target.value;
        // console.log("Value", value);
        setSelectCategory(value);
    }

    const handlePriceRange = (e) => {
        const value = e.target.value;
        // console.log(value);
        setPrice(value);
    }
    // Rating change handler
    const handleRatingChange = (e) => {
        const value = parseInt(e.target.value);
        setSelectedRatings(prev => {
            if (prev.includes(value)) {
                return prev.filter(rating => rating !== value);
            } else {
                return [...prev, value];
            }
        });
    };

    // Filter
    useEffect(() => {
        const mainFilter = data
            ?.filter((val) => {
                // Check category filter
                if (selectCategory !== "" && val.category.toLowerCase() !== selectCategory.toLowerCase()) {
                    return false;
                }
                // Check price filter
                if (price !== 0 && parseInt(val.price) >= parseInt(price)) {
                    return false;
                }
                //check on rating
                if (selectedRatings.length > 0 && !selectedRatings.some(rating => parseInt(val.rating.toFixed(1)) >= parseInt((rating.toFixed(1))))) {
                    return false;
                }
                return true;
            })
            ?.sort((a, b) => {

                if (sortOrder === 'lowToHigh') {
                    return a.price - b.price;
                } else if (sortOrder === 'highToLow') {
                    return b.price - a.price;
                }
                return 0; // No sorting if sortOrder is empty or invalid
            });

        // console.log(mainFilter);
        setData2(mainFilter);

    }, [sortOrder, selectCategory, price, selectedRatings,setData2,data]);

    const handleReset = () => {
        setPrice(0);
        setSelectCategory("");
        setSortOrder('');
        setSelectedRatings([]);
        setData2(data);
    }

    return (

        <div className="container-fluid mt-5 " >
            <div className="row mx-2 " >

                <div className="col-md-3 sidebar"  >
                    <div className="p-3 bg-light shadow-lg border-black border-1">
                        <h3 className='text-center'>Sort & Filter</h3>

                        {/* sort record */}
                        <div className="mb-3" >
                            <label htmlFor="sortOrder" className="form-label">Sort Price:</label>
                            <select id="sortOrder" className="form-select" onChange={handleSortChange} value={sortOrder}>
                                <option value="select">Select</option>
                                <option value="lowToHigh">Price-Low to High</option>
                                <option value="highToLow">Price-High to Low</option>
                            </select>
                        </div>

                        {/* category */}
                        <div className="mb-3">
                            <label htmlFor="selectCategory" className="form-label">Select Category:</label>
                            <select id="selectCategory" className="form-select" onChange={handleCategory} value={selectCategory}>
                                <option value="select">Select</option>
                                <option value="smartphones">Smartphones</option>
                                <option value="laptops">Laptops</option>
                                <option value="fragrances">Fragrances</option>
                                <option value="skincare">Skincare</option>
                                <option value="groceries">Groceries</option>
                                <option value="home-decoration">Home Decoration</option>
                                <option value="furniture">Furniture</option>
                                <option value="tops">Tops</option>
                                <option value="womens-dresses">Women's Dresses</option>
                                <option value="womens-shoes">Women's Shoes</option>
                                <option value="mens-shirts">Men's Shirts</option>
                                <option value="mens-shoes">Men's Shoes</option>
                                <option value="mens-watches">Men's Watches</option>
                                <option value="womens-watches">Women's Watches</option>
                                <option value="womens-bags">Women's Bags</option>
                                <option value="womens-jewellery">Women's Jewellery</option>
                                <option value="sunglasses">Sunglasses</option>
                                <option value="automotive">Automotive</option>
                                <option value="motorcycle">Motorcycle</option>
                                <option value="lighting">Lighting</option>
                            </select>
                        </div>

                        {/* Range for price */}
                        <div className="mb-3">
                            <label htmlFor="priceRange" className="form-label">Price Range:</label> <br />
                            <input className="w-100" type="range" min="0" max="1500" step="250" id="priceRange" value={price} onChange={handlePriceRange} />

                            <div className="d-flex justify-content-between">
                                <p className="border border-black px-3 py-2">Min: $0</p>
                                <p className='text-primary'>{price > 0 && <span>${price}</span>}</p>
                                <p className="border border-black px-2 py-2">Max: $1500</p>
                            </div>
                        </div>

                        {/* Rating Check box */}
                        <div className='mb-3'>
                            <label className='form-label'>Rating: </label>
                            <div className='ms-2'>
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    value={5}
                                    checked={selectedRatings.includes(5)}
                                    onChange={handleRatingChange}
                                /> 5   <FaStar style={{ fontSize: "0.8em", marginBottom: "5px",marginRight:"5px" }} /> 
                                and above <br />
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    value={4}
                                    checked={selectedRatings.includes(4)}
                                    onChange={handleRatingChange}
                                /> 4   <FaStar style={{ fontSize: "0.8em", marginBottom: "5px",marginRight:"5px" }}/> 
                                and above <br />
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    value={3}
                                    checked={selectedRatings.includes(3)}
                                    onChange={handleRatingChange}
                                /> 3  <FaStar style={{ fontSize: "0.8em", marginBottom: "5px",marginRight:"5px" }}/> 
                                 and above <br />
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    value={2}
                                    checked={selectedRatings.includes(2)}
                                    onChange={handleRatingChange}
                                /> 2  <FaStar style={{ fontSize: "0.8em", marginBottom: "5px" ,marginRight:"5px"}}/> 
                                and above <br />
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    value={1}
                                    checked={selectedRatings.includes(1)}
                                    onChange={handleRatingChange}
                                /> 1  <FaStar style={{ fontSize: "0.8em", marginBottom: "5px",marginRight:"5px" }}/> 
                                and above <br />
                            </div>
                        </div>

                        <button type="button" className="btn btn-warning w-100" onClick={handleReset}>Clear</button>
                    </div>
                </div>

                <div className="col-md-9 content" >
                    {/* <h3 className="text-center mt-2">New Products</h3> */}

                    {loaderData === undefined || loaderData === null ? (
                        <div className="text-center mt-4">
                            <p>Unable to fetch data. Please try again later.</p>
                        </div>
                    ) : (
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            {dataMsg ? (
                                <div style={{ marginLeft: "30vw", fontSize: "large" }}>No search Found</div>
                            ) : (
                                data2?.length > 0 && data2.map((val) => (
                                    <div key={val.id} className="col">

                                        <div className="card product-card shadow border-black border-0">
                                          
                                            <img className="card-img-top product-img" src={val?.thumbnail} alt={val.title} loading='lazy' />

                                            <div className="card-body">
                                                <p className="card-title text-center text-capitalize" style={{ height: "4.4vh", fontSize: "large" }}>
                                                    {val.title}
                                                </p>

                                                <span className="bg-success text-white mx-3 px-2 rounded-1">
                                                    {val.rating.toFixed(1)} <FaStar style={{ fontSize: "0.8em", marginBottom: "5px" }} />
                                                </span>
                                                <p className="card-text mx-2 truncate-text">{val.description}</p>
                                                <div className="d-flex justify-content-around" style={{ marginTop: "-1.5vh" }}>
                                                    <p className="card-text text-success" style={{ fontSize: "1rem" }}>
                                                        {val.discountPercentage}% Off
                                                    </p>
                                                    <p className="card-text ms-2" style={{ fontSize: "1.1em" }}>${val.price}</p>
                                                </div>
                                                <p className="text-center">
                                                    <button className="btn btn-primary py-2" onClick={() => addToCart(val)}>
                                                        <IoCartOutline style={{ fontSize: "1.2rem", marginRight: "0.5vw" }} />
                                                        Add to Cart
                                                    </button>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
}
export default Products;
