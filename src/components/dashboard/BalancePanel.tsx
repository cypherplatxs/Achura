import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import React from 'react';

function BalancePanel({ balance }: { balance: number }) {
  return (
    <Card className='max-w-md'>
      <CardHeader>Current balance</CardHeader>
      <Divider />
      <CardBody>${balance} Usd </CardBody>
    </Card>
  );
}

export default BalancePanel;