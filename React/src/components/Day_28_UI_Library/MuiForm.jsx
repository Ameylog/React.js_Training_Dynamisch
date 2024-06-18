import React, { useState } from 'react';
import { TextField, Button, Typography, Select, MenuItem, InputLabel, Switch, Checkbox, Fab, RadioGroup, FormControlLabel, Radio, FormLabel, Rating, Stack, Slider, Box, Avatar, Badge, Tooltip, IconButton, Alert, CircularProgress, Skeleton } from "@mui/material";
import { Container, Card, CardBody } from "react-bootstrap/";
import { deepOrange } from '@mui/material/colors';



function MuiForm() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);

  const [value, setValue] = React.useState(2);

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

              <div>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={loginData.age}
                  label="Age"
                  placeholder='Age'
                  name='age'
                  // size='medium'
                  fullWidth
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </div>


              <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>

              <p>
                <Checkbox defaultChecked size="small" color="success" /> Remember Me </p>

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


            </form>
          </CardBody>
        </Card>

      </Container >

      <p>off<Switch defaultChecked />on</p>

      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />


      <div className='d-flex justify-content-center align-content-center'>

        <div className='d-flex justify-content-center align-content-center'>

          <Box sx={{ width: 300 }}>
            <Slider
              defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
          </Box>
        </div>
      </div>

      <div className='d-flex justify-content-center align-content-center'>

        <Stack direction="row" spacing={2}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
        </Stack>
      </div>

      <div className='d-flex justify-content-center align-content-center w-50 ' style={{ marginLeft: "20vw" }}>

        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="success"  >This is a success Alert.</Alert>
          <Alert severity="info" variant="filled" >This is an info Alert.</Alert>
          <Alert severity="warning" variant="filled" >This is a warning Alert.</Alert>
          <Alert severity="error" variant="outlined" >This is an error Alert.</Alert>
        </Stack>


        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>

      </div>
      <br />

      <div style={{ marginLeft: "20vw" }}>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rounded" width={210} height={60} />
      </div>



    </>
  );
}

export default MuiForm;
