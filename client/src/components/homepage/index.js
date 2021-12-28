import { Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar';
import AllCurrencyList from './AllCurrencyList';
import FavouriteList from './FavouriteList';
import TabSection from './TabSection';

const Homepage = () => {
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
