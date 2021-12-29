import axios from 'axios';
import { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Navbar from '../Navbar';
import AllCurrencyList from './AllCurrencyList';
import FavouriteList from './FavouriteList';
import TabSection from './TabSection';

const Homepage = () => {
  const history = useHistory();

  useEffect(() => {
    axios
      .get('/api/user/isLoggedIn')
      .then((res) => {
        !res.data?.isLoggedIn && history.push('/login');
      })
      .catch((error) => {
        console.log('error: ', error.response);
        history.push('/login');
      });
    return;
  }, []);

  return (
    <>
      <Navbar />
      <TabSection />
      <Switch>
        <Route exact path='/' component={AllCurrencyList} />
        <Route path='/favourite' component={FavouriteList} />
      </Switch>
    </>
  );
};

export default Homepage;
