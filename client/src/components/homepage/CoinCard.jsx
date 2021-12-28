const CoinCard = ({ coin }) => {
  const handleFavourite = (id) => {
    console.log('coin id-- ', id);
  };

  return (
    <>
      <div className='card'>
        <div className='card_image'>
          <img src={coin?.image} alt={coin?.name} />
        </div>
        <div className='card_body'>
          <div className='card_body_content'>
            <h4>{coin?.name}</h4>
            <p>
              <i className='fas fa-dollar-sign'></i>&nbsp;
              {coin?.current_price}
            </p>
          </div>
          <div className='card_body_fav'>
            <span
              onClick={() => handleFavourite(coin?.id)}
              className='fav_icon'
            >
              {/* <span className='fav_icon active'> */}
              <i className='far fa-heart'></i>
              {/* <i className='fas fa-heart'></i> */}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinCard;
