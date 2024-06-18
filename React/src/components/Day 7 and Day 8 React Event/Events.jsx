import React, { useState } from 'react'
import img1 from "../../images/image1.jpg"
function Events() {

    const [text, setText] = useState("")
    const [types, setTypes] = useState("")

    const [mouse, setMouse] = useState("")

    const handleOnChange = (e) => {
        // console.log(e);     // event handler Object => e
        // console.log(e.target);
        // console.log(e.timeStamp);
        setText(e.target.value)
        const res = e.target
        console.log("attribute:-", res.getAttribute('type'));
        setTypes(res.getAttribute('type'))
    }

    const handlerSubmit = (val) => {
        // console.log(e.key);
        alert(`Value is:- ${val}`)
    }

    const handleInputOnkey = (e) => {
        if (e.key === "Enter") {
            // console.log(e.key);  show the key
            // console.log(e.target.value)
            const val = e.target.value
            handlerSubmit(val);
        }
    }
    return (
        <div>
            <h3>Events </h3>

            <p>mouse ,keyboard ,all input type field</p>

            Text <input type="text" onChange={handleOnChange} />   {types === "text" && text}
            <br /><br />

            Number <input type="number" onChange={handleOnChange} /> {types === "number" && text}
            <br /><br />

            Date <input type="date" onChange={handleOnChange} /> {types === "date" && text}
            <br /><br />

            Email <input type="email" onChange={handleOnChange} /> {types === "email" && text}
            <br /><br />

            Checkbox <input type="checkbox" onChange={handleOnChange} value="true" /> {types === "checkbox" && text}
            <br /><br />

            Password <input type="password" onChange={handleOnChange} />  {types === "password" && text}
            <br /><br />

            Radio <input type="radio" name="gender" value="male" id="male" onChange={handleOnChange} />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" value="female" id="female" onChange={handleOnChange} />
            <label htmlFor="female">Female</label>
            <br />

            <p><i>Radio Value:-</i>{types === "radio" && text}</p>
            <br /><br />

            File <input type="file" onChange={handleOnChange} /> {types === "file" && text}
            <br /><br />

            Submit <input type="submit" onClick={() => alert("Value is submitted")} value="submit" /> {types === "submit" && text}
            <br /><br />

            Tel <input type="tel" onChange={handleOnChange} />  {types === "tel" && text}
            <br /><br />

            time <input type="time" onChange={handleOnChange} /> {types === "time" && text}
            <br /><br />

            range <input type="range" onChange={handleOnChange} />  {types === "range" && text}
            <br /><br />

            search <input type="search" onChange={handleOnChange} />   {types === "search" && text}
            <br /><br />

            color <input type="color" onChange={handleOnChange} />   {types === "color" && text}
            <br /><br />

            Image <input type="image" src={img1}
                width={100} height={100} alt='Image Loading'
                onChange={handleOnChange} />  {types === "image" && text}
            <br /><br />

            Hidden <input type="hidden" onChange={handleOnChange} />  {types === "hidden" && text}
            <br /><br />

            Datetime <input type="datetime-local" onChange={handleOnChange} /> {types === "datetime-local" && text}
            <br /><br />

            Month <input type="month" onChange={handleOnChange} />  {types === "month" && text}
            <br /><br />

            Url <input type="url" onChange={handleOnChange} /> {types === "url" && text}
            <br /><br />

            Week <input type="week" onChange={handleOnChange} /> {types === "week" && text}
            <br /><br />

            Reset <input type="reset" onChange={handleOnChange} /> {types === "reset" && text}
            <br /><br />

            Button <input type="button" onChange={handleOnChange} /> {types === "button" && text}
            <br /><br />

            <textarea name="texts" id="texts" cols="5" rows="5" type="textarea" onChange={handleOnChange} placeholder='textarea'>

            </textarea>
            {types === "textarea" && text}

            <br /> <br />

            <h1>Select</h1>

            <select name="car" id="car" onChange={handleOnChange} type="selected">
                <option value="select" disabled selected="selected">Select</option>
                <option value="Audi">Audi</option>
                <option value="BMW">BMW</option>
                <option value="Tata">Tata</option>
                <option value="Mahidra">Mahidra</option>
            </select>
            <p><i>Selected value:-</i> {types === "selected" && text}</p>


            <h1>Nested Select</h1>

            <select name="bike" id="bike" type="nested" onChange={handleOnChange}>
                <optgroup label='Indian'>
                    <option value="Pulsar">Pulsar</option>
                    <option value="Honds sp125">Honds sp125</option>
                    <option value="Hero">Hero</option>
                </optgroup>
                <optgroup label='other'>
                    <option value="Yamaha fz">Yamaha fz</option>
                    <option value="Kawasaki">Kawasaki</option>
                </optgroup>
            </select>

            <p><i>Value:-</i>{types === "nested" && text}</p>

            <br />
            <h1>Mouse Events</h1>

            <img src={img1} alt="Nature"
                width={100}
                height={100}
                onMouseMove={() => setMouse("onMouseMove")}
                onChange={handleOnChange}
                type="imaged"
            />
            <br />
            {mouse}
            <br />

            <button onClick={(e) => alert("Button is click")}>Click me</button><br /><br />
            <p onDoubleClick={(e) => alert("Click Double")}>Hello (onDoubleClick)</p>

            <p onMouseUp={(e) => e.target.style.color = "blue"}>Welcome to pune (onMouseUp)</p>

            <p onMouseDown={(e) => e.target.style.color = "red"}>Welcome to pune(onMouseDown)</p>

            <p onMouseEnter={(e) => e.target.style.color = "gray"}
                onMouseLeave={(e) => e.target.style.color = "violet"}
            >Welcome to pune (onMouseEnter && onMouseLeave)
            </p>

            <p onMouseOver={(e) => e.target.style.backgroundColor = "red"}
                onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}>
                Welcome to pune (onMouseOver)
            </p>


            <p onContextMenu={(e) => alert("Right Click")}>Mouse Right Click</p>
            <br />
            <br />

            <h1>Keyboard Events</h1>

            <p><i>onKeyUp and onKeyDown</i></p>
            <input type="text" onKeyUp={(e) => e.target.style.color = "red"}
                onKeyDown={(e) => e.target.style.color = "blue"}
            />
            <br /><br />

            <p><i>Submit on Enter Button</i></p>
            <input type="text" onKeyUp={handleInputOnkey} />

            <br /><br />

            <h1>Focus</h1>

            <p><i>Focus</i></p>
            <input type="text" onFocus={e => e.target.style.outlineColor = "red"} />

            <p><i>Blur</i></p>
            <input type="text" onBlur={e => e.target.value} />

        </div>
    )
}

export default Events
