import React from 'react';
import { List, Card } from 'antd';
import { Bet } from '../../interfaces';

interface Props {
  bet: Bet; 
}

export const BetItem = ({ bet, ...props }: Props): JSX.Element => {
  return (
    <List.Item {...props}>
      <Card title={bet.market}>
        <p>{bet.game}</p>
        <span>{bet.odd}</span>
      </Card>
    </List.Item>
  );
};