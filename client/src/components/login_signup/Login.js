import { useLayoutEffect, useState } from 'react';
import '../../styles/login-signup.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const history = useHistory();
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const [status, setStatus] = useState({
    success: '',
    error: '',
  });

  const handleChange = (e) =>
    setLogin({ ...login, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (login.email === '' || login.password === '') {
        setStatus({ error: 'All fields are required' });
      } else {
        const res = await axios.post('/api/user/login', {
          ...login,
        });
        if (res?.data?.user) {
          setStatus({ success: 'Login successful' });
          if (res?.data?.user?.isHospitalAdmin || res?.data?.user?.isRahAdmin) {
            history.push('/');
          } else {
            history.push('/');
          }
        } else {
          setStatus({ error: 'Unable to login user' });
        }
      }
    } catch (error) {
      console.log(error.response);
      setStatus({ error: error.response.data.error });
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
      <div className='login_section'>
        <div className='center_box'>
          <form method='POST' onSubmit={handleLogin}>
            <h4>Login</h4>
            <div className='input_row'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                value={login.email}
                onChange={handleChange}
                name='email'
                id='email'
                required
              />
            </div>
            <div className='input_row'>
              <label htmlFor='password'>Password</label>
              <input
                type='text'
                value={login.value}
                onChange={handleChange}
                name='password'
                id='password'
                required
              />
            </div>
            <div className='input_row'>
              <button type='submit'>Login</button>
            </div>
            {status.success && (
              <p className='msg text-success'>{status.success}</p>
            )}
            {status.error && <p className='msg text-danger'>{status.error}</p>}
            <p className='redirect'>
              Don't have an account? <Link to='/signup'>Signup</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
