import '../../styles/login-signup.css';
import { Link, useHistory } from 'react-router-dom';
import { useLayoutEffect, useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const history = useHistory();

  const [signup, setSignup] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    conPassword: '',
  });
  const [status, setStatus] = useState({
    success: '',
    error: '',
  });

  const handleChange = (e) =>
    setSignup({ ...signup, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const formData = new FormData();
      // Object.keys(signup).forEach(function (key) {
      //   formData.append(key, signup[key]);
      // });
      if (signup.password === signup.conPassword) {
        const res = await axios.post('/api/user/signup', signup);
        if (res.data) {
          setStatus({ success: 'Signup successful' });
          history.push('/');
        } else {
          setStatus({ error: 'Unable to create user' });
        }
      } else {
        setStatus({ error: 'password did not matched' });
      }
    } catch (error) {
      setStatus({ error: error.response?.data?.error });
    }
  };

  useLayoutEffect(() => {
    const isLoggedIn = async () => {
      try {
        const res = await axios.get('/api/user/isLoggedIn');
        if (res.data?.isLoggedIn) {
          history.push('/');
        }
      } catch (error) {
        console.log('error: ', error.response);
      }
    };
    isLoggedIn();
    return;
  }, []);

  return (
    <>
      <div className='login_section signup_section container-fluid'>
        <div className='center_box'>
          <form method='POST' onSubmit={handleSubmit}>
            <h4>Create account</h4>
            <div className='row'>
              <div className='signup_row col-4'>
                <label htmlFor='fname'>First name *</label>
                <input
                  type='text'
                  value={signup.firstName}
                  onChange={handleChange}
                  name='firstName'
                  id='fname'
                  required
                />
              </div>
              <div className='signup_row col-4'>
                <label htmlFor='mname'>Middle name</label>
                <input
                  type='text'
                  value={signup.middleName}
                  onChange={handleChange}
                  name='middleName'
                  id='mname'
                />
              </div>
              <div className='signup_row col-4'>
                <label htmlFor='lname'>Last name *</label>
                <input
                  type='text'
                  value={signup.lastName}
                  onChange={handleChange}
                  name='lastName'
                  id='lname'
                  required
                />
              </div>
            </div>
            <div className='row'>
              <div className='signup_row col-6'>
                <label htmlFor='email'>Email *</label>
                <input
                  type='text'
                  value={signup.email}
                  onChange={handleChange}
                  name='email'
                  id='email'
                  required
                />
              </div>
              <div className='signup_row col-6'>
                <label htmlFor='phone'>Phone *</label>
                <input
                  type='text'
                  value={signup.phone}
                  onChange={handleChange}
                  name='phone'
                  id='phone'
                  required
                />
              </div>
            </div>
            <div className='row'>
              <div className='signup_row col-6'>
                <label htmlFor='password'>Password *</label>
                <input
                  type='text'
                  value={signup.password}
                  onChange={handleChange}
                  name='password'
                  id='password'
                  required
                />
              </div>
              <div className='signup_row col-6'>
                <label htmlFor='conPassword'>Confirm password *</label>
                <input
                  type='text'
                  value={signup.conPassword}
                  onChange={handleChange}
                  name='conPassword'
                  id='conPassword'
                  required
                />
              </div>
            </div>
            <div className='input_row col-4'>
              <button type='submit'>Signup</button>
            </div>
            {status.success && (
              <p className='msg text-success'>{status.success}</p>
            )}
            {status.error && <p className='msg text-danger'>{status.error}</p>}
            <p className='redirect'>
              Already have an account? <Link to='/login'>Login</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
