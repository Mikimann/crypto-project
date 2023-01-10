import { useEffect } from 'react';

import { getAllCoinsList } from 'services';
import { usePersistStorage } from '.';

const ALL_COINS_KEY = 'allCoinsList';

let once = false;

const useAllCoinsList = () => {
  const [allCoinsList, setAllCoinsList] = usePersistStorage([], ALL_COINS_KEY);

  useEffect(() => {
    if (!once && allCoinsList.length === 0) {
      getAllCoinsList().then(setAllCoinsList);
    }
    if (!once) once = true;
  }, [allCoinsList.length, setAllCoinsList]);

  return allCoinsList;
};

export default useAllCoinsList;
