// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import Profile from './component/Profile';
import LogoutButton from './component/Logout';

function App() {

  const { user, loginWithRedirect, isAuthenticated } = useAuth0();

  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  // console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData({
      email: "",
      password: ""
    })
  }

  const handleLogin = (connection) => {
    loginWithRedirect({
      connection: connection,
    });
  };


  return (
    <div className="App">

      {!isAuthenticated ? (
        <>
          <div style={{ marginTop: "5vh" }}>
            <form style={{ border: "1px solid black", width: "400px", height: "300px", paddingTop: "5vh" }}>
              <h3>Login</h3>
              <input type="text" placeholder='Email' name="email" value={data.email} onChange={handleChange} /> <br /><br />
              <input type="password" placeholder='Password' name="password" value={data.password} onChange={handleChange} /> <br /><br />
              <button onClick={handleSubmit}>Login</button> <br /><br />

              <div >
                <button onClick={() => handleLogin('google-oauth2')}>
                  Login with Google
                </button> <br /><br />
                <button onClick={() => handleLogin('facebook')}>
                  Login with Facebook
                </button><br /><br />
                <button onClick={() => handleLogin('github')}>
                  Login with GitHub
                </button> <br /><br />
                <button onClick={() => handleLogin('linkedin')}>
                  Login with LinkedIn
                </button>
              </div>
            </form>
          </div>
        </>
      ) : null}
      {console.log("usersData:-", user)}

      <Profile />

      <LogoutButton />

      {/* {JSON.stringify(user)} */}
    </div>
  );
}

export default App;
