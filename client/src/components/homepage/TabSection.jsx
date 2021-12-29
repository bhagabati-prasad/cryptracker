import { Link, useLocation } from 'react-router-dom';
import '../../styles/tab_section.css';

const TabSection = () => {
  const location = useLocation();

  return (
    <>
      <div className='container my-4 tab_section'>
        <div className='row'>
          <Link
            to='/'
            className={`col-6 single_tab ${
              location.pathname === '/' && 'active'
            }`}
          >
            All Currencies
          </Link>
          <Link
            to='/favourite'
            className={`col-6 single_tab ${
              location.pathname === '/favourite' && 'active'
            }`}
          >
            Favourites
          </Link>
        </div>
      </div>
    </>
  );
};

export default TabSection;
