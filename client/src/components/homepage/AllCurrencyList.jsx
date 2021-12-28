import { useContext, useEffect, useState } from 'react';
import { CoinContext } from '../../App';
import '../../styles/all_currency_section.css';
import CoinCard from './CoinCard';

const AllCurrencyList = () => {
  const { coins } = useContext(CoinContext);
  const [allCoins, setAllCoins] = useState(coins);

  useEffect(() => setAllCoins(coins), [coins]);

  const handleInputSearch = (e) => {
    const curVal = e.target.value;
    if (curVal) {
      const filteredCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(curVal.trim())
      );
      setAllCoins(filteredCoins);
    } else {
      setAllCoins(coins);
    }
  };

  return (
    <>
      <div className='all_currency_section'>
        <div className='container'>
          <div className='row'>
            <div className='col-6 saerch_section'>
              <h3>Search currency</h3>
              <input
                onChange={handleInputSearch}
                type='text'
                name='search'
                placeholder='e.g: bitcoin'
              />
            </div>
          </div>
          <hr />
          <div className='row currency_section'>
            {!!allCoins.length &&
              allCoins
                .sort((a, b) =>
                  a.name > b.name ? 1 : b.name > a.name ? -1 : 0
                )
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

export default AllCurrencyList;
