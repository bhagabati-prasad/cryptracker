import axios from 'axios';
import { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();

  const handleLogout = async () => {
    await axios.get('/api/user/logout');
    window.location.reload(false);
  };

  useLayoutEffect(() => {
    const isLoggedIn = async () => {
      try {
        const res = await axios.get('/api/user/isLoggedIn');
        if (res.statusText && res.data?.isLoggedIn) {
          setIsLoggedIn(true);
          setUser(res.data?.user);
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
      <header>
        <div className='container'>
          <nav>
            <div className='logo'>
              <Link to='/'>Cryptracker</Link>
            </div>
            <div className='right d-flex align-items-center'>
              <div className='profile'>
                <i className='fas fa-user-circle'></i>
                <p>John Doe</p>
              </div>
              <button onClick={handleLogout} className='btn btn-dark mx-2'>
                Logout
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
