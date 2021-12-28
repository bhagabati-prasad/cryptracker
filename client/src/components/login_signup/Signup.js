import '../../styles/login-signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
      <div className='login_section signup_section container-fluid'>
        <div className='center_box'>
          <form>
            <h4>Create account</h4>
            <div className='row'>
              <div className='signup_row col-4'>
                <label htmlFor='email'>First name</label>
                <input type='text' name='email' id='email' />
              </div>
              <div className='signup_row col-4'>
                <label htmlFor='email'>Middle name</label>
                <input type='text' name='email' id='email' />
              </div>
              <div className='signup_row col-4'>
                <label htmlFor='email'>Last name</label>
                <input type='text' name='email' id='email' />
              </div>
            </div>
            <div className='row'>
              <div className='signup_row col-6'>
                <label htmlFor='email'>Email</label>
                <input type='text' name='email' id='email' />
              </div>
              <div className='signup_row col-6'>
                <label htmlFor='email'>Phone</label>
                <input type='text' name='email' id='email' />
              </div>
            </div>
            <div className='row'>
              <div className='signup_row col-6'>
                <label htmlFor='email'>Password</label>
                <input type='text' name='email' id='email' />
              </div>
              <div className='signup_row col-6'>
                <label htmlFor='email'>Confirm password</label>
                <input type='text' name='email' id='email' />
              </div>
            </div>
            <div className='input_row col-4'>
              <button type='button'>Signup</button>
            </div>
            {/* <p className='msg'>Error message</p> */}
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
