import axio from 'axios';
import URLS from 'constants/api';

const axios = axio.create({
  baseURL: 'https://min-api.cryptocompare.com/data/',
});

const subscribers = {};

const publish = (key, data) => {
  subscribers[key].forEach((callback) => callback(data));
};

const subscribe = (key, callback) => {
  if (!Array.isArray(subscribers[key])) {
    subscribers[key] = [];
  }

  subscribers[key].push(callback);
  const index = subscribers[key].length - 1;

  return {
    unsubscribe() {
      subscribers[key].splice(index, 1);
    },
  };
};

setInterval(async () => {
  const coinsNames = Object.keys(subscribers);
  if (coinsNames.length === 0) return;
  const data = await getCoinsInfo(coinsNames);
  if (data.length > 0) {
    data.forEach(({ name, price }) => {
      console.log(name, price);
      publish(name, price);
    });
  }
}, 3000);

const getCoinsInfo = async (names) => {
  try {
    const { data } = await axios.get(`${URLS.COINS_PRICE}${names.join(',')}`);

    return Object.entries(data).map(([name, { USD: price }]) => ({ name, price }));
  } catch (error) {
    console.log(error);
  }

  return [];
};

const fetchCoinsList = async () => {
  try {
    const {
      data: { Data },
    } = await axios.get(URLS.ALL_COINS_LIST);

    return Data;
  } catch (error) {
    console.log(error);
  }

  return [];
};

const getAllCoinsList = async () => {
  const coinsList = await fetchCoinsList();
  return Object.keys(coinsList);
};

export { getAllCoinsList, subscribe };
