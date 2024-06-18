import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function DemoAPI() {

  const [apiData, setApiData] = useState([]);

  const [data, setData] = useState({
    userId: "",
    title: "",
    body: ""
  })

  useEffect(() => {
    apiGet()
    // axios.get(URL)
    //   .then((res) => {
    //     setApiData([...res.data])
    //   }).catch((error) => {
    //     console.log(error);
    //   })
  }, [])


  const URL = "https://jsonplaceholder.typicode.com/posts";

  //^ get Api 
  const apiGet = async () => {
    try {
      const response = await axios.get(URL);
      const res = response.data;
      // console.log(res);
      setApiData([...res])

    } catch (error) {
      console.log(error);
    }
  }

  //^ Post Api
  const apiPost = async () => {
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", data);

      if (response.status === 201) {
        toast.success("Record Added Sucessfully");
      }
      const res = response.data;

      setData({ userId: "", title: "", body: "" })
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  //^ Delete Api
  const apiDelete = async () => {
    try {
      const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${parseInt(data.userId)}`);

      if (response.status === 200) {
        toast.warning("Record Deleted Sucefully")
      }

      setData({ userId: "", title: "", body: "" })
      // console.log(res);

    } catch (error) {
      console.log(error);
    }
  }

  //^ update Api
  const apiUpdate = async () => {
    try {
      const response = await axios.put("https://jsonplaceholder.typicode.com/posts/1", data);
      console.log(response.data);
      if (response.status === 200) {
        toast.success("Record Updated Sucessfully");
      }

      setData({ userId: "", title: "", body: "" })
    } catch (error) {
      console.log(error);
    }

  }

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }


  return (
    <div>
      <h3>Fetching Api using Axios </h3> <br /><br />

      <div>
        <div>
          <input type="number" name='userId' id='userId' placeholder='Add userID' onChange={handleChange} value={data.userId} /> <br /><br />

          <input type="text" name="title" id="title" placeholder='Add title' onChange={handleChange} value={data.title} />
          <br /><br />

          <input type="text" name="body" id="body" placeholder='Add description' onChange={handleChange} value={data.body} />

        </div>

        <br />
        <div style={{ display: "flex", justifyContent: "center", }}>

          <button onClick={apiDelete} style={{ border: "none", background: "#640D6B", color: "white", padding: "12px", borderRadius: "6%" }}>Delete Record</button>
          <button onClick={apiPost} style={{ marginLeft: "15px", border: "none", background: "#41B06E", borderRadius: "6%" }}>Create Record</button>
          <button onClick={apiUpdate} style={{ marginLeft: "15px", border: "none", background: "#5BBCFF", borderRadius: "6%" }}>Update Record</button>

        </div>

      </div>
      <ToastContainer />
      <br /><br />

      {/*Table */}
      <div style={{ marginLeft: "20%", marginBottom: "5%", marginRight: "5%" }}>
        <table border="1px solid black">
          <thead>
            <tr>
              <th style={{ border: "1px solid black" }}>ID</th>
              <th style={{ border: "1px solid black" }}>Title</th>
              <th style={{ border: "1px solid black" }}>Completed</th>
            </tr>
          </thead>

          <tbody>

            {apiData.map((val, index) => {
              return <tr key={val.id} style={{ border: "1px solid black" }}>
                <td style={{ border: "1px solid black" }}>{val.id}</td>
                <td style={{ border: "1px solid black" }}>{val.title}</td>
                <td style={{ border: "1px solid black" }}>{val.body}</td>
              </tr>
            })}
          </tbody>
        </table>


      </div>
    </div>
  )
}

export default DemoAPI;