import { useContext, useEffect, useState } from 'react';
import { CoinContext } from '../../App';
import '../../styles/all_currency_section.css';
import CoinCard from './CoinCard';

const FavouriteList = () => {
  const { coins } = useContext(CoinContext);
  const [allCoins, setAllCoins] = useState(coins);

  useEffect(() => setAllCoins(coins), [coins]);

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
            {!!allCoins.length &&
              allCoins
                // .slice(0, 9)
                .map((coin) => (
                  <div className='col-md-4 col-12' key={coin?.id}>
                    <CoinCard coin={coin} />
                  </div>
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FavouriteList;
