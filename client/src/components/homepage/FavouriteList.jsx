import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { CoinContext, UserContext } from '../../App';
import '../../styles/all_currency_section.css';
import CoinCard from './CoinCard';

const FavouriteList = () => {
  const { coins } = useContext(CoinContext);
  const { user, favs, setFavs } = useContext(UserContext);
  const [favCoins, setFavCoins] = useState(coins);
  // const [favs, setFavs] = useState(user?.favourites || []);

  const handleFavourite = (id) => {
    console.log({ id });
    axios
      .get(`/api/user/favourite/${id}`)
      .then((res) => setFavs(res.data?.favourites))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // setFavs(user?.favourites || []);
    let filteredCoins = [];
    user?.favourites.map((fav) => {
      const filtCoin = coins.filter((coin) => coin.id.toLowerCase() === fav);
      filteredCoins.push(filtCoin);
    });
    filteredCoins = filteredCoins.flat(Infinity);
    setFavCoins(filteredCoins);
    return;
  }, [coins, user, favs]);

  return (
    <>
      <div className='all_currency_section'>
        <div className='container'>
          <div className='row'>
            <div className='col-6 saerch_section'>
              <h3>Favourites</h3>
            </div>
          </div>
          <hr />
          <div className='row currency_section'>
            {!!favCoins.length ? (
              favCoins
                // .slice(0, 9)
                .map((coin) => (
                  <div className='col-md-4 col-12' key={coin?.id}>
                    <CoinCard
                      coin={coin}
                      fav={favs.includes(coin?.id)}
                      handleFavourite={handleFavourite}
                    />
                  </div>
                ))
            ) : (
              <h3>Favourite list empty</h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FavouriteList;
