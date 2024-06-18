import { useAuth0 } from '@auth0/auth0-react';
import { TextField, Typography, Button, Grid } from '@mui/material';
import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/CardBody';
import Container from 'react-bootstrap/Container';

function Auth0Login() {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [showPassword, setShowPassword] = useState(false);

    // const { loginWithRedirect } = useAuth0();

    const { user, loginWithRedirect, isAuthenticated } = useAuth0();

    // const [value, setValue] = React.useState(2);

    const handleLogin = () => {
        console.log(loginData);
        setLoginData({
            email: "",
            password: "",
            confirmPassword: "",
            age: ""
        })
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    return (
        <>
            <Container className='mt-5 d-flex justify-content-center'>
                <Card className='col-sm-6 col-md-5 col-lg-4'>
                    <CardBody className='shadow'>
                        <form action="" className='text-center'>

                            <Typography component="h1" variant="h5" className='text-center mb-3'>
                                Form
                            </Typography>

                            <div>
                                <TextField
                                    id="outlined-basic"
                                    label="Email"
                                    variant="outlined"
                                    className='mb-2'
                                    size='small'
                                    sx={{ width: '75%' }}
                                    name="email"
                                    onChange={handleChange}
                                    value={loginData.email}
                                />
                            </div>

                            <div>
                                <TextField
                                    id="filled-basic"
                                    label="Password"
                                    variant="filled"
                                    className='mb-2 mt-2'
                                    size='small'
                                    sx={{ width: '75%' }}
                                    name='password'
                                    type={showPassword ? 'text' : 'password'}
                                    onChange={handleChange}
                                    value={loginData.password}
                                />
                            </div>

                            <div>
                                <TextField
                                    id="standard-basic"
                                    label="Confirm Password"
                                    variant="standard"
                                    className='mb-3 mt-2'
                                    size='small'
                                    sx={{ width: '75%' }}
                                    name='confirmPassword'
                                    type={showPassword ? 'text' : 'password'}
                                    onChange={handleChange}
                                    value={loginData.confirmPassword}


                                />
                            </div>


                            <div className='text-center mb-3 mt-3'>
                                <Button
                                    variant="contained"
                                    color="success"
                                    sx={{ width: '50%' }}
                                    onClick={handleLogin}
                                >
                                    Login
                                </Button>
                            </div>

                            <button onClick={(e) => loginWithRedirect()}>Login With Redirect</button>


                        </form>

                    </CardBody>
                </Card>
            </Container>
        </>
    )
}
export default Auth0Login;
