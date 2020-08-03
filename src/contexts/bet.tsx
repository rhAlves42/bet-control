import React, { createContext, useEffect, useState } from 'react';

import betServices from '../services/firebase/bet';
import { ICategories, IBet } from '../interfaces';

export const BetContext = createContext({
  bets: [] as IBet[],
  categories: [] as ICategories[],
  getBetsCategories: async () => {},
});


export const BetProvider = ({ children }) => {
  const [bets, setBets] = useState<IBet[]>();
  const [categories, setCategories] = useState<ICategories[]>();
  const [teste, setTeste] = useState('');
  
  const getBets = async () => {
    const newValues = [];
    const data = await betServices.getBets();
    data.docs.forEach(bet => newValues.push(bet.data()));
    setBets(newValues);
  };

  const getBetsCategories = async () => {
    await betServices.getBetsCategories()
    .then((snapshot) => {
      const newValues = [];
      snapshot.forEach((doc) => newValues.push(doc.data()));
      setCategories(newValues);
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });
  };


  useEffect(() => {
    getBets();
  }, []);

  return <BetContext.Provider value={{ bets, categories, getBetsCategories }}>{children}</BetContext.Provider>;
};

