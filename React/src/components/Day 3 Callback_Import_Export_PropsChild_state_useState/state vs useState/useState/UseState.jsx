import React, { useState } from 'react'
import svg from "../../../../images/svgimage.svg"
import img1 from "../../../../images/image1.jpg"
import logo from "../../../../images/logo512.png"

function UseState() {

    const [number, setNumber] = useState(25)     //number
    const [nulls, setNulls] = useState(null)     // null
    const [bool, setBool] = useState(false)      // act as a flag  not show on the documnet   // boolean
    const [big, setBig] = useState(25n)          //bigint
    const [symbol, setSymbol] = useState(Symbol("hii"))      // Symbol
    const [str, setStr] = useState("Namskar,welcome to Pune")      // String
    const [defined, setDefined] = useState(undefined)        //undefine

    // nested object
    const [obj, setObj] = useState({
        fname: "Amey",
        lname: "Shende",
        address: {
            city: "Pune",
            pincode: 443355,
            country: "India"
        }
    })

    // function 
    const [fun, setFun] = useState(() => { return <p>"Welcome to Pune"</p>, console.log("Hiii"); });

    // Array
    const [arr, setArr] = useState([1, 2, 4, 5, 8, 3])

    // array of Object
    const [arrObj, setArrObj] = useState([
        { id: 0, car: "BMW", country: "Gernmany" },
        { id: 1, car: "Honda", country: "Japan" },
        { id: 2, car: "Kia", country: "Korea" },
        { id: 3, car: "Tata", country: "India" },
    ])

    //jsx
    const [jsx, setJsx] = useState(
        <div> <p>This jsx from useState</p></div>)

    //svg
    const [svgdemo, setSvgdemo] = useState(svg)

    //logo
    const [logos, setLogos] = useState(logo)

    //image
    const [imageData, setImageData] = useState(img1)

    //image tag in usestate
    const [images, setImages] = useState(<img src={img1} width={100} alt='imagas' />)

    // componenst in useState
    const [component, setComponent] = useState(<Child />)

    const chageDate = () => {
        // setObj({ ...obj,fname: "Akash",address:{country:"USA"} }) // change value

        //set nested Object
        setObj(prevStyle => ({
            ...prevStyle,
            fname: "Akash",
            address: { ...prevStyle.address, country: "USA" }
        }))

        setArr([2, 4, 3, 5, 7])
        setBool((bool === true) ? false : true)  // set true or false

        // setArr()    => empty set function show error
        setComponent(<Child2 />)

        // set array of object
        setArrObj(arrObj.map(obj => {
            if (obj.id === 1) {
                return { ...obj, country: "South Korea" }
            }
            return obj;
        }));
    }

    return (
        <div>
            <h3>State in Functional Component</h3> <br />
            <p>First Name: {obj.fname}</p>
            <p>Last Name:- {obj.lname}</p>
            <p>address:- {obj.address.city} ,{obj.address.pincode},{obj.address.country}</p>

            <button onClick={chageDate}>Change Data</button>

            <p>Array of Object {arrObj.map((val, index) => {
                return <li key={index}>{val.car} - {val.country}</li>
            })}</p>


            <p>{number}</p><br />
            <p>{nulls}</p><br />
            <p>{bool}</p> <br />
            {console.log(bool)}
            <p>{big}</p> <br />
            <p>{symbol}</p> <br />
            <p>{str}</p>  <br />
            <p>{defined}</p> <br />

            <p>Array:- {arr + " "}</p>
            <p>Array with map {arr.map((val) => val)}</p>

            <p>JSX:-</p>
            {jsx}

            <p>Logo:-</p>
            <img src={logos} alt="" width={100} />

            <p>SVG:-</p>
            <img src={svgdemo} alt="" />

            <p>Image:-</p>
            <img src={imageData} alt="" width={100} height={100} />

            <p>Passing image tag in useState:-</p>
            {images}

            <p>Showing other component:-</p>
            {component}

            <p>Function:{fun}</p>
        </div>
    )
}

export default UseState

export function Child() {
    return (
        <>
            <p>This child from child component it come from useState</p>
        </>
    )
}

export function Child2() {
    return (
        <>
            <p>This child from child 2 component it come from useState</p>
        </>
    )
}