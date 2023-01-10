import { useState } from 'react';

import { DisplayCoin, Loading, Ticker, Navbar } from 'components';
import { subscribe } from 'services';

function Home() {
  const [tickers, setTickers] = useState([]);

  const handleAddTicker = (tickerName) => {
    const newTicker = {
      id: tickerName,
      name: tickerName,
      price: [],
    };

    setTickers([...tickers, newTicker]);

    subscribe(tickerName, (newPrice) => {
      setTickers((prevTickers) =>
        prevTickers.map((ticker) =>
          ticker.id === tickerName ? { ...ticker, price: [...ticker.price, newPrice] } : ticker
        )
      );
      return newPrice;
    });
  };

  return (
    <div className="container mx-auto flex flex-col items-center bg-gray-100 p-4">
      <div>
        <Navbar />
        <Loading />
        <div className="container">
          <Ticker onAddTicker={handleAddTicker} />
          <hr className="w-full border-t border-gray-600 my-4" />
          <DisplayCoin tickerData={tickers} setTickers={setTickers} />
        </div>
      </div>
    </div>
  );
}

export default Home;
