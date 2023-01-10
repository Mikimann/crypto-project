import { useState } from 'react';
import PropTypes from 'prop-types';

import { BottomGraph, DeleteButton } from 'components';

function DisplayCoin({ tickerData, setTickers }) {
  const [selectedCrypto, setSelectedCrypto] = useState();
  const [close, setClose] = useState(false);

  const handleSelect = (e) => {
    setSelectedCrypto(e.currentTarget.id);
    setClose(false);
  };

  const handleDelete = () => {
    const filteredData = tickerData.filter((item) => item.id !== selectedCrypto);
    setTickers(filteredData);
    setClose(true);
  };

  return (
    <section>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {tickerData.length === 0 ? (
          <div className="mt-1 text-3xl font-semibold text-gray-900">
            No coin inside the wallet.
          </div>
        ) : (
          tickerData.map((ticker) => (
            <div
              role="textbox"
              tabIndex={0}
              key={ticker.name}
              id={ticker.id}
              className={`bg-white overflow-hidden shadow rounded-lg  ${
                selectedCrypto === ticker.id ? 'border-4 border-purple-800' : ''
              } cursor-pointer`}
              onClick={handleSelect}
            >
              <div className="px-4 py-5 sm:p-6 text-center">
                <dt className="text-sm font-medium text-gray-500 truncate">{`${ticker.name.toUpperCase()}-USD`}</dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {ticker.price[ticker.price.length - 1] || '~'}
                </dd>
              </div>
              <div className="w-full border-t border-gray-200" />
              <DeleteButton type="delete" onClick={handleDelete}>
                Delete
              </DeleteButton>
            </div>
          ))
        )}
      </dl>
      <hr className="w-full border-t border-gray-600 my-4" />
      {!close && <BottomGraph selectedCrypto={selectedCrypto} setClose={setClose} />}
    </section>
  );
}

DisplayCoin.propTypes = {
  tickerData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  setTickers: PropTypes.func,
};

DisplayCoin.defaultProps = {
  tickerData: [
    {
      id: '1',
      name: 'Bitcoin',
      price: 0.0,
    },
  ],
  setTickers: () => {},
};

export default DisplayCoin;
