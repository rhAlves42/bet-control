import React, { useContext } from 'react';
import { List, Spin } from 'antd';
import { BetContext } from '../../contexts/bet';
import { BetItem } from '../BetItem';


const BetList = (): JSX.Element => {
  const { bets } = useContext(BetContext);
  if (!bets) return <Spin size='large' spinning={true}/>
  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={bets}
      renderItem={(item) => <BetItem bet={item} />}
    />
  )
};

export default BetList;