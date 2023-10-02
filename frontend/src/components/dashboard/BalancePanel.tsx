import { CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { Card, CardBody, CardHeader, Chip, Divider } from '@nextui-org/react'
import React from 'react'

function BalancePanel({ balance }: { balance: string }) {
  return (
    <Card className='balance'>
      <CardHeader>Current balance</CardHeader>
      <Divider />
      <CardBody>
        <Chip
          variant='faded'
          color='success'
        >
          $ {balance} NEAR
        </Chip>{' '}
      </CardBody>
    </Card>
  )
}

export default BalancePanel
