import { Button, Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import React from 'react'

function WithdrawPanel() {
  return (
    <Card className='max-w-md'>
        <CardHeader>
            Withdraw funds
        </CardHeader>
        <Divider/>
        <CardBody>
            <Button variant='shadow'>Withdraw!</Button>
        </CardBody>
    </Card>
  )
}

export default WithdrawPanel