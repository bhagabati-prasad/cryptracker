import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import '../styles/navbar.css';

const Navbar = () => {
  const { user } = useContext(UserContext);

  const [userName, setUserName] = useState('');

  useEffect(() => setUserName(`${user?.firstName} ${user?.lastName}`), [user]);

  const handleLogout = async () => {
    await axios.get('/api/user/logout');
    window.location.reload(false);
  };

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
                {userName && <p>{userName}</p>}
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
