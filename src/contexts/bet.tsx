import React, { createContext, useEffect, useState } from 'react';
import betServices from '../services/firebase/bet';
import { Bet } from '../interfaces';

export const BetContext = createContext({ bets: [] as Bet[], teste: '', setTeste: (prevState) => {} });

export const BetProvider = ({ children }) => {
  const [bets, setBets] = useState<Bet[] >();
  const [teste, setTeste] = useState('')
  const getBets = async () => {
    const newValues = [];
    const data = await betServices.getBets();
    data.docs.forEach(bet => newValues.push(bet.data()));
    setBets(newValues);
  };

  useEffect(() => {
    console.log('bet inside provider -->', bets);
  }, [bets]);

  useEffect(() => {
    getBets();
  }, []);

  return <BetContext.Provider value={{ bets, teste, setTeste }}>{children}</BetContext.Provider>;
};

