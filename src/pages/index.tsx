import React from 'react';

import _map from 'lodash/map';

import { BetProvider } from '../contexts/bet';
import BetList from '../components/BetList';

const Home = (): JSX.Element => (
  <BetProvider>
    <div className='mc center'>
      <BetList />
    </div>
  </BetProvider>
);

export default Home;
