import React, { useState } from 'react'

function ImagePreview() {

    //^ set image 
    const [imageData, setImageData] = useState("")

    //^ set for preview
    const [image2, setImage2] = useState("")

    //^ error
    const [err, setErr] = useState(false)


    const handleChange = (e) => {
        // console.log(e.target.value);  // path
        // console.log(e.target.files[0]);   // name , size, type , 

        const responseImage = e.target.files[0]

        if (responseImage.size && responseImage.size > 1 * 1000 * 1024) {
            setErr(true)
            // console.log("file Size Exceed");
            
        } else {
            const file = new FileReader();
            file.onload = (e) => {
                setImageData(e.target.result)
                setErr(false)
            }
            file.readAsDataURL(e.target.files[0]);
        }
        // console.log(file);
    }

    //^ Preview  function
    const handlePreview = () => {
        setImage2(imageData)
    }

    return (
        <div style={{ width: "500px", height: "500px", border: "1px solid black", margin: "auto", marginTop: "40px" }}>
            <form action="">
                <h3>Image</h3>

                <label htmlFor="image">Image Upload</label> <br /><br />
                <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleChange}
                // accept='image/png, image/jpeg,image/jpg'

                />

                {err ? <p style={{ color: "red" }}>File Size exceed</p> : " "}
            </form>
            <br /><br />
            <button onClick={handlePreview}>Preview Image</button>

            <button onClick={() => setImage2("")} style={{ marginLeft: "10px" }}>Close</button>

            <br /><br />
            <div>
                <iframe
                    src={image2}
                    title="image-preview"
                    width="200"
                    height="200"
                    style={{ objectFit: "contain", overflow: "visible" }}>
                </iframe>

            </div>


        </div>
    )
}

export default ImagePreview;
