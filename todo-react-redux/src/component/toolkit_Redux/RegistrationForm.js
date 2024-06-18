import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, setEmail, setPassword, resetForm } from './userSlice';

function RegistrationForm() {

  const dispatch = useDispatch();
  const { username, email, password } = useSelector(state => state.user);

  const handleUsernameChange = (e) => {
    dispatch(setUsername(e.target.value));
  };

  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(setPassword(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration Form Data:', { username, email, password });
    dispatch(resetForm());
  };

  return (

    <div className='container'>

      <div className='d-flex justify-content-center'>


        <div className='card mt-4 col-sm-6 col-md-4 col-lg-4   ms-5'>

          <div className='card-body text-center'>

            <form onSubmit={handleSubmit}>
              <h3 className='mb-4'>Registration</h3>
              <div>
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  placeholder="Username"
                  className='mt-2'
                  required
                />
              </div>

              <div>

                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Email"
                  className='mt-2'
                  required
                />
              </div>

              <div>

                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Password"
                  className='mt-2'
                  required
                />
              </div>

              <button type="submit" className='mt-2 bg-primary text-white rounded-1 border-0 px-2 py-1 text-center'>Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
