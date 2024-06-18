import React from 'react'
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import '../product/product.css';
import img1 from "../../../images/image4.jpg";
import img2 from "../../../images/image2.jpg";
import img3 from "../../../images/image5.avif"
import homeData  from "./homeData.js";

function Home() {
  const navigator = useNavigate();

  const handleProduct = () => {
    return navigator("product")
  }

  return (

    <div className='container '>
      <div className='d-flex justify-content-center align-content-center '>
        <div className='card mt-5 w-75 shadow'>
          <div className='w-100'>
            <Carousel>
              <Carousel.Item interval={3000}>
                <img
                  className="d-block "
                  src={img1}
                  alt="First slide" width={1000} height={500}
                />
                <Carousel.Caption>
                  <div className="text-center">
                    <p>World class Best Shoes </p>
                    <button onClick={handleProduct} className="btn btn-primary">Buy Now</button>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item interval={3000}>
                <img
                  className="d-block "
                  src={img2}
                  alt="Second slide"  width={1000} height={500}
                />

                <Carousel.Caption>
                  <div className="text-center">
                    <p className='mb-3'>We have World class furniture</p>
                    <button onClick={handleProduct} className="btn btn-primary">Buy Now</button>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item interval={3000}>
                <img
                  className="d-block"
                  src={img3}
                  alt="Third slide"  width={1000} height={500}
                />
                <Carousel.Caption>
                  <div className="text-center">
                    <p>we have affordable to branded clothes </p>
                    <button onClick={handleProduct} className="btn btn-primary">Buy Now</button>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

      </div>

      <br />

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 mb-3 g-2">
        {
            homeData?.map((val) => {
              return <div key={val.id} className='col'>
                <div className='d-flex justify-content-around align-items-center ms-2'>
                  <div className='mt-4'>

                    <div className="product-div shadow border-black border-1"
                      style={{ width: "18.5rem", height: "17rem" }} >

                      {/* Image */}
                      <img className="card-img-top product-img" src={val.images[0]} alt={val.title} loading='lazy' />

                      <div className="card-body">

                        {/* Title */}
                        <p className="card-title text-center text-capitalize" style={{ height: "4.4vh", fontSize: "large" }}>
                          {val.title}
                        </p>

                        {/* Add to cart button  */}
                        <p className='text-center'>
                          <button className="btn btn-primary py-2" onClick={handleProduct} >
                            Buy now
                          </button>
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
  )
}

export default Home;
