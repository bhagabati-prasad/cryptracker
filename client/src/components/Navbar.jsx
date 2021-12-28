import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
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
              <Link to='/logout' className='btn btn-dark mx-2'>
                Logout
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
