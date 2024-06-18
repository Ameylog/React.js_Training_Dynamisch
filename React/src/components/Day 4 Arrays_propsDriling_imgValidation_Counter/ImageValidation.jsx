import React, { useState } from 'react'
import img1 from "../../images/image1.jpg"
import img2 from "../../images/logo512.png"

function ImageValidation() {

  const [image, setImage] = useState(img1);

  const hanleImage = () => {
    setImage(img2)
  }
  
  
  return (
    <div>
      <h3>Image Validation</h3>
      <img src={image} onError={hanleImage} alt="Images" width={200} height={200} title='Nature' loading='lazy'
      />

        <br /><br />
      <button onClick={hanleImage}>show on Error Image</button>
    </div>
  )
}

export default ImageValidation;
