import { useEffect, useState, createContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/homepage';
import Login from './components/login_signup/Login';
import Signup from './components/login_signup/Signup';
import axios from 'axios';

export const CoinContext = createContext(null);
export const UserContext = createContext(null);

const cryptoURL =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=250&page=1&sparkline=false';

function App() {
  const [coins, setCoins] = useState([]);
  const [user, setUser] = useState();
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    axios
      .get('/api/user/isLoggedIn')
      .then((res) => {
        console.log(res.data);
        if (res.data.isLoggedIn) {
          setUser(res.data.user);
          setFavs(res.data?.user?.favourites);
        }
      })
      .catch((error) => console.log(error.response));

    axios
      .get(cryptoURL)
      .then((res) => setCoins(res.data))
      .catch((error) => console.log(error.response));
    return;
  }, []);

  return (
    <>
      <UserContext.Provider value={{ user, favs, setFavs }}>
        <CoinContext.Provider value={{ coins }}>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/favourite' component={Homepage} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
          </Switch>
        </CoinContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
