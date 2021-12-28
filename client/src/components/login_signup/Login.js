import '../../styles/login-signup.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className='login_section'>
        <div className='center_box'>
          <form>
            <h4>Login</h4>
            <div className='input_row'>
              <label htmlFor='email'>Email</label>
              <input type='text' name='email' id='email' />
            </div>
            <div className='input_row'>
              <label htmlFor='password'>Password</label>
              <input type='text' name='password' id='password' />
            </div>
            <div className='input_row'>
              <button type='button'>Login</button>
            </div>
            {/* <p className='msg'>Error message</p> */}
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
