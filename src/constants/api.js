const { API_KEY } = process.env;

const URLS = {
  ALL_COINS_LIST: 'all/coinlist?summary=true',
  COINS_PRICE: `pricemulti?tsyms=USD&api_key=${API_KEY}&fsyms=`,
};

export default URLS;
