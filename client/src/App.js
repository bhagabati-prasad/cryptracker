import { useEffect, useState, createContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/homepage';
import Login from './components/login_signup/Login';
import Signup from './components/login_signup/Signup';
import axios from 'axios';

export const CoinContext = createContext(null);

const cryptoURL =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=250&page=1&sparkline=false';

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(cryptoURL)
      .then((res) => setCoins(res.data))
      .catch((error) => console.log(error.response));
    return;
  }, []);

  return (
    <>
      <Switch>
        <CoinContext.Provider value={{ coins }}>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/favourite' component={Homepage} />
        </CoinContext.Provider>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
      </Switch>
    </>
  );
}

export default App;
